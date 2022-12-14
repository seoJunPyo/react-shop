import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';
//atom
import { shoppingListAtom } from '../Atom/AtomStore';
import { ShoppingListType } from '../Type/Type';
//type
import ItemList from '../Components/ShoppingList/ItemList';
//components
import LoadingPage from './LoadingPage';
import CategoryBar from '../Components/Common/CategoryBar';
//i style
import { PageContainer } from '../assets/Style/CommonStyle';

interface CategoryPage {
	isLoading: boolean;
}

const CategoryPage = (props: CategoryPage) => {
	const categoryUrl = useParams();
	const [shoppingList, setShoppingList] = useRecoilState(shoppingListAtom);
	const [itemList, setitemList] = useState<ShoppingListType[]>([]);

	useEffect(() => {
		const filtered = shoppingList.filter(
			(item) => item.category === categoryUrl.category
		);
		setitemList(filtered);
	}, [categoryUrl]);

	return (
		<>
			{props.isLoading ? (
				<LoadingPage length={1} />
			) : (
				<Container>
					<CategoryBar root="Home" currnet={categoryUrl.category} />

					<ItemList
						itemList={itemList}
						category={categoryUrl.category as string}
						categoryPage={true}></ItemList>
				</Container>
			)}
		</>
	);
};

const Container = styled.section`
	${PageContainer}
`;

export default CategoryPage;

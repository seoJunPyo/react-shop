import styled from '@emotion/styled';
//libray
import { useRecoilState, useRecoilValue } from 'recoil';
//atom
import { atomShoppingList, getCategoryList } from '../../Atom/AtomStore';
//conponents
import ItemList from './ItemList';
//type
import { ShoppingListType } from '../../Type/dataType';
//style
import { CommonWidth } from '../../assets/style/CommonStyle';

const ShoppingList = () => {
	const [shoppingList] = useRecoilState(atomShoppingList);
	const categoryList = useRecoilValue(getCategoryList);

	return (
		<Container>
			{categoryList.map((category) => {
				const itemList = shoppingList.filter(
					(item: ShoppingListType) => category === item.category
				);
				return (
					<ItemList key={category} category={category} itemList={itemList} />
				);
			})}
		</Container>
	);
};

export const Container = styled.section`
	${CommonWidth}
	text-align: center;
	margin: 48px auto 0;
`;
export default ShoppingList;

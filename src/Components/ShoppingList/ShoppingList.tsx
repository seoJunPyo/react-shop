import styled from '@emotion/styled';
//libray
import { useRecoilState } from 'recoil';
//atom
import {
	shoppingListAtom,
	categoryListAtom,
	darkLightModeAtom,
} from '../../Atom/AtomStore';
//conponents
import ItemList from './ItemList';
//type
import { ShoppingListType } from '../../Type/Type';
//style
import { CommonWidth } from '../../assets/Style/CommonStyle';

const ShoppingList = () => {
	const [shoppingList, setShoppingList] = useRecoilState(shoppingListAtom);
	const [categoryList, setCategoryList] = useRecoilState(categoryListAtom);
	const [darkLightMode] = useRecoilState(darkLightModeAtom);

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

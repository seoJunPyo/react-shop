import { atom, selector } from 'recoil';
import { priceFormeter } from '../Components/Cart/handleCartList';
import { CartType, ShoppingListType } from '../Type/dataType';

const init = localStorage.getItem('Cart')
	? JSON.parse(localStorage.getItem('Cart') as string)
	: [];

export const atomShoppingList = atom<ShoppingListType[]>({
	key: 'shoppingList',
	default: [],
});

export const atomCartList = atom<CartType[]>({
	key: 'cartList',
	default: init,
});

export const atomSideNav = atom<boolean>({
	key: 'sideNav',
	default: false,
});

export const atomDarkLightMode = atom<boolean>({
	key: 'darkLight',
	default: false,
});

export const atomCarouselLoction = atom<number>({
	key: 'carousel',
	default: 0,
});

export const getCategoryList = selector({
	key: 'category',
	get: ({ get }) => {
		const list = get(atomShoppingList);
		const result = list.map((item) => item.category);

		return [...new Set(result)];
	},
});

export const getTotalAcount = selector({
	key: 'totalAcount',
	get: ({ get }) => {
		const list = get(atomCartList);
		const result = list.reduce((a, c) => {
			return (a += c.amount * c.price);
		}, 0);

		return priceFormeter(result);
	},
});

export const getTotalAmount = selector({
	key: 'totelAmount',
	get: ({ get }) => {
		const list = get(atomCartList);
		const result = list.reduce((a, c) => {
			return (a += c.amount);
		}, 0);
		return result;
	},
});

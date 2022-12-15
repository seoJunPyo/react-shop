import exp from 'constants';
import { atom, selector } from 'recoil';
import { CartType, ShoppingListType } from '../Type/dataType';

const init = localStorage.getItem('Cart')
	? JSON.parse(localStorage.getItem('Cart') as string)
	: [];

export const shoppingListAtom = atom<ShoppingListType[]>({
	key: 'shoppingList',
	default: [],
});

export const cartListAtom = atom<CartType[]>({
	key: 'cartList',
	default: init,
});

export const sideNavAtom = atom<boolean>({
	key: 'sideNav',
	default: false,
});

export const darkLightModeAtom = atom<boolean>({
	key: 'darkLight',
	default: false,
});

export const carouselLoctionAtom = atom<number>({
	key: 'carousel',
	default: 0,
});

export const getCategoryList = selector({
	key: 'category',
	get: ({ get }) => {
		const list = get(shoppingListAtom);
		const result = list.map((item) => item.category);

		return [...new Set(result)];
	},
});

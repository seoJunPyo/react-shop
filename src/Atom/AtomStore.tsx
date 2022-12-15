import exp from 'constants';
import { atom } from 'recoil';
import { CartType, ShoppingListType } from '../Type/dataType';

type CategoryType = string[];

const init = localStorage.getItem('Cart')
	? JSON.parse(localStorage.getItem('Cart') as string)
	: [];

export const shoppingListAtom = atom<ShoppingListType[]>({
	key: 'shoppingList',
	default: [],
});

export const categoryListAtom = atom<CategoryType>({
	key: 'categoryList',
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

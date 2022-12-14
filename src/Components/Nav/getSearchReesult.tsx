import { ShoppingListType } from '../../Type/Type';

export const getSearchResult = (list: ShoppingListType[], keyword: string) => {
	const regex = new RegExp(keyword, 'gi');
	const result = list.filter((item) => regex.test(item.title));

	return result;
};

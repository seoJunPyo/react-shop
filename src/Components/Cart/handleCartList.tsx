import { ShoppingListType, CartType } from '../../Type/dataType';
export const priceFormeter = (target: number): number => {
	return Number(target.toFixed(2));
};

// 카트 수량 더하기 빼기
export const handleAmount = (
	id: string | undefined,
	list: CartType[],
	count: number
) => {
	const find = list.find((item) => item.id.toString() === id);
	const findIdx = list.findIndex((item) => item.id.toString() === id);

	if (!find) return;
	if (find.amount <= 1 && count < 0) {
		return removeItem(id, list);
	}

	const filter = list.filter((item) => item.id.toString() !== id);
	const newData = { ...find, amount: find.amount + count };
	filter.splice(findIdx, 0, newData);
	return filter;
};

// 카트에 없던 새 상품 추가
export const addNewItem = (
	id: string | undefined,
	list: ShoppingListType[]
) => {
	const item = list.filter((item) => {
		return item.id.toString() === id;
	});

	const newItme = {
		id: item[0].id,
		title: item[0].title,
		price: item[0].price,
		img: item[0].image,
		amount: 1,
	};

	return newItme;
};

// 카트에 있는 상품 지우기
export const removeItem = (id: string | undefined, list: CartType[]) => {
	const filter = list.filter((item) => item.id.toString() !== id);
	return filter;
};

// 카트 전체 삭제
export const removerAllItem = () => {
	return [];
};

// 로컬 스토리지에 cart 정보 저장
export const setLocalStorage = (list: CartType[]) => {
	localStorage.removeItem('Cart');
	localStorage.setItem('Cart', JSON.stringify(list));
};

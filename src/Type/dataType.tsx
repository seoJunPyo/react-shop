export interface ShoppingListType {
	category: string;
	description: string;
	id: number;
	title: string;
	image: string;
	price: number;
	rating: {
		rate: number;
		count: number;
	};
}

export interface CartType {
	id: number;
	title: string;
	price: number;
	img: string;
	amount: number;
}

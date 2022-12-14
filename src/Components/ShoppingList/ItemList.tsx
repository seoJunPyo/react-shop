import React, { Suspense } from 'react';
import styled from '@emotion/styled';
//component
import ItemCard from './ItemCard';
//type
import { ShoppingListType } from '../../Type/Type';

interface ItemListProps {
	key?: string;
	itemList: ShoppingListType[];
	category: string;
	categoryPage?: boolean;
}

const ItemList = (props: ItemListProps) => {
	return (
		<Container>
			<Title>{props.category}</Title>
			<List>
				{props.itemList.map((item, idx) => {
					if (idx > 3 && !props.categoryPage) return;
					return <ItemCard key={item.title} itemInfo={item} />;
				})}
			</List>
		</Container>
	);
};

const Container = styled.div`
	padding: 40px 12px;
`;

export const Title = styled.h3`
	font-size: 32px;
	font-weight: 700;
`;

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	margin-top: 24px;

	@media (max-width: 968px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
	}

	@media (max-width: 576px) {
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(4, 1fr);
	}
`;

export default ItemList;

import styled from '@emotion/styled';
import React, { useState } from 'react';
import { FlexTemplate } from '../../assets/Style/CommonStyle';
import AmountBtn from './AmountBtn';
import { CartType } from '../../Type/Type';
import { priceFormeter } from './CartListHandler';

interface CardItemProps {
	itemInfo: CartType;
}

const CartItem = (props: CardItemProps) => {
	return (
		<Container>
			<ImgCon>
				<Img src={props.itemInfo.img} alt="" />
			</ImgCon>
			<TextCon>
				<Title>{props.itemInfo.title}</Title>
				<Price>
					${priceFormeter(props.itemInfo.price * props.itemInfo.amount)}
				</Price>
				<AmountBtn amount={props.itemInfo.amount} id={props.itemInfo.id} />
			</TextCon>
		</Container>
	);
};

const Container = styled.li`
	${FlexTemplate}
	justify-content : flex-start;
	margin-bottom: 40px;
`;

const ImgCon = styled.div`
	${FlexTemplate}
	flex-shrink :0;
	width: 200px;
	height: 200px;
	border-radius: 15px;
	background-color: #fff;

	@media (max-width: 576px) {
		width: 150px;
		height: 150px;
	}
`;

const Img = styled.img`
	width: 60%;
`;

const TextCon = styled.div`
	padding: 32px;

	@media (max-width: 576px) {
		display: grid;
	}
`;

const Title = styled.p`
	font-size: 20px;
	margin-bottom: 16px;

	@media (max-width: 576px) {
		font-size: 16px;
		margin-bottom: 0px;
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
`;

const Price = styled.p`
	font-size: 24px;
	font-weight: 600;
	margin: 16px 0 24px;

	@media (max-width: 576px) {
		font-size: 20px;
		margin-top: 12px;
	}
`;

export default CartItem;

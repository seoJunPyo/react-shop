import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
//atom
import { cartListAtom } from '../../Atom/AtomStore';
//function
import { handleAmount } from './handleCartList';
//style
import { Btn } from '../Common/Button';
import { FlexTemplate } from '../../assets/Style/CommonStyle';

interface AmountBtnProps {
	id: number;
	amount: number;
}

const AmountBtn = (props: AmountBtnProps) => {
	const [cartList, setCartList] = useRecoilState(cartListAtom);

	const plus = () => {
		const newData = handleAmount(props.id.toString(), cartList, 1);
		if (newData) setCartList(newData);
	};

	const minus = () => {
		const newData = handleAmount(props.id.toString(), cartList, -1);
		if (newData) setCartList(newData);
	};

	return (
		<Container>
			<Amount radius={'10px 0 0 10px'} onClick={minus}>
				-
			</Amount>
			<Count>{props.amount}</Count>

			<Amount radius={'0 10px 10px 0'} onClick={plus}>
				+
			</Amount>
		</Container>
	);
};

const Container = styled.div`
	${FlexTemplate}
	justify-content : flex-start;
`;

const Amount = styled.button<{ radius: string }>`
	${Btn}
	${FlexTemplate}
	width : 40px;
	height: 40px;
	color: #fff;
	background-color: #6419e6;
	border-radius: ${(props) => props.radius};
	font-size: 20px;
	:hover {
		background-color: #4f13b8;
		transition: background-color 0.2s;
	}
`;
const Count = styled.span`
	${FlexTemplate}
	width: 40px;
	height: 40px;
	font-size: 18px;
	font-weight: 700;
`;

export default AmountBtn;

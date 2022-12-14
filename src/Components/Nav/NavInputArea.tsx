import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
//style icon
import { BiShoppingBag } from 'react-icons/bi';
import { BsSun, BsMoon } from 'react-icons/bs';
import { Button, FlexTemplate } from '../../assets/style/CommonStyle';
import { hoverStyle } from '../../assets/style/darkLightColor';
//component
import NavInput from './NavInput';
//data
import { atomDarkLightMode, getTotalAmount } from '../../Atom/AtomStore';

const NavInputArea = () => {
	const navigate = useNavigate();
	const [darkLightMode, setDarkLightMode] = useRecoilState(atomDarkLightMode);
	const totalAmount = useRecoilValue(getTotalAmount);

	const toCart = () => {
		navigate('/cart');
	};

	return (
		<InputArea>
			<DarkLightModeBtn
				onClick={() => {
					setDarkLightMode(!darkLightMode);
				}}>
				{darkLightMode ? <BsSun /> : <BsMoon />}
			</DarkLightModeBtn>
			<InputDiv>
				<NavInput />
			</InputDiv>
			<CartBtn hover={hoverStyle(darkLightMode)} onClick={toCart}>
				<BiShoppingBag />
				<ItemCountBage>{totalAmount}</ItemCountBage>
			</CartBtn>
		</InputArea>
	);
};

const InputArea = styled.div`
	${FlexTemplate}
`;

const DarkLightModeBtn = styled.button`
	padding: 12px;
	font-weight: 700;
	${FlexTemplate}
	${Button}
`;

const CartBtn = styled.button<{ hover: string }>`
	position: relative;
	padding: 12px;
	border-radius: 10px;
	${FlexTemplate}
	${Button}

	:hover {
		background-color: ${(props) => props.hover};
		transition: background-color 0.3s;
	}
`;

const ItemCountBage = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 4px;
	right: 4px;
	width: 20px;
	height: 20px;
	border-radius: 100%;
	background-color: #ef4444;
	color: #fff;
	font-size: 12px;
	font-weight: 700;
`;

const InputDiv = styled.div`
	position: relative;
`;

export default NavInputArea;

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { BiSearch, BiShoppingBag } from 'react-icons/bi';
import { BsSun, BsMoon } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { Button, FlexTemplate } from '../../assets/Style/CommonStyle';
import { useRecoilState } from 'recoil';
import { cartListAtom, darkLightModeAtom } from '../../Atom/AtomStore';
import { getTotalAmount } from '../Cart/CartListHandler';
import NavInput from './NavInput';
import { hoverStyle } from '../../assets/Style/darkLightColor';

const NavInputArea = () => {
	const [cartList] = useRecoilState(cartListAtom);
	const [mobileInputState, setMobileInputState] = useState(false);
	const navigate = useNavigate();
	const [darkLightMode, setDarkLightMode] = useRecoilState(darkLightModeAtom);

	const toCart = () => {
		navigate('/cart');
	};

	const closeMobileInput = () => {
		setMobileInputState(false);
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
				<ItemCountBage>{getTotalAmount(cartList)}</ItemCountBage>
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

const CartBtn = styled.button`
	position: relative;
	padding: 12px;
	border-radius: 10px;
	${FlexTemplate}
	${Button}

	:hover {
		background-color: ${(props: { hover: string }) => props.hover};
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

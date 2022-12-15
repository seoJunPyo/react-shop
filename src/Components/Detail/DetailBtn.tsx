import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
//atom
import { cartListAtom, shoppingListAtom } from '../../Atom/AtomStore';
//function
import {
	addNewItem,
	handleAmount,
	setLocalStorage,
} from '../Cart/CartListHandler';
//components
import { PurpleButton, GreyButton } from '../Common/Button';
import Modal from '../Common/Modal';

const DetailBtn = () => {
	const { id } = useParams();
	const [shoppingList] = useRecoilState(shoppingListAtom);
	const [cartList, setCartList] = useRecoilState(cartListAtom);
	const [modal, setModal] = useState(false);
	const navigate = useNavigate();

	const addCart = () => {
		setModal(true);
		const newData = handleAmount(id, cartList, 1);

		if (newData) {
			setCartList(newData);
			return;
		}

		const newItem = addNewItem(id, shoppingList);
		setCartList([...cartList, newItem]);
	};

	const confirm = () => {
		navigate('/cart');
		setModal(false);
	};

	const reject = () => {
		setModal(false);
	};

	const modalText = {
		title: '장바구니에 상품이 담겼습니다.',
		notice: '장바구니로 이동하시겠습니까?',
		confirm: '네, 이동합니다.',
		reject: '아니요',
	};

	useEffect(() => {
		return () => {
			setLocalStorage(cartList);
		};
	}, [cartList]);

	return (
		<Container>
			<Modal modal={modal} confirm={confirm} reject={reject} text={modalText} />
			<PurpleButton onClick={addCart}>장바구니에 담기</PurpleButton>
			<Link to={'/cart'}>
				<GreyButton>장바구니로 이동</GreyButton>
			</Link>
		</Container>
	);
};

const Container = styled.div`
	display: flex;

	button {
		margin-right: 16px;
	}
`;

export default DetailBtn;

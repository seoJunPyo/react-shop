import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
//components
import { PurpleButton, GreyButton } from '../Common/Button';
import Modal from '../Common/Modal';
//data
import { atomCartList, atomShoppingList } from '../../Atom/AtomStore';
import modalText from '../Common/ModalText';
//handler
import {
	addNewItem,
	handleAmount,
	setLocalStorage,
} from '../Cart/handleCartList';

const DetailBtn = () => {
	const { id } = useParams();
	const [shoppingList] = useRecoilState(atomShoppingList);
	const [cartList, setCartList] = useRecoilState(atomCartList);
	const [modal, setModal] = useState(false);
	const navigate = useNavigate();

	const addCart = () => {
		setModal(true);
		const isNewData = handleAmount(id, cartList, 1);

		if (isNewData) {
			setCartList(isNewData);
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

	useEffect(() => {
		return () => {
			setLocalStorage(cartList);
		};
	}, [cartList]);

	return (
		<Container>
			<Modal
				modal={modal}
				confirm={confirm}
				reject={reject}
				text={modalText.detail}
			/>
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

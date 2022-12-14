import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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

const DetailBtn = () => {
	const { id } = useParams();
	const [shoppingList] = useRecoilState(shoppingListAtom);
	const [cartList, setCartList] = useRecoilState(cartListAtom);

	const addCart = () => {
		const newData = handleAmount(id, cartList, 1);

		if (newData) {
			setCartList(newData);
			return;
		}

		const newItem = addNewItem(id, shoppingList);
		setCartList([...cartList, newItem]);
	};

	useEffect(() => {
		return () => {
			setLocalStorage(cartList);
		};
	}, [cartList]);

	return (
		<Container>
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

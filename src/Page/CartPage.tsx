import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
//style
import { PageContainer } from '../assets/style/CommonStyle';
//component
import CategoryBar from '../Components/Common/CategoryBar';
import CartItem from '../Components/Cart/CartItem';
import EmptyCart from '../Components/Cart/EmptyCart';
import TotalAcountCart from '../Components/Cart/TotalAcountCart';
//tyep
import { CartType } from '../Type/dataType';
//data
import { cartListAtom } from '../Atom/AtomStore';
//handler
import { setLocalStorage } from '../Components/Cart/handleCartList';

const CartPage = () => {
	const [cartList] = useRecoilState(cartListAtom);
	const [loading, setLoading] = useState('');

	useEffect(() => {
		return () => {
			setLocalStorage(cartList);
		};
	}, [cartList]);

	useEffect(() => {
		setLoading('end');

		return () => {
			setLoading('');
		};
	}, []);

	return (
		<Container className={loading}>
			<CategoryBar root={'Home'} currnet={'Cart'} />
			<Cart>
				{cartList.length > 0 ? (
					cartList.map((item: CartType) => (
						<CartItem key={item.id} itemInfo={item} />
					))
				) : (
					<EmptyCart />
				)}
			</Cart>
			<TotalAcountCart />
		</Container>
	);
};

const Container = styled.section`
	${PageContainer};
`;

const Cart = styled.ul`
	padding: 60px 24px;

	@media (max-width: 576px) {
		padding: 16px 12px;
	}
`;

export default CartPage;

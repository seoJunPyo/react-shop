import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { PageContainer } from '../assets/Style/CommonStyle';
import CategoryBar from '../Components/Common/CategoryBar';
import EmptyCart from '../Components/Cart/EmptyCart';
import CartItem from '../Components/Cart/CartItem';
import TotalAcountCart from '../Components/Cart/TotalAcountCart';
import { CartType } from '../Type/Type';
import { useRecoilState } from 'recoil';
import { cartListAtom } from '../Atom/AtomStore';
import { setLocalStorage } from '../Components/Cart/CartListHandler';

const CartPage = () => {
	const [cartList] = useRecoilState(cartListAtom);

	useEffect(() => {
		return () => {
			setLocalStorage(cartList);
		};
	}, [cartList]);

	return (
		<Container>
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
	${PageContainer}
`;

const Cart = styled.ul`
	padding: 60px 24px;

	@media (max-width: 576px) {
		padding: 16px 12px;
	}
`;

export default CartPage;

import React from 'react';
import { GreyButton, PurpleButton } from '../Common/Button';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { cartListAtom } from '../../Atom/AtomStore';
import { getTotalAcount, removerAllItem } from './CartListHandler';

const TotalAcountCart = () => {
	const [cartList, setCartList] = useRecoilState(cartListAtom);

	const removeAll = () => {
		if (cartList.length <= 0) {
			return;
		}
		const newData = removerAllItem();
		setCartList(newData);
	};

	return (
		<Acount>
			<Price>총 : ${getTotalAcount(cartList)}</Price>
			<BtnCon>
				<GreyButton onClick={removeAll}>전체삭제</GreyButton>
				<PurpleButton>구매하기</PurpleButton>
			</BtnCon>
		</Acount>
	);
};

const Acount = styled.div`
	padding: 0 24px;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	button {
		margin-left: 12px;
	}

	@media (max-width: 576px) {
		flex-direction: column;
		align-items: flex-end;
	}
`;

const Price = styled.p`
	font-size: 24px;
	font-weight: 600;
	margin-right: 20px;

	@media (max-width: 576px) {
		margin-right: 0px;
		margin-bottom: 20px;
	}
`;

const BtnCon = styled.div`
	display: flex;
`;

export default TotalAcountCart;

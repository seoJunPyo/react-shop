import React, { useState } from 'react';
import { GreyButton, PurpleButton } from '../Common/Button';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { cartListAtom } from '../../Atom/AtomStore';
import { getTotalAcount, removerAllItem } from './CartListHandler';
import Modal from '../Common/Modal';
import { WrapStyle } from '../../assets/Style/CommonStyle';

const TotalAcountCart = () => {
	const [cartList, setCartList] = useRecoilState(cartListAtom);
	const [modal, setModal] = useState(false);

	const removeAll = () => {
		if (cartList.length <= 0) {
			return;
		}
		const newData = removerAllItem();
		setCartList(newData);
	};

	const confirm = () => {
		setModal(false);
		setCartList([]);
	};

	const reject = () => {
		setModal(false);
	};

	const modalText = {
		title: '정말로 구매하시겠습니까?',
		notice: '장바구니의 모든 상품들이 삭제됩니다.',
		confirm: '네, 구매합니다',
		reject: '아니요',
	};

	return (
		<>
			<Modal modal={modal} confirm={confirm} reject={reject} text={modalText} />
			<Acount>
				<Price>총 : ${getTotalAcount(cartList)}</Price>
				<BtnCon>
					<GreyButton onClick={removeAll}>전체삭제</GreyButton>
					<PurpleButton
						onClick={() => {
							setModal(true);
						}}>
						구매하기
					</PurpleButton>
				</BtnCon>
			</Acount>
		</>
	);
};

const Wrap = styled.div`
	${WrapStyle}
	top: 0;
	left: 0;
	display: ${(props: { display: string }) => props.display};
	z-index: 2000;
`;

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

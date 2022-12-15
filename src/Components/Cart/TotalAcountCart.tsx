import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
//style
import styled from '@emotion/styled';
import { WrapStyle } from '../../assets/style/CommonStyle';
//componetn
import { GreyButton, PurpleButton } from '../Common/Button';
import Modal from '../Common/Modal';
//handler
import { getTotalAcount, removerAllItem } from './handleCartList';
//data
import { cartListAtom } from '../../Atom/AtomStore';
import modalText from '../Common/ModalText';

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

	return (
		<>
			<Modal
				modal={modal}
				confirm={confirm}
				reject={reject}
				text={modalText.cart}
			/>
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

const Wrap = styled.div<{ display: string }>`
	${WrapStyle}
	top: 0;
	left: 0;
	display: ${(props) => props.display};
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

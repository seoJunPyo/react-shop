import React from 'react';
import { Link } from 'react-router-dom';
import { PurpleButton } from '../Common/Button';
import styled from '@emotion/styled';

const EmptyCart = () => {
	return (
		<li>
			<Text>장바구니에 물품이 없습니다.</Text>
			<Link to={'/'}>
				<PurpleButton>담으러 가기</PurpleButton>
			</Link>
		</li>
	);
};

const Text = styled.p`
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 40px;
`;

export default EmptyCart;

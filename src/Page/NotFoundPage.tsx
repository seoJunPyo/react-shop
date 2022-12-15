import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import { PageContainer } from '../assets/Style/CommonStyle';
import { MdSdCardAlert } from 'react-icons/md';
import { GreyButton } from '../Components/Common/Button';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
	const [loading, setLoading] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		setLoading('end');

		return () => {
			setLoading('');
		};
	}, []);

	return (
		<Container className={loading}>
			<Title>
				<MdSdCardAlert />
				NotFound
			</Title>
			<Text>요청하신 페이지가 존재하지 않습니다.</Text>
			<GreyButton
				onClick={() => {
					navigate('/');
				}}>
				홈으로 돌아가기
			</GreyButton>
		</Container>
	);
};

const Container = styled.section`
	${PageContainer}
	padding :48px;

	&.end {
		opacity: 1;
	}
`;

const Title = styled.h2`
	display: flex;
	align-items: center;
	font-size: 72px;
	font-weight: 700;
	margin-bottom: 40px;
`;

const Text = styled.p`
	font-size: 36px;
	margin-bottom: 36px;
`;

export default NotFoundPage;

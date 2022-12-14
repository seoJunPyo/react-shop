import styled from '@emotion/styled';
import React from 'react';
import { PageContainer } from '../assets/Style/CommonStyle';
import { MdSdCardAlert } from 'react-icons/md';

const NotFoundPage = () => {
	return (
		<Container>
			<Title>
				<MdSdCardAlert />
				NotFound
			</Title>
			<Text>요청하신 페이지가 존재하지 않습니다.</Text>
		</Container>
	);
};

const Container = styled.section`
	${PageContainer}
	padding : 120px 30px;
`;

const Title = styled.h2`
	display: flex;
	align-items: center;
	font-size: 72px;
	font-weight: 700;
	margin-bottom: 32px;
`;

const Text = styled.p`
	font-size: 36px;
`;

export default NotFoundPage;

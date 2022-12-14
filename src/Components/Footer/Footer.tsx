import React from 'react';
//style
import styled from '@emotion/styled';
import { CommonWidth } from '../../assets/Style/CommonStyle';
//component
import CardArea from './CardArea';
import SNSIconArea from './SNSIconArea';
import { useRecoilState } from 'recoil';
import { darkLightModeAtom } from '../../Atom/AtomStore';
import { footerBgc, footerText } from '../../assets/Style/darkLightColor';

const Footer = () => {
	const [darkLightMode] = useRecoilState(darkLightModeAtom);

	return (
		<Container bgc={footerBgc(darkLightMode)} color={footerText(darkLightMode)}>
			<Wrap>
				<Title>제로베이스</Title>
				<CardArea />
				<SNSIconArea />
				<Copyright>Copyright © 2022 Zero Base</Copyright>
			</Wrap>
		</Container>
	);
};

interface FooterStyle {
	bgc: string;
	color: string;
}

const Container = styled.footer`
	width: 100%;
	background-color: ${(props: FooterStyle) => props.bgc};
	color: ${(props) => props.color};
	text-align: center;
	transition: all 0.3s;
`;

const Wrap = styled.div`
	${CommonWidth}
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 40px;
`;

const Title = styled.h4``;

const Copyright = styled.p``;

export default Footer;

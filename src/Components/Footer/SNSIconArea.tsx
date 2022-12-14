import styled from '@emotion/styled';
import React from 'react';
//icons
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { FlexTemplate } from '../../assets/Style/CommonStyle';

const SNSIconArea = () => {
	return (
		<Container>
			<Link href="https://www.facebook.com/">
				<FaFacebookF />
			</Link>
			<Link href="https://www.instagram.com/">
				<FiInstagram />
			</Link>
			<Link href="https://www.github.com">
				<FaGithub />
			</Link>
		</Container>
	);
};

const Container = styled.div`
	${FlexTemplate}
	margin : 36px 0;
`;

const Link = styled.a`
	${FlexTemplate}
	margin :0 8px;
	font-size: 24px;
	color: inherit;
`;

export default SNSIconArea;

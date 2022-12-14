import React from 'react';
import { FlexTemplate } from '../../assets/Style/CommonStyle';
import styled from '@emotion/styled';

interface DetailImgProps {
	img: string;
}

const DetailImg = (props: DetailImgProps) => {
	return (
		<ImgCon>
			<img src={props.img} alt="" />
		</ImgCon>
	);
};

const ImgCon = styled.div`
	${FlexTemplate}
	padding: 32px;
	background-color: #fff;
	border-radius: 20px;
	max-width: 300px;
	min-width: 300px;

	img {
		width: 100%;
	}

	@media (max-width: 968px) {
		max-width: 1000px;

		img {
			width: 40%;
		}
	}
`;

export default DetailImg;

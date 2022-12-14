import React from 'react';
import styled from '@emotion/styled';
//style
import NewBadge from '../Common/NewBadge';
import { FlexTemplate } from '../../assets/Style/CommonStyle';
//component
import StarRating from './StarRating';
import DetailBtn from './DetailBtn';

interface DetailInfoProps {
	info: {
		title: string;
		description: string;
		price: number;
		rating: {
			rate: number;
			count: number;
		};
	};
}

const DetailInfo = (props: DetailInfoProps) => {
	return (
		<InfoCon>
			<Title>
				{props.info.title} <NewBadge />
			</Title>
			<Desc>{props.info.description}</Desc>
			<StarRating rate={props.info.rating} />
			<Price>${props.info.price}</Price>
			<DetailBtn />
		</InfoCon>
	);
};

const InfoCon = styled.div`
	display: flex;
	flex-direction: column;
	padding: 32px 48px;
	line-height: 1.5;

	@media (max-width: 968px) {
		padding: 32px 0;
	}
`;

const Title = styled.h3`
	${FlexTemplate}
	justify-content : flex-start;
	margin-bottom: 12px;
	font-size: 22px;
	font-weight: 600;
`;

const Desc = styled.p`
	margin-bottom: 16px;
`;

const Price = styled.p`
	font-size: 32px;
	font-weight: 600;
	margin: 8px 0 12px;
`;
export default DetailInfo;

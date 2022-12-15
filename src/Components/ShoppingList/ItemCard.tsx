import React from 'react';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
//style
import { FlexTemplate } from '../../assets/style/CommonStyle';
//type
import { ShoppingListType } from '../../Type/dataType';
import { cardBgc, cardBorder } from '../../assets/style/darkLightColor';
import { useRecoilState } from 'recoil';
import { atomDarkLightMode } from '../../Atom/AtomStore';

interface ItemCardProps {
	itemInfo: ShoppingListType;
}

const ItemCard = (props: ItemCardProps) => {
	const [darkLightMode] = useRecoilState(atomDarkLightMode);
	const navigete = useNavigate();

	return (
		<Card
			border={cardBorder(darkLightMode)}
			onClick={() => {
				navigete(`/item/${props.itemInfo.id}`);
			}}>
			<ImgCon>
				<Img src={props.itemInfo.image} />
			</ImgCon>
			<Info bgc={cardBgc(darkLightMode)}>
				<Name>{props.itemInfo.title}</Name>
				<Price>${props.itemInfo.price}</Price>
			</Info>
		</Card>
	);
};

export const Card = styled.div<{ border?: string }>`
	border-radius: 12px;
	overflow: hidden;
	margin: 0 12px 24px;
	min-width: 210px;
	border: ${(props) => props.border};
	transition: border 0.3s;
	cursor: pointer;

	@media (max-width: 1024px) {
		flex-basis: 50%;
	}

	@media (max-width: 768px) {
		flex-basis: 100%;
	}

	:hover img {
		transform: scale(1.1);
		transition: transform 0.3s;
	}
`;

export const ImgCon = styled.div`
	${FlexTemplate}
	height: 320px;
	padding: 12px;
	background-color: #fff;
`;

export const Img = styled.img`
	width: 40%;
	min-width: 150px;
`;

export const Info = styled.div<{ bgc?: string }>`
	padding: 32px;
	height: 224px;
	background-color: ${(props) => props.bgc};
	text-align: left;
	line-height: 1.5;
	transition: background-color 0.3s;
`;

export const Name = styled.p`
	font-weight: 700;
	margin-bottom: 24px;
`;

const Price = styled.p`
	font-size: 20px;
`;
export default ItemCard;

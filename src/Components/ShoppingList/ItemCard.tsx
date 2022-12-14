import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
//style
import { FlexTemplate } from '../../assets/Style/CommonStyle';
//type
import { ShoppingListType } from '../../Type/Type';
import { cardBgc, cardBorder } from '../../assets/Style/darkLightColor';
import { useRecoilState } from 'recoil';
import { darkLightModeAtom } from '../../Atom/AtomStore';

interface ItemCardProps {
	itemInfo: ShoppingListType;
}

const ItemCard = (props: ItemCardProps) => {
	const [darkLightMode] = useRecoilState(darkLightModeAtom);

	return (
		<Card border={cardBorder(darkLightMode)}>
			<Link to={`/item/${props.itemInfo.id}`}>
				<ImgCon>
					<Img src={props.itemInfo.image} />
				</ImgCon>
				<Info bgc={cardBgc(darkLightMode)}>
					<Name>{props.itemInfo.title}</Name>
					<Price>${props.itemInfo.price}</Price>
				</Info>
			</Link>
		</Card>
	);
};

export const Card = styled.div`
	border-radius: 12px;
	overflow: hidden;
	margin: 0 12px 24px;
	min-width: 210px;
	border: ${(props: { border?: string }) => props.border};
	transition: border 0.3s;

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

export const Info = styled.div`
	padding: 32px;
	height: 224px;
	background-color: ${(props: { bgc?: string }) => props.bgc};
	text-align: left;
	line-height: 1.5;
	transition: background-color 0.3s;
`;

export const Name = styled.p`
	font-weight: 700;
	margin-bottom: 24px;
`;

const Price = styled.p``;
export default ItemCard;

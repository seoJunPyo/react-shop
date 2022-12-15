import react from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
// style
import styled from '@emotion/styled';
import { BiRightArrowAlt } from 'react-icons/bi';
import { CommonWidth, FlexTemplate } from '../../assets/style/CommonStyle';
import {
	carouselBtn,
	carouselHover,
	carouselText,
} from '../../assets/style/darkLightColor';
//data
import { atomDarkLightMode } from '../../Atom/AtomStore';

interface CarouselImageProps {
	info: {
		id: number;
		title: string;
		desc: string;
		img: string;
		category?: string;
	};
}

interface CarouselStyle {
	bgc: string;
	hover: string;
	color: string;
}

const CarouselImage = (props: CarouselImageProps) => {
	const navigate = useNavigate();
	const [darkLightMode] = useRecoilState(atomDarkLightMode);

	return (
		<Container>
			<Wrap>
				<TextBox>
					<Title>{props.info.title}</Title>
					<Desc>{props.info.desc}</Desc>
					<Button
						bgc={carouselBtn(darkLightMode)}
						hover={carouselHover(darkLightMode)}
						color={carouselText(darkLightMode)}
						onClick={() => {
							navigate(
								props.info.category ? `/category/${props.info.category}` : '*'
							);
						}}>
						<BtnText>바로가기</BtnText>
						<BiRightArrowAlt />
					</Button>
				</TextBox>
			</Wrap>
			<Img src={props.info.img} alt={props.info.title} />
		</Container>
	);
};

const Container = styled.li`
	position: relative;
	flex-shrink: 0;
	width: 100%;
`;

const Wrap = styled.div`
	position: absolute;
	left: 50%;
	height: 100%;
	transform: translateX(-50%);
	${CommonWidth};
`;

const TextBox = styled.div`
	padding: 24px 24px 16px;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 3%;
	border-radius: 12px;
	color: #fff;
`;

const Title = styled.h2`
	font-size: 32px;
	font-weight: 700;
	margin-bottom: 12px;

	@media (max-width: 576px) {
		font-size: 20px;
	}
`;
const Desc = styled.p`
	font-size: 16px;

	@media (max-width: 576px) {
		font-size: 12px;
	}
`;

const Img = styled.img`
	width: 120%;
	object-position: center;
`;

const Button = styled.button<CarouselStyle>`
	${FlexTemplate}
	margin-top: 20px;
	padding: 12px 10px 12px 12px;
	background-color: ${(props) => props.bgc};
	border-radius: 5px;
	color: ${(props) => props.color};
	font-weight: 600;
	font-size: 14px;
	cursor: pointer;

	svg {
		font-size: 16px;
	}

	:hover {
		background-color: ${(props) => props.hover};
		transition: background-color 0.3s;
	}
`;

const BtnText = styled.span`
	margin-right: 4px;
`;

export default CarouselImage;

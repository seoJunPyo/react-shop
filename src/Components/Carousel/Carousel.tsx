import React, { useState, useEffect } from 'react';
//style
import styled from '@emotion/styled';
import { CarouselHandleBtn } from '../../assets/Style/CommonStyle';
//icon
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';
//component
import CarouselImage from './CarouselImage';
//data
import { CarouselData } from './CarouselData';

interface CarouselConProps {
	location: string;
}

const Carousel = () => {
	const [location, setLoctaion] = useState(0);

	const handleLeftMoveClick = () => {
		if (location === 0) {
			const lastLocation = -((CarouselData.length - 1) * 100);
			setLoctaion(lastLocation);
			return;
		}
		setLoctaion(location + 100);
	};

	const handleRightMoveClick = () => {
		const isLast = (CarouselData.length - 1) * 100 == Math.abs(location);
		if (isLast) {
			setLoctaion(0);
			return;
		}
		setLoctaion(location - 100);
	};

	const selectedInticater = (id: number) => {
		return -100 * id === location;
	};

	useEffect(() => {
		const timer = setInterval(() => {
			handleRightMoveClick();
		}, 5000);

		return () => {
			clearInterval(timer);
		};
	}, [location]);

	return (
		<>
			<Container>
				<LeftBtn onClick={handleLeftMoveClick}>
					<IoMdArrowDropleft />
				</LeftBtn>
				<IndicaterBox>
					{CarouselData.map((info) => (
						<Indicater
							key={`${info.id}_${info.title}`}
							onClick={() => {
								setLoctaion(-100 * info.id);
							}}
							opacity={selectedInticater(info.id) ? 0.8 : 0.4}
						/>
					))}
				</IndicaterBox>
				<CarouselCon location={`${location.toString()}%`}>
					{CarouselData.map((info) => (
						<CarouselImage info={info} key={`${info.id}_${info.title}`} />
					))}
				</CarouselCon>
				<RightBtn onClick={handleRightMoveClick}>
					<IoMdArrowDropright />
				</RightBtn>
			</Container>
		</>
	);
};

interface IncaterProps {
	opacity: number;
}

//style Components
const Container = styled.section`
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 700px;

	:hover ul {
		transition: transform 0.3s;
	}

	@media (max-width: 968px) {
		height: 280px;
	}
`;

const LeftBtn = styled.button`
	${CarouselHandleBtn}
	left :0;

	@media (max-width: 968px) {
		display: none;
	}
`;

const RightBtn = styled.button`
	${CarouselHandleBtn}
	right : 0;

	@media (max-width: 968px) {
		display: none;
	}
`;

const CarouselCon = styled.ul<CarouselConProps>`
	height: inherit;
	display: flex;
	flex-wrap: nowrap;
	flex-direction: row;
	transform: translateX(${(props) => props.location});
`;

const IndicaterBox = styled.div`
	position: absolute;
	display: flex;
	bottom: 5%;
	left: 50%;
	transform: translateX(-50%);
	z-index: 10;
`;

const Indicater = styled.button<IncaterProps>`
	width: 10px;
	height: 10px;
	margin: 0 12px;
	background-color: #fff;
	opacity: ${(props) => props.opacity};
	border-radius: 100%;
	cursor: pointer;
`;

export default Carousel;

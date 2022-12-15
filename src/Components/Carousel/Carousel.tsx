import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
//style icon
import styled from '@emotion/styled';
import { CarouselHandleBtn } from '../../assets/Style/CommonStyle';
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';
//component
import CarouselMain from './CarouselMain';
import IndicaterBox from './IndicaterBox';
//data
import { CarouselData } from './CarouselData';
import { carouselLoctionAtom } from '../../Atom/AtomStore';
//handler
import { getLastLoction, isLast } from './handleCarousel';

const Carousel = () => {
	const [location, setLocation] = useRecoilState(carouselLoctionAtom);

	const handleLeftMoveClick = () => {
		if (location === 0) {
			setLocation(getLastLoction(CarouselData.length));
			return;
		}
		setLocation(location + 100);
	};

	const handleRightMoveClick = () => {
		if (isLast(CarouselData.length, location)) {
			setLocation(0);
			return;
		}
		setLocation(location - 100);
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
				<IndicaterBox />
				<CarouselMain />
				<RightBtn onClick={handleRightMoveClick}>
					<IoMdArrowDropright />
				</RightBtn>
			</Container>
		</>
	);
};

//style Components
const Container = styled.section`
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 700px;

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

export default Carousel;

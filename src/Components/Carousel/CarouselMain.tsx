import React from 'react';
import { useRecoilState } from 'recoil';
//style
import styled from '@emotion/styled';
//component
import CarouselImage from './CarouselImage';
//data
import { CarouselData } from './CarouselData';
import { atomCarouselLoction } from '../../Atom/AtomStore';

const CarouselMain = () => {
	const [location] = useRecoilState(atomCarouselLoction);

	return (
		<CarouselCon location={`${location.toString()}%`}>
			{CarouselData.map((info) => (
				<CarouselImage info={info} key={`${info.id}_${info.title}`} />
			))}
		</CarouselCon>
	);
};

interface CarouselConStyle {
	location: string;
}

const CarouselCon = styled.ul<CarouselConStyle>`
	height: inherit;
	display: flex;
	flex-wrap: nowrap;
	flex-direction: row;
	transform: translateX(${(props) => props.location});
	transition: transform 0.3s;
`;

export default CarouselMain;

import React from 'react';
import { useRecoilState } from 'recoil';
//stlye
import styled from '@emotion/styled';
//data
import { CarouselData } from './CarouselData';
import { atomCarouselLoction } from '../../Atom/AtomStore';
//handler
import { isSelected } from './handleCarousel';

const IndicaterBox = () => {
	const [location, setLocation] = useRecoilState(atomCarouselLoction);

	return (
		<Container>
			{CarouselData.map((info) => (
				<Indicater
					key={`${info.id}_${info.title}`}
					onClick={() => {
						setLocation(-100 * info.id);
					}}
					opacity={isSelected(info.id, location) ? 0.8 : 0.4}
				/>
			))}
		</Container>
	);
};

interface IncaterProps {
	opacity: number;
}

const Container = styled.div`
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

export default IndicaterBox;

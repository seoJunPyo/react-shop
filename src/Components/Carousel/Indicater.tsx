import styled from '@emotion/styled';
import React from 'react';

interface IndicaterProps {
	id: number;
	onClick: (id: number) => void;
}

const Indicater = (props: IndicaterProps) => {
	return (
		<Dot
			onClick={() => {
				props.onClick(props.id);
			}}></Dot>
	);
};

const Dot = styled.button``;

export default Indicater;

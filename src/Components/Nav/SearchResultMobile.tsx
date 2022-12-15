import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
//style
import { hoverStyle, resultBgc } from '../../assets/style/darkLightColor';
//type
import { ShoppingListType } from '../../Type/dataType';
//data
import { atomDarkLightMode } from '../../Atom/AtomStore';

interface SearchResultProps {
	result: ShoppingListType[];
	reset: () => void;
}

const SearchResultMobile = (props: SearchResultProps) => {
	const navigate = useNavigate();
	const [darkLightMode] = useRecoilState(atomDarkLightMode);

	return (
		<Container bgc={resultBgc(darkLightMode)}>
			{props.result.map((result) => (
				<Result
					hover={hoverStyle(darkLightMode)}
					key={result.title}
					onClick={() => {
						navigate(`/item/${result.id}`);
						props.reset();
					}}>
					{result.title}
				</Result>
			))}
		</Container>
	);
};

const Container = styled.ul`
	padding: 16px 12px;
	z-index: 1002;
	background-color: ${(props: { bgc: string }) => props.bgc};
`;
const Result = styled.li<{ hover: string }>`
	padding: 16px;
	margin-bottom: 4px;
	border-radius: 10px;
	cursor: pointer;

	:hover {
		background-color: ${(props) => props.hover};
		transition: background-color 0.2s;
	}

	:last-of-type {
		margin-bottom: 0;
	}
`;

export default SearchResultMobile;

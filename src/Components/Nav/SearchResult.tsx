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

const SearchResult = (props: SearchResultProps) => {
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

const Container = styled.ul<{ bgc: string }>`
	position: absolute;
	top: calc(100% + 12px);
	width: 250px;
	padding: 6px 12px;
	background-color: ${(props) => props.bgc};
	border-radius: 0 0 10px 10px;
	z-index: 1000;
`;

const Result = styled.li<{ hover: string }>`
	margin-bottom: 4px;
	padding: 12px;
	font-size: 14px;
	cursor: pointer;
	border-radius: 10px;

	:last-of-type {
		margin-bottom: 0;
	}

	:hover {
		background-color: ${(props) => props.hover};
		transition: background-color 0.2s;
	}
`;

export default SearchResult;

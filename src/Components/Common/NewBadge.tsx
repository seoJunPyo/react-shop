import styled from '@emotion/styled';
import React from 'react';

const NewBadge = () => {
	return <Badge>NEW</Badge>;
};

const Badge = styled.span`
	padding: 4px 10px;
	color: #fff;
	font-size: 14px;
	border-radius: 15px;
	background-color: #1fb2a6;
	line-height: 1;
	margin: 0 12px;
`;

export default NewBadge;

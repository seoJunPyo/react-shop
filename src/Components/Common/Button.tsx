import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import {
	btnBorder,
	btnColor,
	btnHoverBgc,
	btnHoverColor,
} from '../../assets/Style/darkLightColor';
import { darkLightModeAtom } from '../../Atom/AtomStore';

interface BtnProps {
	children: string;
	onClick?: () => void;
	darkLight?: boolean;
}

export const PurpleButton = (props: BtnProps) => {
	return <BtnPurple onClick={props.onClick}>{props.children}</BtnPurple>;
};

export const GreyButton = (props: BtnProps) => {
	const [darkLightMode] = useRecoilState(darkLightModeAtom);

	return (
		<BtnGray
			hover={btnHoverColor(darkLightMode)}
			color={btnColor(darkLightMode)}
			border={btnBorder(darkLightMode)}
			bgc={btnHoverBgc(darkLightMode)}
			onClick={props.onClick}>
			{props.children}
		</BtnGray>
	);
};

export const Btn = `
  padding: 14px 14px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;`;

const BtnPurple = styled.button`
	${Btn}
	color: #fff;
	background-color: #6419e6;

	:hover {
		background-color: #4a12ab;
		transition: background-color 0.2s;
	}
`;

interface BtnGrayStyle {
	hover: string;
	color: string;
	bgc: string;
	border: string;
}

const BtnGray = styled.button`
	${Btn}
	background: none;
	border: ${(props: BtnGrayStyle) => props.border};
	color: ${(props) => props.color};

	:hover {
		background-color: ${(props) => props.bgc};
		color: ${(props) => props.hover};
		transition: all 0.2s;
	}
`;

import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState } from 'recoil';
import { WrapStyle } from '../../assets/Style/CommonStyle';
import {
	bodyBgc,
	bodyText,
	modalShadow,
} from '../../assets/Style/darkLightColor';
import { cartListAtom, darkLightModeAtom } from '../../Atom/AtomStore';
import { GreyButton, PurpleButton } from './Button';

interface ModalProps {
	modal: boolean;
	text: {
		title: string;
		notice: string;
		confirm: string;
		reject: string;
	};
	confirm: () => void;
	reject: () => void;
}

const Modal = (props: ModalProps) => {
	const [darkLightMode] = useRecoilState(darkLightModeAtom);

	return (
		<Wrap
			visibility={props.modal ? 'visible' : 'hidden'}
			onClick={() => {
				props.reject();
			}}>
			<ModalCon
				bgc={bodyBgc(darkLightMode)}
				color={bodyText(darkLightMode)}
				shadow={modalShadow(darkLightMode)}
				transform={
					props.modal
						? 'translate(-50%, -50%) scale(1)'
						: 'translate(-50%, -50%) scale(0.9)'
				}
				onClick={(e) => {
					e.stopPropagation();
				}}>
				<Title>{props.text.title}</Title>
				<Notice>{props.text.notice}</Notice>
				<BtnArea>
					<PurpleButton
						onClick={() => {
							props.confirm();
						}}>
						{props.text.confirm}
					</PurpleButton>
					<GreyButton
						onClick={() => {
							props.reject();
						}}>
						{props.text.reject}
					</GreyButton>
				</BtnArea>
			</ModalCon>
		</Wrap>
	);
};

interface ModalConStyle {
	bgc: string;
	transform: string;
	shadow: string;
}

const Wrap = styled.div<{ visibility: string }>`
	${WrapStyle}
	top: 0;
	left: 0;
	visibility: ${(props) => props.visibility};
	z-index: 2000;
`;

const ModalCon = styled.div<ModalConStyle>`
	position: absolute;
	top: 30%;
	left: 50%;
	width: 500px;
	height: 225px;
	padding: 32px;
	background-color: ${(props) => props.bgc};
	border-radius: 15px;
	box-shadow: ${(props) => props.shadow};
	transform: ${(props) => props.transform};
	transition: transform 0.2s;
`;

const Title = styled.p`
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 25px;
`;
const Notice = styled.p`
	font-weight: 600;
`;

const BtnArea = styled.div`
	position: absolute;
	bottom: 32px;
	right: 32px;

	button {
		margin: 0;
	}

	button:first-of-type {
		margin: 0 8px 0 0;
	}
`;

export default Modal;

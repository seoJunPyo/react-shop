export const Button = `	
background: inherit;
color: inherit;
font-size: 24px;
cursor: pointer;`;

export const FlexTemplate = `
display: flex;
align-items: center;
justify-content: center;`;

export const CommonWidth = `
max-width: 1600px;
width: 100%;
`;

export const CarouselHandleBtn = `
  ${FlexTemplate}
	position: absolute;
  top :0;
	width: 28px;
	height: 100%;
  cursor : pointer;
  background : none;
  transition : all 0.3s;
  font-size : 30px;
  color : rgba(255, 255, 255, 0.5);
	z-index : 100;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    color : rgba(255, 255, 255, 1);
  }
`;

export const PageContainer = `
	${CommonWidth}
	padding: 12px 16px 32px;
	margin: 12px auto;
  min-height : calc(100vh - 366px);
  opacity: 0;
	transition: opacity 0.5s;

	&.end {
		opacity: 1;
	}
`;

export const WrapStyle = `
position: fixed;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.2);
z-index: 101;
`;

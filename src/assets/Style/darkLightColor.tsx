//nav
export const navBgc = (boolen: boolean): string => {
	return boolen ? 'rgb(25, 29, 36)' : '#fff';
};
export const navText = (boolen: boolean): string => {
	return boolen ? '#fff' : '#374151';
};
export const navBoxShadow = (boolen: boolean): string => {
	return boolen ? 'none' : '0 0 5px';
};

//input
export const inputBgc = (boolen: boolean): string => {
	return boolen ? '#4b5563' : '#d1d5db';
};

// searchResult
export const resultBgc = (boolen: boolean): string => {
	return boolen ? '#2a303c' : '#fff';
};

//carousel
export const carouselBtn = (boolen: boolean): string => {
	return boolen ? '#191d24' : '#3d4451';
};
export const carouselHover = (boolen: boolean): string => {
	return boolen ? '#101318' : '#2c313b';
};
export const carouselText = (boolen: boolean): string => {
	return boolen ? '#a6adb0' : '#fff';
};

//body
export const bodyText = (boolen: boolean): string => {
	return boolen ? '#a6adba' : '#1f2937';
};
export const bodyBgc = (boolen: boolean): string => {
	return boolen ? '#2a303c' : '#fff';
};

// itmeCard
export const cardBgc = (boolen: boolean): string => {
	return boolen ? '#374151' : '#f3f4f6';
};
export const cardBorder = (boolen: boolean): string => {
	return boolen ? 'none' : '1px solid #e5e7eb';
};

//footer
export const footerText = (boolen: boolean): string => {
	return boolen ? '#a6adba' : '#1f2937';
};
export const footerBgc = (boolen: boolean): string => {
	return boolen ? '#242933' : '#f9fafb';
};

//hover
export const hoverStyle = (boolen: boolean): string => {
	return boolen ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
};

//button
export const btnColor = (boolen: boolean): string => {
	return boolen ? '#a6adba' : '#1f2937';
};
export const btnBorder = (boolen: boolean): string => {
	return boolen ? '1px solid #a6adba' : '1px solid #1f2937';
};
export const btnHoverColor = (boolen: boolean): string => {
	return boolen ? '#1f2937' : '#fff';
};
export const btnHoverBgc = (boolen: boolean): string => {
	return boolen ? '#a6adba' : '#1f2937';
};

// modal
export const modalShadow = (boolen: boolean): string => {
	return boolen
		? '3px 3px 10px 4px rgba(166, 173, 186, 0.2)'
		: '3px 3px 10px 4px rgba(31,41,55,0.2)';
};

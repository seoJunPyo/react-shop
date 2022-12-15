export const isLast = (length: number, location: number): boolean => {
	return (length - 1) * 100 == Math.abs(location);
};

export const getLastLoction = (length: number): number => {
	return (length - 1) * -100;
};

export const isSelected = (id: number, location: number): boolean => {
	return -100 * id === location;
};

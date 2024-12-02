export const calculateRotation = (x: number, y: number) => {
	const rotateX = (y - 300) / 20;
	const rotateY = -(x - 300) / 20;
	return { rotateX, rotateY };
};

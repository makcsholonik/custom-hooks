import React, { useEffect, useState } from 'react';

export const useHover = ( ref ) => {

	const [isHovering, setHovering] = useState ( false );
	const on = () => setHovering ( true );
	const off = () => setHovering ( false );

	useEffect ( () => {
		if ( !ref.current ) {
			return;
		}
		const node = ref.current; // элемент с которым мы работаем!

		node.addEventListener ( 'mouseenter', on );
		node.addEventListener ( 'mousemove', on );
		node.addEventListener ( 'mouseleave', off );

		// когда компонент демонтируется, слушателей надо удалить
		return function () {
			node.removeEventListener ( 'mouseenter', on );
			node.removeEventListener ( 'mousemove', on );
			node.removeEventListener ( 'mouseleave', off );
		};
	}, [] );

	return isHovering;
};
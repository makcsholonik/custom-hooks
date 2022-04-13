import React from 'react';
import { useInput } from '../hooks/useInput';

export const Input = () => {

	const userName = useInput ( '' );
	const password = useInput ( '' );

	return (
		<div>
			<input { ...userName } type={ 'text' } placeholder={ 'username' }/>
			<input  { ...password } type={ 'text' } placeholder={ 'password' }/>
			<button onClick={ () => console.log ( userName.value, password.value ) }>click</button>
		</div>
	);
};
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

	html {
		overflow-y: scroll;
	}
	
	body {
		font-family: 'Oswald', sans-serif;
		letter-spacing: 1px;
		padding: 20px 40px;
		@media screen and (max-width: 800px) {
			padding: 10px;
		}
	}

	a {
		text-decoration: none;
		color: black;
	}
	
	* {
		box-sizing: border-box;
	}
`;
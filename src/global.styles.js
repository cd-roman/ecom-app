import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

	html {
		overflow-y: scroll;
	}
	
	body {
		font-family: 'Oswald', sans-serif;
		letter-spacing: 1px;
		padding: 0;
		margin: 0;
	}

	a {
		text-decoration: none;
		color: black;
	}
	
	* {
		box-sizing: border-box;
	}
`;

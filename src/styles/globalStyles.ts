import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	:root {
		--background: #F0F2F5;
		--red: #E52E40;
		--green: #33cc95;
		--blue: #5429CC;
		--blue-light: #6933FF;
		--text-title: #363F5F;
		--text-body: #969CB3;
		--shape: #FFF;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	// font-size: 16px (Desktop)
	html {
		@media (max-width: 1080px) {
			font-size: 93.75%; // 15px
		}

		@media (max-width: 720) {
			font-size: 87.5%; // 14px
		}
	}

	// REM --> 1rem = tamanho do font-size do browser

	body {
		background: var(--background); 
		-webkit-font-smoothing: antialiased;
	}

	body,
	input,
	textarea,
	button {
		font-family: "Poppins", sans-serif;
		font-weight: 400;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	strong {
		font-weight: 600;
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		opacity: 0.5;
		cursor: not-allowed;
	}

`;

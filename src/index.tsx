import * as React from 'react';
import { render } from 'react-dom';
import App from './app';



const node: HTMLElement | null = document.getElementById('app') || document.createElement('div');

render(<App />, node);

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/service-worker.js');
	});
}

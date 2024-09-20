import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.tsx'
// import './index.css';
import './css/main.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);

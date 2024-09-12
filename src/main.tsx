import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { App } from './app.tsx';

import './index.css';

const container = document.getElementById('root');
const queryClient = new QueryClient();

createRoot(container!).render(
	<QueryClientProvider client={queryClient}>
		<App />
	</QueryClientProvider>
);

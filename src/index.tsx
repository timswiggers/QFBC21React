import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { fetchConfig } from './config';
import { App } from './App';

import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') ?? '/';
const rootElement = document.getElementById('root');

(async () => {
    const config = await fetchConfig(baseUrl);
    const queryClient = new QueryClient();

    axios.defaults.baseURL = `${document.location.origin}/api`;

    ReactDOM.render(
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter basename={baseUrl}>
                    <App config={config} />
                </BrowserRouter>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </React.StrictMode>,
        rootElement
    );
})();

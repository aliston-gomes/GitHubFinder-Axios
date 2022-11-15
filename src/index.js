import React from 'react';
import  {createRoot} from 'react-dom/client';
import App from './App';
import GlobalContextProvider from './ContentApi/GlobalContext';
import "./global.css"
createRoot(document.getElementById("root")).render(
    <GlobalContextProvider>
        <App/>
    </GlobalContextProvider>
)


import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './router/routes';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map(({ path, component }) => {
                    return <Route key={path} path={path} element={component} />;
                })}
                <Route path="*" element={<Navigate to={'/'} replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

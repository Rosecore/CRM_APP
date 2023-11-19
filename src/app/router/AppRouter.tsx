import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/rounteConfig/routeConfig';

const AppRouter = () => {
    return (
        <Suspense fallback={''}>
            <Routes>
                {Object.values(routeConfig).map((route) => (<Route
                    key={route.path}
                    element={
                        <main className='page-wrapper'>{route.element}</main>}
                    path={route.path} />))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
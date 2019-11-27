import React from 'react';

export const Error500PageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/error-500',
            component: React.lazy(() => import('./Error500Page'))
        }
    ]
};

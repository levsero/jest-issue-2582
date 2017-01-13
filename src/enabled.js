import React from 'react';
import { isEnabled } from './features';

const MyComponent = () => {
    return (
        isEnabled('superFeature') === true
            ? 'Enabled'
            : 'Disabled'
    )
};

export default MyComponent;

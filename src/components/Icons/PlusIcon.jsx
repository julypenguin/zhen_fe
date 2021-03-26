import React from 'react';

const Plus = ({
    className,
}) => {
    return (
        <svg className={`h-5 w-5 inline-block ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
    );
};

export default Plus;
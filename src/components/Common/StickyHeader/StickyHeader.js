import React from 'react';
import { Link } from 'react-router-dom';

const StickyHeader = () => {
    return (
        <div className="sticky-header">
            <h1 className="logo">
                <Link to="/login">스마트매니저 펜션</Link>
            </h1>
        </div>
    )
}

export default StickyHeader;
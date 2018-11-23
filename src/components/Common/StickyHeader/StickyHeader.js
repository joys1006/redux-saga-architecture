import React from 'react';
import { Link } from 'react-router-dom';

const StickyHeader = () => {
    return (
        <div className="sticky-header">
            <h1 className="logo">
                <Link to="/login">리액트샘플</Link>
            </h1>
        </div>
    )
}

export default StickyHeader;
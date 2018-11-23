import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Layout } from 'antd';

const { Footer } = Layout;

const defaultProps = {
};

const propTypes = {
};

const AppFooter = ({ history }) => {
    return (
        <Footer id="footer">
            <div className="footer-menus">
                <ul>
                    <li><Link to={''}>회사소개</Link></li>
                    <li><Link to={''}>-</Link></li>
                    <li><Link to={'/policy/usage'}>이용약관</Link></li>
                    <li><Link to={'/policy/personal-information'}>개인정보처리방침</Link></li>
                    <li><Link to={''}>1:1문의</Link></li>
                </ul>
            </div>
            <address id="address">
                <p>-</p>
            </address>
            <p className="copyright">-</p>
        </Footer>
    );
}

AppFooter.propTypes = propTypes;
AppFooter.defaultProps = defaultProps;

export default AppFooter;

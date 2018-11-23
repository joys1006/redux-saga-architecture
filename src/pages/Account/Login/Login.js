import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// PagePackages Components
import PagePanel from 'components/PagePackages/PagePanel/PagePanel';
// antd
import { Form, Input, Button, Checkbox } from 'antd';
// Actions
import * as loginActions from 'stores/modules/user/login.module';
// Layout Container
import ContentContainer from 'containers/CommonContainer/LayoutContainer/ContentContainer';

const FormPanel = Form;
const FormItem = Form.Item;

class Login extends Component {
    state = {
        errorMessage: '',
    }
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // 폼 서브밋 이벤트
    handleSubmit = (e) => {
        e.preventDefault();

        const { form } = this.props;
        const { getFieldValue, validateFields } = form;
        let error = null;
        let check = true;

        validateFields({ force: true }, (err, values) => {
            if (!err) {
                console.log('Received values of form:');
            } else {
                error = err;
                check = false;
            }
        });

        if (check) {
            const payload = {
                u_id: getFieldValue('user-id'),
                u_pw: getFieldValue('user-password'),
            };
            this.setLogin(payload);
        } else {
            const errorKeys = Object.keys(error);
            const fieldEl = document.getElementById(errorKeys[0]);
            fieldEl.focus();
        }
    }

    // 로그인 REQUEST
    setLogin = (payload) => {
        const { LoginActions } = this.props;
        LoginActions.setLoginRequest(payload);
    }

    // 유저 로그인 토큰
    setUserToken = () => {
        const { form, history, loginInfo } = this.props;
        const { getFieldValue } = form;
        if (loginInfo) {
            if (loginInfo.token) {
                if (getFieldValue('remember')) {
                    localStorage.setItem('loginInfo', JSON.stringify(loginInfo));
                    sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));
                } else {
                    localStorage.removeItem('loginInfo');
                    sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));
                }
                history.replace('/');
            } else if (loginInfo.code === 500) {
                this.setState({
                    errorMessage: loginInfo.message,
                });
            }
        }
    }

    componentDidUpdate (nextProps) {
        this.setUserToken();
    }

    render() {
        const { form, loginInfo, validations } = this.props;
        const { getFieldValue } = form;
        const { getPattern, setRules } = validations;
        return (
            <ContentContainer id="Login"
                              isLayout={ false }>

                <div className="login-title-widget">
                    <h2>리액트샘플</h2>
                </div>

                {/* 컨텐츠 */}
                <div className="content">
                    {/* 로그인 폼 */}
                    <FormPanel className="form-widget"
                               onSubmit={ this.handleSubmit }>
                        <div className="input-box-wrap">
                            <div className="item-box">
                                <FormItem>
                                    {
                                        form.getFieldDecorator(
                                            'user-id',
                                            {
                                                rules: [
                                                    { 
                                                        required: true,
                                                        pattern: getPattern('uid'),
                                                        message: setRules('uid', getFieldValue('user-id')),
                                                    }
                                                ],
                                            }
                                        )(
                                            <Input type="text"
                                                   name="user_id"
                                                   required
                                                   placeholder="아이디를 입력해주세요." />
                                        )
                                    }
                                </FormItem>
                            </div>
                            <div className="item-box">
                                <FormItem>
                                    {
                                        form.getFieldDecorator(
                                            'user-password',
                                            {
                                                rules: [
                                                    { 
                                                        required: true,
                                                        message: '비밀번호를 입력해주세요.',
                                                        // pattern: getPattern('upw'),
                                                        // message: setRules('upw', getFieldValue('user-password')),
                                                    }
                                                ],
                                            }
                                        )(
                                            <Input type="password"
                                                   name="user_password"
                                                   autoComplete="password"
                                                   required
                                                   placeholder="비밀번호를 입력해주세요." />
                                        )
                                    }
                                </FormItem>
                            </div>
                        </div>
                        <div className="error-message">{ loginInfo ? loginInfo.message:'' }</div>
                        <Button type="primary"
                                htmlType="submit"
                                className="btn-50-m1 submit-button">
                            로그인
                        </Button>
                        <div className="login-bottom-wrap">
                            <FormItem>
                                {
                                    form.getFieldDecorator(
                                        'remember',
                                        {
                                            valuePropName: 'checked',
                                            initialValue: true,
                                        }
                                    )(
                                        <Checkbox>로그인 상태 유지</Checkbox>
                                    )
                                }
                            </FormItem>
                            <div className="bottom-button-wrap">
                                <div className="button-inner-right">
                                    <Link to="/find-id/user-check">아이디찾기</Link>
                                    <span>/</span>
                                    <Link to="/find-password/id-check">비밀번호찾기</Link>
                                </div>
                            </div>
                        </div>
                    </FormPanel>
                    {/* // 로그인 폼 */}
                </div>
                {/* // 컨텐츠 */}

            </ContentContainer>
        )
    }
}

Login = PagePanel()(Login);
Login = Form.create()(Login);

const mapStateToProps = (state) => {
    return {
        loading: state.login.loading,
        loginInfo: state.login.loginInfo,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        LoginActions: bindActionCreators(loginActions, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Login));
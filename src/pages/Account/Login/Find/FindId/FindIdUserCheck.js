import React, { Component } from 'react';
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// antd
import { Form, Input, Button } from 'antd';
// Layout Container
import ContentContainer from 'containers/CommonContainer/LayoutContainer/ContentContainer';
// PagePackages Components
import PageTabs from 'components/PagePackages/PageTabs/PageTabs';
import PagePanel from 'components/PagePackages/PagePanel/PagePanel';
// components
import StickyHeader from 'components/Common/StickyHeader/StickyHeader';

const FormPanel = Form;
const FormItem = Form.Item;

export class FindIdUserCheck extends Component {

    state = {
        authenticationNumber: null,
        countMessages: {
            phoneNumber: {
                success: '',
                error: '',
            },
            authenticationNumber: {
                success: '',
                error: '',
            },
        },
        requestedVerification: false,
        confirmedVerification: false,
        calcMinute: null,
    };

    // 폼 서브밋 이벤트
    handleSubmit = (e) => {
        e.preventDefault();
        const { history, form } = this.props;
        const { validateFields } = form;
        let check = true;
        let error = null;

        validateFields({ force: true }, (err, values) => {
            if (err) {
                error = err;
                check = false;
            }
        });

        if (check) {
            console.log('통과');
            // const payload = {
            //     u_id: getFieldValue('user-id'),
            //     u_pw: getFieldValue('user-password'),
            // };
            // this.setLogin(payload);
            history.push('/find-id/result');
        } else {
            const errorKeys = Object.keys(error);
            const fieldEl = document.getElementById(errorKeys[0]);
            fieldEl.focus();
        }
    }

    getCertification = () => {
        const { countdown } = this.props;
        const timer = 180;
        countdown.startCountDown(timer, this.countDownHandler);
    }

    countDownHandler = (diffSeconds) => {
        const { confirmedVerification } = this.state;
        const { countdown } = this.props;
        let calcMinute = Math.floor(diffSeconds / 60);
        let calcSeconds = diffSeconds - (calcMinute * 60);
        let formatSeconds = (calcSeconds >= 10 ? calcSeconds : '0' + calcSeconds);
        this.setState({
            ...this.state,
            countMessages: {
                phoneNumber: {
                    success: '0' + calcMinute + ':' + formatSeconds,
                },
            },
            calcMinute: calcMinute,
        });

        if (confirmedVerification) {
            this.setState({
                ...this.state,
                countMessages: {
                    ...this.state.countMessages,
                    phoneNumber: {
                        success: '',
                        error: '',
                    },
                },
            });
            countdown.clearCountDown();
        }
        if (diffSeconds <= 0) {
            this.setState({
                ...this.state,
                countMessages: {
                    ...this.state.countMessages,
                    phoneNumber: {
                        ...this.state.countMessages.phoneNumber,
                        error: '인증번호 입력시간이 초과되었습니다. 다시 시도해 주세요.',
                    },
                },
                requestedVerification: false,
            });
            countdown.clearCountDown();
        }
    }

    render() {
        const { form, validations } = this.props;
        const { calcMinute, countMessages } = this.state;
        const { getFieldValue } = form;
        const { getPattern, setRules } = validations;
        return (
            <ContentContainer id="FindId"
                              isLayout={ false }>

                {/* 스티키 해더 */}
                <StickyHeader />
                {/* // 스티키 해더 */}

                {/* 페이지 탭 */}
                <PageTabs>
                    <NavLink to="/find-id/user-check" className="is-active">아이디 찾기</NavLink>
                    <NavLink to="/find-password/id-check">비밀번호 찾기</NavLink>
                </PageTabs>
                {/* // 페이지 탭 */}

                {/* 컨텐츠 */}
                <div className="content">

                    <div className="text-box">
                        <h3>회원정보에 등록한 휴대전화 번호로 인증</h3>
                        <div className="text-desc">
                            <p>회원정보에 등록한 휴대전화 번호와 입력한 휴대전화 번호가 같아야, 인증번호를 받을 수 있습니다.</p>
                        </div>
                    </div>

                    {/* 아이디 찾기 폼 */}
                    <div className="form-wrap">
                        <FormPanel className="form-widget"
                                   onSubmit={ this.handleSubmit }>
                            <div className="input-box-wrap">
                                <div className="item-box">
                                    <FormItem label="이름">
                                        {
                                            form.getFieldDecorator(
                                                'user-name',
                                                {
                                                    rules: [
                                                        { 
                                                            required: true,
                                                            pattern: getPattern('uname'),
                                                            message: setRules('uname', getFieldValue('user-name')),
                                                        }
                                                    ],
                                                }
                                            )(
                                                <Input type="text"
                                                       name="user_name"
                                                       placeholder="대표자명을 입력해주세요." />
                                            )
                                        }
                                    </FormItem>
                                </div>
                                <div className="item-box">
                                    <FormItem label="휴대전화 번호">
                                        {
                                            form.getFieldDecorator(
                                                'phone-number',
                                                {
                                                    rules: [
                                                        { 
                                                            required: true,
                                                            pattern: getPattern('phone_number'),
                                                            message: setRules('phone_number', getFieldValue('phone-number')),
                                                        }
                                                    ],
                                                }
                                            )(
                                                <Input type="number"
                                                       name="phone_number"
                                                       placeholder="- 없이 숫자만 입력해 주세요." />
                                            )
                                        }
                                    </FormItem>
                                    <Button type="button"
                                            className="btn-40-m1 authentication-button"
                                            onClick={this.getCertification}>
                                        { !calcMinute ? '인증번호 요청' : '재요청' }
                                    </Button>
                                </div>
                                <div className="item-box">
                                    <FormItem>
                                        {
                                            form.getFieldDecorator(
                                                'authentication-number',
                                                {
                                                    rules: [
                                                        { 
                                                            required: true,
                                                            pattern: getPattern('authenticationNumber'),
                                                            message: setRules('authenticationNumber', getFieldValue('authentication-number')),
                                                        }
                                                    ],
                                                }
                                            )(
                                                <Input type="number"
                                                       name="authentication_number"
                                                       placeholder="인증번호를 입력해주세요." />
                                            )
                                        }
                                    </FormItem>
                                    <div className="count-text">{ countMessages.phoneNumber.success }</div>
                                </div>
                            </div>
                            <div className="submit-wrap">
                                <Button type="primary"
                                        htmlType="submit"
                                        className="btn-50-m1 submit-button">
                                    확인
                                </Button>
                            </div>
                        </FormPanel>
                    </div>
                    {/* // 아이디 찾기 폼 */}

                </div>
                {/* // 컨텐츠 */}

            </ContentContainer>
        );
    }
}

FindIdUserCheck = PagePanel()(FindIdUserCheck);
FindIdUserCheck = Form.create()(FindIdUserCheck);

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(FindIdUserCheck));

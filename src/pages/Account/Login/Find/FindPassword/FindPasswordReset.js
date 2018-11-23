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

export class FindPasswordReset extends Component {

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
            history.push('/login');
        } else {
            const errorKeys = Object.keys(error);
            const fieldEl = document.getElementById(errorKeys[0]);
            fieldEl.focus();
        }
    }

    render() {
        const { form, validations } = this.props;
        const { getFieldValue } = form;
        const { getPattern, setRules } = validations;
        return (
            <ContentContainer id="FindPassword"
                              isLayout={ false }>

                <StickyHeader />

                {/* 페이지 탭 */}
                <PageTabs>
                    <NavLink to="/find-id/user-check">아이디 찾기</NavLink>
                    <NavLink to="/find-password/id-check" className="is-active">비밀번호 찾기</NavLink>
                </PageTabs>
                {/* // 페이지 탭 */}

                {/* 컨텐츠 */}
                <div className="content">
                    <div className="text-box">
                        <h3>비밀전호 재설정</h3>
                        <div className="text-desc">
                            <p>새로 사용할 비밀번호를 입력해 주세요.</p>
                        </div>
                    </div>

                    {/* 비밀번호 찾기 폼 */}
                    <div className="form-wrap">
                        <div className="form-text-box">
                            <div className="box-info">
                                <p className="name">제휴점명 :</p>
                                <p className="desc">호텔타임 펜션</p>
                            </div>
                            <div className="box-info">
                                <p className="name">아이디 :</p>
                                <p className="desc">asetras124$%</p>
                            </div>
                        </div>
                        <FormPanel className="form-widget"
                                   onSubmit={ this.handleSubmit }>
                            <div className="input-box-wrap">
                                <div className="item-box">
                                    <FormItem label="새 비밀번호">
                                        {
                                            form.getFieldDecorator(
                                                'user-password',
                                                {
                                                    rules: [
                                                        { 
                                                            required: true,
                                                            pattern: getPattern('upw'),
                                                            message: setRules('upw', getFieldValue('user-password')),
                                                        }
                                                    ],
                                                }
                                            )(
                                                <Input type="password"
                                                       name="user_password"
                                                       autoComplete="password"
                                                       required
                                                       placeholder="8자리 이상 입력해주세요." />
                                            )
                                        }
                                    </FormItem>
                                </div>
                                <div className="item-box">
                                    <FormItem label="새 비밀번호 확인">
                                        {
                                            form.getFieldDecorator(
                                                'user-confirmation',
                                                {
                                                    rules: [
                                                        { 
                                                            required: true,
                                                            pattern: getPattern('upw_confirmation'),
                                                            message: setRules('upw_confirmation', getFieldValue('user-confirmation')),
                                                        }
                                                    ],
                                                }
                                            )(
                                                <Input type="password"
                                                       name="user_confirmation"
                                                       autoComplete="password"
                                                       required
                                                       placeholder="8자리 이상 입력해주세요." />
                                            )
                                        }
                                    </FormItem>
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
                    {/* // 비밀번호 찾기 폼 */}

                    {/* 도움말 */}
                    <div className="information-box">
                        <h4>도움말</h4>
                        <div className="description-box">
                            <p>비밀번호는 영문 (대소문자 구분), 숫자, 특수문자를 혼합하여 8자리 이상 입력해야합니다.</p>
                            <p>사용 가능한 특수문자 : # &amp; \ + - % @ = : ; , . ” ^`~ _ | ! ? * $ # &lt; &gt;() [ ] {}</p>
                            <p>숫자, 문자, 특수문자 구분없이 3자 이상 동일한 문자는 연속적으로 사용할 수 없습니다.</p>
                            <p>현재 비밀번호와 동일한 비밀번호는 사용할 수 없습니다.</p>
                        </div>
                    </div>
                    {/* // 도움말 */}
                    
                </div>
                {/* // 컨텐츠 */}

            </ContentContainer>
        );
    }
}

FindPasswordReset = PagePanel()(FindPasswordReset);
FindPasswordReset = Form.create()(FindPasswordReset);

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
)(withRouter(FindPasswordReset));

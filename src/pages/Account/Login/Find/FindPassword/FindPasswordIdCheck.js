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

export class FindPasswordIdCheck extends Component {
    state = {
        isCount: false,
    }

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
            history.push('/find-password/user-check');
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
                        <h3>아이디 입력</h3>
                        <div className="text-desc">
                            <p>비밀번호를 찾고자 하는 아이디를 입력해 주세요.</p>
                        </div>
                    </div>

                    {/* 비밀번호 찾기 폼 */}
                    <div className="form-wrap">
                        <FormPanel className="form-widget"
                                   onSubmit={ this.handleSubmit }>
                            <div className="input-box-wrap">
                                <div className="item-box">
                                    <FormItem label="아이디">
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
                                                       placeholder="아이디를 입력해주세요." />
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
                </div>
                {/* // 컨텐츠 */}

            </ContentContainer>
        );
    }
}

FindPasswordIdCheck = PagePanel()(FindPasswordIdCheck);
FindPasswordIdCheck = Form.create()(FindPasswordIdCheck);

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
)(withRouter(FindPasswordIdCheck));

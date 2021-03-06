import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
// antd
import { Form, Input, Button } from 'antd';
// Layout Container
import ContentContainer from 'containers/CommonContainer/LayoutContainer/ContentContainer';
// PagePackages Components
import PagePanel from 'components/PagePackages/PagePanel/PagePanel';
// components
import StickyHeader from 'components/Common/StickyHeader/StickyHeader';

const FormPanel = Form;
const FormItem = Form.Item;

export class ResetExpiredPassword extends Component {

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
        const { history, form, validations } = this.props;
        const { getFieldValue } = form;
        const { getPattern, setRules } = validations;
        return (
            <ContentContainer id="ResetExpiredPassword"
                              isLayout={ false }>

                <StickyHeader />

                {/* 컨텐츠 */}
                <div className="content">
                    <div className="text-box">
                        <h3>오래된 비밀번호를 사용하고 있습니다.</h3>
                        <div className="text-desc">
                            <p>여기어때는 안전한 비밀번호 관리를 위해 6개월마다 비밀번호 변경을 권장하고 있습니다.</p>
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
                                <Button type="button"
                                        className="btn-50-m2 expire-button"
                                        onClick={ () => history.push('/') }>
                                    90일 이후에 변경
                                </Button>
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

ResetExpiredPassword = PagePanel()(ResetExpiredPassword);
ResetExpiredPassword = Form.create()(ResetExpiredPassword);

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
)(withRouter(ResetExpiredPassword));

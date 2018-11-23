/**
 * @author Has
 * @reg_date 2018-11-02
 * @summary PagePanel
 * @description 페이지 공통 및 Mixins 기능 정의
 */

import React, { Component } from 'react';

// Utils
import { validations, dialog, countdown } from 'utils/mixins';

const PagePanel = (options) => (ChildrenComponent) => {
    return class extends Component {
        render() {
            return (
                <ChildrenComponent parentsState={ this.state }
                                   validations={ validations }
                                   dialog={ dialog }
                                   countdown={ countdown }
                                   {...this.props} />
            )
        }
    }
}

export default PagePanel;
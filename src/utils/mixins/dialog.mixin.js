/**
 * @author Has
 * @reg_date 2018-11-16
 * @summary https://ant.design/components/modal/
 * @example {
    modalType: 'confirm',
    options: {
        title: 'Are you sure delete this task?',
        content: 'Some descriptions',
        okText: 'Yes',
        cancelText: 'No',
        okType: 'danger',
        maskClosable: true,
        okButtonProps: {
          disabled: true,
        },
        cancelButtonProps: {
          loading: true,
        },
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
    }
 */

// antd
import { Modal } from 'antd';

export const dialog = {
    open (options) {
        Modal[options.modalType](options.options);
    },
};
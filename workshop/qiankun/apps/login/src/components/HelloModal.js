import React from 'react';
import { Modal } from 'antd';

export default function (props) {
    return (
        <>
            <Modal
                visible={props.isOpen}
                onOk={() => props.onOk()}
                onCancel={() => props.onClose()}
                title="qiankun"
            >
                Login Success, click ok to redirect to dashboard.
            </Modal>
        </>
    );
}

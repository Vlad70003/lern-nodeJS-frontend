import {Modal, Form, Input, Button} from "antd";

export const DescriptionModalComponent = ({isModalOpen, handleCancel, onFinish, onFinishFailed}) => {
    return (
        <Modal title="Добавить описание" open={isModalOpen} footer={null} onCancel={handleCancel}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Имя"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Описание"
                    name="description"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                    <Button htmlType="button" onClick={handleCancel}>
                        Закрыть
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};
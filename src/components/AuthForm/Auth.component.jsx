import {Button, Form, Input, Radio} from "antd";

export const AuthFormComponent = ({ButtonText, Selected, handleNavigate, onFinish}) => {
    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600, margin: 'auto'}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            autoComplete="off"
        >

            <Form.Item
                label="Логин"
                name="username"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password/>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit" >
                    {ButtonText}
                </Button>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Radio.Group defaultValue={Selected}>
                    <Radio.Button value='autorization' onClick={() => handleNavigate('/')}>
                        Вход
                    </Radio.Button>
                    <Radio.Button value='registration' onClick={() => handleNavigate('/registration')}>
                        Регистрация
                    </Radio.Button>
                </Radio.Group>
            </Form.Item>
        </Form>
    );
};
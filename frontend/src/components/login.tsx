import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";



const FormData = () => {

    const onFinish = (values: any) => {
        console.log("Received values of form: ", values);
    };
    
    return (
        <div className="loginContainer">
            <div className="loginTitle">
                Iniciar Sesión.
            </div>
            <div className="logInSubContainer" >
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: "Please input your Username!" }]}
                    >
                        <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Nombre de usuario"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: "Please input your Password!" }]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Contraseña"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                
                        <a className="login-form-forgot" href="" color="white">
                        Olvidaste tu contraseña?
                        </a>
                    </Form.Item>
                
                    <Form.Item>
                        <Button
                        
                        htmlType="submit"
                        className="login-form-button"
                        >
                        Iniciar Sesión
                        </Button>
                        
                    </Form.Item>
                </Form>
            </div>
        </div>
        
    );
};

export default FormData;
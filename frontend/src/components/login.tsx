import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";


const FormData = () => {

    const onFinish = (values: any) => {
        console.log("Received values of form: ", values);
    };

    return (
        
        <div className="loginMainContainer flex flex-row">
            
            <div className="loginSecondContainer flex flex-row">
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
                            <a className="login-form-forgot" href="" color="white">
                                Olvidaste tu contraseña?
                            </a>
                        </Form.Item>
                    
                        <Form.Item>
                            <Button
                            htmlType="submit"
                            className="login-form-button justify-center"
                            style={{backgroundColor: "#FFB800", color: "white", width: "100%", height: "50px", borderRadius: "5px",
                                fontFamily: "Century Gothic", fontSize: "16px", fontWeight: "bold"}}>
                            Iniciar Sesión
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <div className="loginPicContainer">

            </div>
            </div>
            
            <div id="circle-orbit-container">
                <div id="inner-orbit">
                <div className="inner-orbit-cirlces">
                </div>
                </div>

                <div id="middle-orbit">
                <div className="middle-orbit-cirlces">
                </div>
                </div>

                <div id="outer-orbit">
                <div className="outer-orbit-cirlces">
                </div>
                </div>
            </div>

        </div>
    );
};

export default FormData;
import { FaFacebookF } from "react-icons/fa6";
import { Typography } from "@mui/material";
import type { FormProps } from "antd";
import axios from "axios";
import { Button, Form, Input, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  type FieldType = {
    email?: string;
    password?: string;
  };
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        values
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      console.log(token); // You can store the token in localStorage and use it for authentication
      navigate("/employee/dashboard"); // Redirect to dashboard on successful login
    } catch (error) {
      console.error("Login error:", error);
      console.log(values);
      setLoading(false);
    }
  };

  return (
    <div className=" h-screen w-screen px-8 py-8 flex justify-center bg-slate-200">
      <div className=" w-1/2 border-red-600 border-2 p-8 bg-white">
        <Typography variant="h4">Welcome to AccellionX</Typography>
        <div className="mt-5 flex justify-around items-center">
          <Button size="large" className="flex w-1/3">
            <FaFacebookF className="mt-1 mr-1" />
            Sign in with Facebbok
          </Button>
          <Button size="large" className="flex w-1/3">
            <FaFacebookF className="mt-1 mr-1" />
            Sign in with Google
          </Button>
        </div>
        <div className="mt-8">
          <Divider plain>or</Divider>
        </div>
        <div className="border-2 border-black mt-8">
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            className="py-8 border-2 border-purple-500"
          >
            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <div className="mr-10 border-2 border-red-100">
              <Typography className="!text-sm flex justify-end text-secondary-color">
                Forgot Password?
              </Typography>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full mt-4 !bg-secondary-color"
                >
                  Sign In
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
      <div className=" w-1/2 bg-secondary-color flex flex-col items-center justify-center px-4 text-white">
        <Typography variant="h2">Lorem ipsum, dolor sit amet cons?</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          quibusdam non tenetur magnam ullam culpa dolores, dicta temporibus
          impedit atque vero sequi praesentium, quasi et similique natus
          distinctio pariatur! Voluptate unde numquam illo dolorem placeat
          saepe, ipsa delectus ad reiciendis odit asperiores nihil consequatur
          alias debitis enim repudiandae perspiciatis quo vel libero voluptates
          temporibus quas explicabo. Velit natus, unde exercitationem
          praesentium nihil assumenda qui placeat alias odit doloremque porro ad
          in neque!
        </Typography>
        <Typography>Learn More &#8594;</Typography>
      </div>
    </div>
  );
};

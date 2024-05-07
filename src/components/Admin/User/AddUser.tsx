import { Col, DatePicker, Row, Typography } from "antd";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input, Select } from "antd";
const { Title } = Typography;

type FieldType = {
  role?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
export const AddUser = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between bg-slate-200 p-1 rounded-md">
        <div className="border-l-4 border-secondary-color h-9 flex items-center">
          <Title level={5} className="ml-2">
            Add User
          </Title>
        </div>
        <DatePicker />
      </div>

      <Form
        className="mt-4 w-full"
        name="basic"
        labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        // style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="Select role to Add User"
          name="role"
          rules={[
            { required: true, message: "Please Select one of the value!" },
          ]}
        >
          <Select
            defaultValue="lucy"
            //   style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item<FieldType>
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: "Please input your First Name!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item<FieldType> label="Last Name" name="lastName">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input Password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item<FieldType>
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                { required: true, message: "Confirm Password must be matched with Password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item wrapperCol={{ offset: 0 }}>
          <Button type="primary" htmlType="submit">
            Add User
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

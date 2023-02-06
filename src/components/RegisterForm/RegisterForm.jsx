import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { omit } from 'lodash';

import { register } from 'redux/auth/auth-thunk';

import { Button, Form } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { FormEl, InputElt, InputP } from './RegisterForm.styled';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const onFinish = value => {
    dispatch(register(omit(value, 'confirm')));
  };

  return (
    <FormEl
      name="basic"
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <InputElt
          autoComplete="username"
          placeholder="E-mail"
          prefix={<MailOutlined className="site-form-item-icon" />}
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <InputP
          autoComplete="new-password"
          placeholder="Password"
          prefix={<LockOutlined className="site-form-item-icon" />}
        />
      </Form.Item>
      <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('The two passwords that you entered do not match!')
              );
            },
          }),
        ]}
      >
        <InputP
          autoComplete="confirm-password"
          placeholder="Confirm Password"
          prefix={<LockOutlined className="site-form-item-icon" />}
        />
      </Form.Item>

      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <InputElt
          autoComplete="username"
          placeholder="Username"
          prefix={<UserOutlined className="site-form-item-icon" />}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <Link to="/login">Log in</Link>
    </FormEl>
  );
}

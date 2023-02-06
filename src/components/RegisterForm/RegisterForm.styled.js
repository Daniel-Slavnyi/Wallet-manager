import styled from '@emotion/styled/macro';
import { Form, Input } from 'antd';

export const FormEl = styled(Form)`
  background-color: white;
  padding: 40px 60px;
  border-radius: 20px;
`;

export const InputElt = styled(Input)`
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  border-radius: 0;

  &:focus-within {
    outline: transparent;
  }

  &:hover {
    outline: transparent;
    border-color: transparent;
  }
`;

export const InputP = styled(Input.Password)`
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  border-radius: 0;
`;

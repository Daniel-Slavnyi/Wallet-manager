import styled from '@emotion/styled/macro';
import { Input } from 'antd';

export const InputElt = styled(Input)`
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;

  &#placeholder {
    background: transparent;
  }
`;

export const InputP = styled(Input.Password)`
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
`;

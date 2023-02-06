import styled from '@emotion/styled/macro';
import bgRegister from '../../img/register.png';

export const WrapRegister = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapRegisterForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: tomato;
  width: 100vw;
  height: 100vh;
`;

export const BgRegister = styled.div`
  width: 436px;
  height: 420px;
  background: url(${bgRegister}) no-repeat center center / contain;
`;

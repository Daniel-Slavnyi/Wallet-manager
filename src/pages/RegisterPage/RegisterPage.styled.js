import styled from '@emotion/styled/macro';
import bgRegister from '../../img/register.png';

export const WrapRegister = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapRegisterForm = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.33);
  backdrop-filter: blur(25px);
  z-index: -1;
`;

export const BgRegister = styled.div`
  width: 436px;
  height: 420px;
  background: url(${bgRegister}) no-repeat center center / contain;
`;

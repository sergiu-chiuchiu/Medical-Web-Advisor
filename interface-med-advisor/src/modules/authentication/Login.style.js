import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0); // fallback color
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Modal = styled.div`
  height: 400px;
  width: 300px;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(255, 255, 255);
`;

export const ModalHeader = styled.div`
  background-color: rgb(248, 248, 246);
  border-bottom: 1px solid rgb(255, 255, 255);
`;

export const ModalHeaderText = styled.p`
  color: ${props => props.color || "inherit"};
  text-align: center;
  padding-top: 10px;
  margin-top: ${props => props.marginTop || ""};
  margin-bottom: ${props => props.marginBottom || ""};
  font-size: ${props => props.fontSizeEm || ""}em;
`;

export const CloseButton = styled.button`
  
`
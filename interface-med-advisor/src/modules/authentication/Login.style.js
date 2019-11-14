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

  .loginWrapper {
    text-align: center
  }

  .formSection label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    margin-top: 10px;
  }

  .formSection input {
    margin-bottom: 5px;
  }

  .termsAndCond {
    margin-top: 5px;
    display: flex;
    justify-content: center;
  }
  
  .submitButton {
    margin-top: 20px;
    border-radius: 5px;
    color: #fff;
    border: 1px solid lightblue;
    height: 30px;
    min-width: 70px;
    background-color: ${props => props.theme.primaryColor};
  }
  
  `;

export const Modal = styled.div`
  height: 400px;
  min-width: 300px;
  border-radius: 10px;
  overflow: hidden;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(255, 255, 255);
  `;

export const ModalHeader = styled.div`
  background-color: rgb(248, 248, 246);
  border-bottom: 1px solid #D6D5D6
  
  .closeLogin {
    float: right;
    margin-right: 5px;
    margin-top: 5px;
  }


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
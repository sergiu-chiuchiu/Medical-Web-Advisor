import styled from 'styled-components';

// instead of h1 write the html tagname
const StyleH1 = styled.h1`
  font-size: ${props =>
    props.fontSize || "50"}px;
  text-align: left;
  width: 100%;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin: 20px;
  color: ${props => props.theme.testColor};

  
`;

export default StyleH1;
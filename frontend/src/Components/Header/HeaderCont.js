import styled from "styled-components";

const HeaderCont = styled.header`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 150px;

  span {
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  h2 {
    position: absolute;
    top: 5px;
    left: 0px;
    font-family: Sarabun, sans-serif;
  }
`;

export default HeaderCont;

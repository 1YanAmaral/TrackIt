import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Info = styled.input`
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;
  width: 303px;
  height: 45px;
  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin: 6px;

  ::placeholder {
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #dbdbdb;
  }
`;

const Bigbutton = styled.button`
  width: 303px;
  height: 45px;
  background-color: #52b6ff;
  border-radius: 4.63636px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20.976px;
  color: #ffffff;
  border: none;
`;

const Loadbutton = styled.button`
  width: 303px;
  height: 45px;
  background-color: #52b6ff;
  border-radius: 4.63636px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20.976px;
  color: #ffffff;
  opacity: 0.7;
  border: none;
`;

const SpanLink = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 13.976px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
  color: #52b6ff;
  margin: 25px;
`;

const Logo = styled.img`
  margin-top: 68px;
  margin-bottom: 35px;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #f2f2f2;
`;
const SpanTitle = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  color: #126ba5;
  margin-top: 100px;
  margin-left: 20px;
`;

export {
  Wrapper,
  Info,
  Bigbutton,
  SpanLink,
  Logo,
  Page,
  Loadbutton,
  SpanTitle,
};

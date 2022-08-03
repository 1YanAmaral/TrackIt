import styled from "styled-components";
import logo from "../styles/img/logo.png";
import { useState } from "react";
import { login } from "../services/trackit";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function doLogin(event) {
    event.preventDefault();
    const promise = login({
      email: email,
      senha: password,
    });
    promise.then((res) => {
      navigate("/hoje");
    });
  }

  return (
    <Container>
      <img src={logo} alt="TrackIt" />
      <form onSubmit={doLogin}>
        <Container>
          <Info
            type="email"
            placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Info
            type="password"
            placeholder="senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Bigbutton type="submit">Entrar</Bigbutton>
        </Container>
      </form>
      <SpanLink>Não tem uma conta? Cadastre-se!</SpanLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    margin-top: 70px;
  }
`;

const Info = styled.input`
  width: 303px;
  height: 45px;
  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin: 6px;
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

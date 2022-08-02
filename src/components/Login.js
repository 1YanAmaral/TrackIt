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
    login({
      email: email,
      senha: password,
    }).then((res) => {
      navigate("/hoje");
    });
  }

  return (
    <Container>
      <img src={logo} alt="TrackIt" />
      <form onSubmit={doLogin}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
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

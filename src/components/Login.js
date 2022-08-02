import styled from "styled-components";
import logo from "../styles/img/logo.png";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(event) {
    event.preventDefault();

    const requisicao = axios.post("https://minha-api.com/login", {
      email: email,
      senha: password,
    });
  }

  return (
    <Container>
      <img src={logo} alt="TrackIt" />
      <form onSubmit={login}>
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

import logo from "../styles/img/logo.png";
import { useState } from "react";
import { login } from "../services/trackItServices";
import { useNavigate, Link } from "react-router-dom";
import {
  Wrapper,
  Info,
  Bigbutton,
  SpanLink,
  Logo,
} from "../styles/sharedStyles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    const body = {
      email,
      password,
    };
    const promise = login(body);
    promise.then((res) => {
      console.log(res.data);
      navigate("/hoje");
    });
  }

  return (
    <Wrapper>
      <Logo src={logo} alt="TrackIt" />
      <form onSubmit={handleLogin}>
        <Wrapper>
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
        </Wrapper>
      </form>
      <SpanLink>
        <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
      </SpanLink>
    </Wrapper>
  );
}

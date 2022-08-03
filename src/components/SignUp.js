import logo from "../styles/img/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Info,
  Bigbutton,
  SpanLink,
  Logo,
} from "../styles/sharedStyles";

export default function SignUp() {
  const [form, setForm] = useState({});

  function signup() {}

  return (
    <Wrapper>
      <Logo src={logo} alt="TrackIt" />
      <form>
        <Wrapper>
          <Info
            type="email"
            placeholder="email"
            //value={email}
            //onChange={(event) => setEmail(event.target.value)}
          />
          <Info
            type="password"
            placeholder="senha"
            //value={password}
            //onChange={(event) => setPassword(event.target.value)}
          />
          <Info
            type="name"
            placeholder="nome"
            //value={name}
            //onChange={(event) => setName(event.target.value)}
          />
          <Info
            type="url"
            placeholder="foto"
            //value={url}
            //onChange={(event) => setUrl(event.target.value)}
          />
          <Bigbutton type="submit">Entrar</Bigbutton>
        </Wrapper>
      </form>
      <SpanLink>
        <Link to="/">Já tem uma conta? Faça login!</Link>
      </SpanLink>
    </Wrapper>
  );
}

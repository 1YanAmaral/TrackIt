import logo from "../styles/img/logo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Wrapper,
  Info,
  Bigbutton,
  SpanLink,
  Logo,
} from "../styles/sharedStyles";
import { signup } from "../services/trackItServices";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  }

  function sendSignUp(e) {
    e.preventDefault();
    const promise = signup(form);
    promise.then((res) => {
      console.log("FOI", res);
      navigate("/");
    });
    promise.catch(() => alert("Algo está errado, verifique suas informações!"));
  }

  return (
    <Wrapper>
      <Logo src={logo} alt="TrackIt" />
      <form onSubmit={sendSignUp}>
        <Wrapper>
          <Info
            type="email"
            placeholder="email"
            name="email"
            onChange={handleForm}
            value={form.email}
            required
          />
          <Info
            type="password"
            placeholder="senha"
            name="password"
            onChange={handleForm}
            value={form.password}
            required
          />
          <Info
            type="text"
            placeholder="nome"
            name="name"
            onChange={handleForm}
            value={form.name}
            required
          />
          <Info
            type="url"
            placeholder="foto"
            name="image"
            onChange={handleForm}
            value={form.image}
          />
          <Bigbutton type="submit">Cadastrar</Bigbutton>
        </Wrapper>
      </form>
      <SpanLink>
        <Link to="/">Já tem uma conta? Faça login!</Link>
      </SpanLink>
    </Wrapper>
  );
}

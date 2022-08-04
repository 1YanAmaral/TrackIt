import logo from "../styles/img/logo.png";
import { ThreeDots } from "react-loader-spinner";
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useState } from "react";
import { login } from "../services/trackItServices";
import { useNavigate, Link } from "react-router-dom";
import {
  Wrapper,
  Info,
  Bigbutton,
  SpanLink,
  Logo,
  Loadbutton,
} from "../styles/sharedStyles";
import { useContext } from "react";
import UserContext from "./context/UserContext";
import LoginContext from "./context/LoginContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const { token, setToken } = useContext(LoginContext);

  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    const body = {
      email,
      password,
    };
    const promise = login(body);
    promise.then((res) => {
      setLoading(true);
      setUser(res.data);
      setToken(res.data.token);
      console.log(res.data, res.data.token);
      navigate("/hoje");
    });
  }
  if (loading) {
    return (
      <Wrapper>
        <Logo src={logo} alt="TrackIt" />
        <form onSubmit={handleLogin}>
          <Wrapper>
            <Info
              disabled={true}
              type="email"
              placeholder="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Info
              disabled={true}
              type="password"
              placeholder="senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Loadbutton type="submit">
              <ThreeDots />
            </Loadbutton>
          </Wrapper>
        </form>
        <SpanLink>
          <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </SpanLink>
      </Wrapper>
    );
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
        <Link onClick={() => setLoading(true)} to="/cadastro">
          Não tem uma conta? Cadastre-se!
        </Link>
      </SpanLink>
    </Wrapper>
  );
}

<ThreeDots
  height="80"
  width="80"
  radius="9"
  color="#fff"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/>;

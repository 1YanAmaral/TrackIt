import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/globalStyles";
import { Wrapper } from "../styles/sharedStyles";
import Login from "./Login";
import SignUp from "./SignUp";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </>
  );
}

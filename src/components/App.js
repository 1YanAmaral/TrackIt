import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/globalStyles";
import { Wrapper } from "../styles/sharedStyles";
import Login from "./Login";
import SignUpPage from "./SignUp";
import Today from "./Today";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/hoje" element={<Today />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </>
  );
}

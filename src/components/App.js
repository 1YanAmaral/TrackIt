import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/globalStyles";
import { Wrapper } from "../styles/sharedStyles";
import Login from "./Login";
import SignUpPage from "./SignUp";
import Today from "./Today";
import UserContext from "./UserContext";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState([]);
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <BrowserRouter>
          <UserContext.Provider value={{ user, setUser }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<SignUpPage />} />
              <Route path="/hoje" element={<Today />} />
            </Routes>
          </UserContext.Provider>
        </BrowserRouter>
      </Wrapper>
    </>
  );
}

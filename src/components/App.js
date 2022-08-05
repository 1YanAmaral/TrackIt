import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/globalStyles";
import { Wrapper } from "../styles/sharedStyles";
import Login from "./Login";
import SignUpPage from "./SignUp";
import Today from "./Today";
import UserContext from "./context/UserContext";
import { useState } from "react";
import LoginContext from "./context/LoginContext";
import Habits from "./Habits";
import History from "./History";

export default function App() {
  const [user, setUser] = useState([]);
  const [token, setToken] = useState("");
  const [habits, setHabits] = useState([]);
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <BrowserRouter>
          <LoginContext.Provider value={{ token, setToken }}>
            <UserContext.Provider value={{ user, setUser, habits, setHabits }}>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/hoje" element={<Today />} />
                <Route path="/habitos" element={<Habits />} />
                <Route path="/historico" element={<History />} />
              </Routes>
            </UserContext.Provider>
          </LoginContext.Provider>
        </BrowserRouter>
      </Wrapper>
    </>
  );
}

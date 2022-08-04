import Footer from "./Footer";
import Header from "./Header";
import { Page } from "../styles/sharedStyles";
import styled from "styled-components";
import { useEffect } from "react";
import { getHabits } from "../services/trackItServices";
import { useContext } from "react";
import LoginContext from "./context/LoginContext";

export default function Habits() {
  const { token, setToken } = useContext(LoginContext);
  function createHeader() {
    const auth = localStorage.getItem("trackit");
    const config = {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    };
    console.log(config);
    return config;
  }
  createHeader();

  useEffect(() => {
    const promise = getHabits(createHeader());
    promise
      .then((res) => {
        console.log(res.data, token);
      })
      .catch(console.log("UE"));
  }, [token]);

  return (
    <>
      <Header />
      <Page>
        <Group>
          <SpanHabits>Meus hábitos</SpanHabits>
          <AddButton>+</AddButton>
        </Group>
        <HabitsGroup>
          <UserHabit>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </UserHabit>
        </HabitsGroup>
      </Page>
      <Footer />
    </>
  );
}

const SpanHabits = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  color: #126ba5;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  margin-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
`;

const HabitsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  margin-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
`;

const AddButton = styled.button`
  width: 40px;
  height: 35px;
  background-color: #52b6ff;
  border-radius: 4.63636px;
  color: #fff;
  border: none;
`;
const UserHabit = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #666666;
`;

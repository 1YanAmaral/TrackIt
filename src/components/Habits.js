import Footer from "./Footer";
import Header from "./Header";
import { Page, Info } from "../styles/sharedStyles";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getHabits } from "../services/trackItServices";
import { useContext } from "react";
import LoginContext from "./context/LoginContext";

export default function Habits() {
  const { token, setToken } = useContext(LoginContext);
  const [habit, setHabit] = useState([]);
  const [clicked, setClicked] = useState(false);

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
        setHabit(res.data);
        console.log(res.data, token);
      })
      .catch(console.log("UE"));
  }, [token]);

  return (
    <>
      {habit.length === 0 ? (
        <>
          <Header />
          <Page>
            <Group>
              <SpanHabits>Meus hábitos</SpanHabits>
              <AddButton
                onClick={() => {
                  setClicked(!clicked);
                }}
              >
                +
              </AddButton>
            </Group>
            <HabitsGroup>
              {clicked ? (
                <HabitAdd>
                  <Info placeholder="nome do hábito"></Info>
                  <ButtonGroup>
                    <CancelButton>Cancelar</CancelButton>
                    <SaveButton>Salvar</SaveButton>
                  </ButtonGroup>
                </HabitAdd>
              ) : (
                <></>
              )}

              <UserHabit>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
                para começar a trackear!
              </UserHabit>
            </HabitsGroup>
          </Page>
          <Footer />
        </>
      ) : (
        <></>
      )}
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
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  margin-top: 10px;
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

const HabitAdd = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 180px;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 20px auto;
  padding: 18px;
`;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 10px;
`;

const SaveButton = styled.button`
  width: 84px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #52b6ff;
  border-radius: 4.63636px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: #fff;
  border: none;
`;

const CancelButton = styled.button`
  width: 84px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 4.63636px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: #52b6ff;
  border: none;
`;

import styled from "styled-components";
import { Page, SpanTitle } from "../styles/sharedStyles";
import Header from "./Header";
import { useContext, useEffect, useState } from "react";
import UserContext from "./context/UserContext";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import Footer from "./Footer";
import {
  getToday,
  createHeader,
  checkHabit,
  uncheckHabit,
} from "../services/trackItServices";
import LoginContext from "./context/LoginContext";

export default function Today() {
  const { habits, setHabits } = useContext(UserContext);
  const { token } = useContext(LoginContext);
  const [todayHabits, setTodayHabits] = useState([]);
  const weekday = dayjs().locale("pt-br").format("dddd");
  const day = dayjs().format("DD");
  const month = dayjs().format("MM");

  useEffect(() => {
    const promise = getToday(createHeader(token));
    promise
      .then((res) => {
        console.log(res.data, token);
        setTodayHabits(res.data);
      })
      .catch("Aguarde...");
  }, []);

  function check(habitId) {
    checkHabit(habitId, createHeader(token));
  }

  function uncheck(habitId) {
    uncheckHabit(habitId, createHeader(token));
  }

  return (
    <>
      <Header />
      <Page>
        <SpanTitle>
          {weekday}, {day}/{month}
        </SpanTitle>
        <SpanToDo>Nenhum hábito concluído ainda</SpanToDo>

        {todayHabits.map((value) =>
          value.done ? (
            <HabitDivChecked>
              <Habit>{value.name}</Habit>
              <HabitTrack>
                Sequência atual: {value.currentSequence} dias
              </HabitTrack>
              <HabitTrack>Seu recorde: {value.highestSequence} dias</HabitTrack>
              <ion-icon
                name="checkbox"
                onClick={() => uncheck(value.id)}
              ></ion-icon>
            </HabitDivChecked>
          ) : (
            <HabitDiv>
              <Habit>{value.name}</Habit>
              <HabitTrack>
                Sequência atual: {value.currentSequence} dias
              </HabitTrack>
              <HabitTrack>
                {" "}
                Seu recorde: {value.highestSequence} dias
              </HabitTrack>
              <ion-icon
                name="checkbox"
                onClick={() => check(value.id)}
              ></ion-icon>
            </HabitDiv>
          )
        )}
      </Page>
      <Footer />
    </>
  );
}

const SpanToDo = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #bababa;
  margin-bottom: 30px;
  margin-left: 20px;
`;

const HabitDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  width: 340px;
  height: 94px;
  margin: 10px auto;
  padding: 10px;
  border-radius: 5px;
  position: relative;

  ion-icon {
    position: absolute;
    right: 10px;
    font-size: 90px;
    color: #e7e7e7;
  }
`;

const HabitDivChecked = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  width: 340px;
  height: 94px;
  margin: 10px auto;
  padding: 10px;
  border-radius: 5px;
  position: relative;

  ion-icon {
    position: absolute;
    right: 10px;
    font-size: 90px;
    color: #8fc549;
  }
`;

const Habit = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  color: #666666;
`;

const HabitTrack = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #666666;
`;

import styled from "styled-components";
import { Page, SpanTitle } from "../styles/sharedStyles";
import Header from "./Header";
import { useContext, useEffect } from "react";
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
import UserContext from "./context/UserContext";
import updateLocale from "dayjs/plugin/updateLocale";

export default function Today() {
  dayjs.extend(updateLocale);
  dayjs.updateLocale("pt-br", {
    weekdays: "Domingo_Segunda_Terça_Quarta_Quinta_Sexta_Sábado".split("_"),
  });
  const { token } = useContext(LoginContext);
  const { checkedHabits, setCheckedHabits, todayHabits, setTodayHabits } =
    useContext(UserContext);

  const weekday = dayjs().locale("pt-br").format("dddd").toString();
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
  }, [checkedHabits]);

  function check(habitId) {
    const promise = checkHabit(habitId, createHeader(token));
    promise.then(() => {
      setCheckedHabits([...checkedHabits, habitId]);
      console.log(checkedHabits);
    });
  }

  function uncheck(habitId) {
    const promise = uncheckHabit(habitId, createHeader(token));
    promise.then(() => {
      setCheckedHabits(checkedHabits.filter((value) => value !== habitId));
      console.log(checkedHabits);
    });
  }

  return (
    <>
      <Header />
      <Page>
        <SpanTitle>
          {weekday}, {day}/{month}
        </SpanTitle>
        {checkedHabits.length === 0 ? (
          <SpanToDo>Nenhum hábito concluído ainda</SpanToDo>
        ) : (
          <SpanDone>
            {Math.floor((checkedHabits.length / todayHabits.length) * 100)}% dos
            hábitos concluídos
          </SpanDone>
        )}

        {todayHabits.map((value, index) =>
          value.done ? (
            <HabitDivChecked key={index}>
              <Habit>{value.name}</Habit>
              <HabitTrack>
                Sequência atual: <Green>{value.currentSequence} dias</Green>
              </HabitTrack>
              {value.currentSequence === value.highestSequence ? (
                <HabitTrack>
                  Seu recorde: <Green>{value.highestSequence} dias</Green>
                </HabitTrack>
              ) : (
                <HabitTrack>
                  Seu recorde: {value.highestSequence} dias
                </HabitTrack>
              )}

              <ion-icon
                name="checkbox"
                onClick={() => uncheck(value.id)}
              ></ion-icon>
            </HabitDivChecked>
          ) : (
            <>
              <HabitDiv key={value.id}>
                <Habit>{value.name}</Habit>
                <HabitTrack>
                  Sequência atual: {value.currentSequence} dias
                </HabitTrack>
                <HabitTrack>
                  Seu recorde: {value.highestSequence} dias
                </HabitTrack>
                <ion-icon
                  name="checkbox"
                  onClick={() => check(value.id)}
                ></ion-icon>
              </HabitDiv>
            </>
          )
        )}
      </Page>
      <Footer checked={checkedHabits.length} today={todayHabits.length} />
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

const SpanDone = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #8fc549;
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

const Green = styled.span`
  color: #8fc549;
`;

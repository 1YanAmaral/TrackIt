import styled from "styled-components";
import { Page, SpanTitle } from "../styles/sharedStyles";
import Header from "./Header";
import { useContext } from "react";
import UserContext from "./context/UserContext";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import Footer from "./Footer";

export default function Today() {
  const weekday = dayjs().locale("pt-br").format("dddd");
  const day = dayjs().format("DD");
  const month = dayjs().format("MM");
  return (
    <>
      <Header />
      <Page>
        <SpanTitle>
          {weekday}, {day}/{month}
        </SpanTitle>
        <SpanToDo>Nenhum hábito concluído ainda</SpanToDo>
        <HabitDiv>
          <Habit>Ler 1 capítulo de livro</Habit>
          <HabitTrack> Sequência atual: 3 dias</HabitTrack>
          <HabitTrack> Seu recorde: 5 dias</HabitTrack>
        </HabitDiv>
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
  margin-left: 20px;
  padding: 10px;
  border-radius: 5px;
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
  line-height: 29px;
  color: #666666;
`;

import styled from "styled-components";
import { Page, Wrapper } from "../styles/sharedStyles";
import Header from "./Header";

export default function Today() {
  return (
    <>
      <Header />
      <Page>
        <SpanTitle>Segunda, 17/05</SpanTitle>
        <SpanToDo>Nenhum hábito concluído ainda</SpanToDo>
        <HabitDiv>
          <Habit>Ler 1 capítulo de livro</Habit>
        </HabitDiv>
      </Page>
    </>
  );
}

const SpanTitle = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  color: #126ba5;
  margin-top: 100px;
  margin-left: 20px;
`;

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

import Footer from "./Footer";
import Header from "./Header";
import { Page, SpanTitle } from "../styles/sharedStyles";
import styled from "styled-components";
import { useContext } from "react";
import UserContext from "./context/UserContext";

export default function History() {
  const { checkedHabits, todayHabits } = useContext(UserContext);
  return (
    <>
      <Header />
      <Page>
        <SpanTitle>Histórico</SpanTitle>
        <Message>
          Em breve você poderá ver o histórico dos seu hábitos aqui!
        </Message>
      </Page>
      <Footer checked={checkedHabits.length} today={todayHabits.length} />
    </>
  );
}

const Message = styled.div`
  width: 100vw;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  //line-height: 29px;
  color: #666666;
  margin: 20px 20px;
`;

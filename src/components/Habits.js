import Footer from "./Footer";
import Header from "./Header";
import { Page, Info, Loadbutton } from "../styles/sharedStyles";
import styled from "styled-components";
import { useEffect, useState } from "react";
import {
  getHabits,
  createHabit,
  createHeader,
  deleteHabit,
} from "../services/trackItServices";
import { useContext } from "react";
import LoginContext from "./context/LoginContext";
import "../styles/style.css";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "./context/UserContext";

function Days({ weekday, dayId, daysId, setDaysId }) {
  const [selected, setSelected] = useState("dayOption");

  return selected === "dayOption" ? (
    <div
      className={selected}
      onClick={() => {
        setSelected("dayOption selected");
        setDaysId([...daysId, dayId]);
        console.log(daysId);
      }}
    >
      {weekday}
    </div>
  ) : (
    <div
      className={selected}
      onClick={() => {
        setSelected("dayOption");
        setDaysId(daysId.filter((value) => value !== dayId));
        console.log(daysId);
      }}
    >
      {weekday}
    </div>
  );
}

export default function Habits() {
  const { token, setToken } = useContext(LoginContext);
  const { habits, setHabits } = useContext(UserContext);
  const { checkedHabits, todayHabits } = useContext(UserContext);
  const [reload, setReload] = useState(false);
  const [creating, setCreating] = useState(false);

  const [clicked, setClicked] = useState(false);
  const [daysId, setDaysId] = useState([]);
  const [form, setForm] = useState({
    name: "",
  });

  const arrDays = [
    { id: 0, name: "D" },
    { id: 1, name: "S" },
    { id: 2, name: "T" },
    { id: 3, name: "Q" },
    { id: 4, name: "Q" },
    { id: 5, name: "S" },
    { id: 6, name: "S" },
  ];

  useEffect(() => {
    const promise = getHabits(createHeader(token));
    promise
      .then((res) => {
        setHabits(res.data);
        console.log(token);
        console.log(res.data);
      })
      .catch(<ThreeDots />);
  }, [reload]);

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    console.log(form);
  }

  function newHabit(e) {
    e.preventDefault();
    setCreating(true);
    const body = {
      ...form,
      days: daysId,
    };

    const promise = createHabit(body, createHeader(token));
    promise.then((res) => {
      console.log(res.data, habits);
      setClicked(false);
      setCreating(false);
      setReload(!reload);
    });
  }

  function delHabit(habitId) {
    if (window.confirm("Tem certeza que quer excluir esse hábito?")) {
      const body = {
        data: { id: habitId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const promise = deleteHabit(body, habitId);
      promise.then(() => {
        setReload(!reload);
      });
    } else {
      return;
    }
  }

  return (
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
              <form onSubmit={newHabit}>
                <HabitInput
                  name="name"
                  onChange={handleForm}
                  value={form.name}
                  placeholder="nome do hábito"
                ></HabitInput>
                <OptionsGroup>
                  {arrDays.map((day) => (
                    <Days
                      weekday={day.name}
                      dayId={day.id}
                      daysId={daysId}
                      setDaysId={setDaysId}
                    />
                  ))}
                </OptionsGroup>
                <ButtonGroup>
                  <CancelButton
                    onClick={() => {
                      setClicked(false);
                    }}
                  >
                    Cancelar
                  </CancelButton>
                  {creating ? (
                    <SaveButton type="submit" disabled>
                      <ThreeDots color="white" height="50" width="50" />
                    </SaveButton>
                  ) : (
                    <SaveButton type="submit">Salvar</SaveButton>
                  )}
                </ButtonGroup>
              </form>
            </HabitAdd>
          ) : (
            <></>
          )}
          {habits.length === 0 ? (
            <UserHabit>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </UserHabit>
          ) : (
            habits.map((value) => (
              <>
                <HabitDiv>
                  <UserHabit>{value.name}</UserHabit>
                  <ion-icon
                    onClick={() => {
                      delHabit(value.id);
                    }}
                    name="trash-outline"
                  ></ion-icon>
                  <OptionsGroup>
                    {arrDays.map((day) =>
                      Number(day.id) === Number(value.days) ? (
                        <DayOptions inputColor="white" bgColor="#cfcfcf">
                          {day.name}
                        </DayOptions>
                      ) : (
                        <DayOptions inputColor="#cfcfcf" bgColor="white">
                          {day.name}
                        </DayOptions>
                      )
                    )}
                  </OptionsGroup>
                </HabitDiv>
              </>
            ))
          )}
        </HabitsGroup>
      </Page>
      <Footer checked={checkedHabits.length} today={todayHabits.length} />
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
  font-size: 25px;
  font-weight: 600;
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
  margin-bottom: 10px;
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
  margin-top: 30px;
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

const DayOptions = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  color: ${(props) => props.inputColor};
  border: solid 1px #d4d4d4;
  border-radius: 5px;
  margin-right: 5px;
  background-color: ${(props) => props.bgColor}; ;
`;

const OptionsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const HabitInput = styled.input`
  width: 303px;
  height: 45px;
  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-bottom: 10px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #666666;

  ::placeholder {
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #dbdbdb;
  }
`;

const HabitDiv = styled.div`
  width: 340px;
  height: 91px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  background-color: #ffffff;
  margin: 10px;
  border-radius: 5px;
  position: relative;

  ion-icon {
    position: absolute;
    right: 15px;
  }
`;

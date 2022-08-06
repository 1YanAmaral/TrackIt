import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import { buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

export default function Footer({ checked, today }) {
  //const percentage = 66;

  return (
    <>
      <FooterStyle>
        <Link to="/habitos">Hábitos</Link>
        <div style={{ width: 91, height: 91, marginBottom: 50 }}>
          <Link to="/hoje">
            <CircularProgressbar
              value={(checked / today) * 100}
              text={"Hoje"}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#52B6FF",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
              })}
            />
          </Link>
        </div>
        <Link to="/historico"> Histórico </Link>
      </FooterStyle>
    </>
  );
}

const FooterStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;
  left: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  text-align: center;
  color: #52b6ff;
`;

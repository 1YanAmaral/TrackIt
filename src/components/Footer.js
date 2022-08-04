import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import { buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function Footer() {
  const percentage = 66;

  return (
    <>
      <FooterStyle>
        Hábitos
        <div style={{ width: 91, height: 91, marginBottom: 50 }}>
          <CircularProgressbar
            value={percentage}
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
        </div>
        Histórico
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

import styled from "styled-components";
import { useContext } from "react";
import UserContext from "./context/UserContext";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <HeaderStyle>
      TrackIt
      <img src={user.image} alt="ProfilePic" />
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  padding: 20px;
  top: 0;
  left: 0;
  z-index: 1;
  height: 70px;
  width: 100vw;
  font-family: "Playball", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 38.982px;
  line-height: 49px;
  color: #ffffff;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }
`;

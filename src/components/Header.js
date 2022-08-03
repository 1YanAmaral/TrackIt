import styled from "styled-components";

export default function Header() {
  return (
    <HeaderStyle>
      TrackIt
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/481px-Cat03.jpg"
        alt="ProfilePic"
      />
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

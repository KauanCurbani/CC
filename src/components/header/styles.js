import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 5em;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 999;
  background: #f4f5f9;
  nav {
    display: flex;
    justify-content: center;
    align-items: center;

    #menuIcon {
      font-size: 30px;
      transition: all 0.3s ease;
      color: #e00203;

      &:hover {
        color: #a81010;
      }
    }
  }
`;

export const Menu = styled.div`
  z-index: 998;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: 0;
  background: #fff;
  transition: all 0.5s ease;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 25px 48px -3px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);

  a {
    padding: 10px 30px;
    color: #000;
    text-decoration: none;
    transition: all 0.3s ease;
    height: 100%;
    width: 100%;
    border: 5px solid transparent;

    &:hover {
      color: #e00203;
      background-color: #f5f5f5;
      border-right: 5px solid #e00203;
      border-left: 5px solid #e00203;
    }
  }

  &.is-active {
    transform: translateX(0%);
  }
`;

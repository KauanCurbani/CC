import styled from "styled-components";
import imgBordado from "../../assets/img/SegalasMock.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(221, 221, 221, 1) 17%,
    rgba(243, 244, 249, 1) 100%
  );
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5em;

  .textArea {
    font-size: 25px;
    position: absolute;
    bottom: 82%;
  }

  .containerCard {
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 1200px;
    height: 500px;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: -8px 18px 24px 3px rgba(0, 0, 0, 0.1);
    z-index: 1;

    .textCard {
      width: 14%;
      border-bottom: 1px solid #e00203;
      display: flex;
      flex-direction: column;
    }

    h1 {
      font-weight: 600;
      font-size: 23px;
      margin-bottom: 2px;
      overflow: hidden;
      white-space: nowrap;
    }

    span {
      opacity: 0.5;
      font-size: 15px;
      overflow: hidden;
      white-space: nowrap;
      margin-bottom: 10px;
    }

    .infoCard {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      width: 100%;
      height: 100%;
      
      .card {
        background-color: #fff;
        cursor: pointer;
        box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 50px;
        width: 500px;
        height: 200px;
        color: #e00203;
        flex-direction: column;
        font-size: 95px;
        border-radius: 10px;
        transition: 0.5s ease;
        position: relative;

        &::after {
          position: absolute;
          left: 0%;
          content: "";
          width: 2px;
          height: 80px;
          background-color: #e00203;
        }

        &::before {
          position: absolute;
          right: 0%;
          content: "";
          width: 2px;
          height: 80px;
          background-color: #e00203;
        }

        &:hover {
          box-shadow: 0px 10px 33px -3px rgba(0, 0, 0, 0.2);
          transform: translateY(-30px);
        }

        #icon {
          margin: 10px 0 10px 0;
          border-bottom: 1px solid #e00203;
        }

        #span1 {
          font-size: 20px;
          opacity: 1;
          color: #000;
        }
      }
    }
  }
`;

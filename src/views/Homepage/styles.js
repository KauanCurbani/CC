import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #f4f5f9 50%, #fff) 40%;
  display: flex;
  justify-content: center;
  padding: 0 5em;

  svg {
    position: absolute;
    bottom: 0;
    z-index: 0;
  }
`;

export const Left = styled.div`
  z-index: 5;
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;

  h1 {
    color: #000;
    font-weight: bold;
    font-size: 4em;
  }
  h2 {
    color: #000;
    letter-spacing: 1px;
    font-weight: 500;

    span {
      color: #e00203;
      font-weight: 700;
    }
  }
`;
export const Right = styled.div`
  z-index: 5;
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    bottom: 40px;
    left: 50%;
    height: 10px;
    width: 50%;
    border-radius: 50%;
    background-color: #000;
    filter: blur(0.8em);
    transform: translate(-31%, -50%);
    animation: floatOpacity 2s ease-out infinite alternate;

    @keyframes floatOpacity {
      from {
        opacity: 0.6;
      }
      to {
        opacity: 0.3;
      }
    }
  }
  img {
    width: 80%;
    position: relative;
    animation: float 2s ease-out infinite alternate;

    @keyframes float {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(-3%);
      }
    }
  }
`;

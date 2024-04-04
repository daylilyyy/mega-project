import styled from "styled-components";

//MegaMain
export const Container = styled.div`
  width: 1000px;
  margin: 30px auto;

  .logo {
    text-align: center;
    margin-bottom: 60px;

    img {
      width: 500px;
    }
  }
`;

//MegaSearch
export const MegaSearchForm = styled.form`
  text-align: center;
  margin-bottom: 20px;

  input {
    width: 400px;
    height: 40px;
    box-sizing: border-box;
    border: none;
    border-bottom: 3px solid #503396;
    background: #202020;
    outline: none;
    padding: 0 20px;
    font-size: 16px;
    margin-right: 5px;
    color: #503396;
    font-weight: 900;
    

    &::placeholder {
      color: #e2e2e2;
    }
  }
  button {
    background: #e2e2e2;
    color: #503396;
    width: 40px;
    height: 40px;
    border: none;
    vertical-align: top;
    font-weight: bold;
    font-size: 30px;
    line-height: 0.6;
    border-radius: 5px;
  }
`;

//MegaList
export const MegaListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

//MegaItem
export const MegaItemBox = styled.article`
  width: 220px;
  margin-right: 10px;
  margin-bottom: 50px;
  position: relative;
  box-sizing: border-box;
  box-shadow: 3px 3px 10px #111111;
  padding: 5px;
  &:hover .poster {
    opacity: 1;
    -webkit-animation: flash 1.5s;
    animation: flash 1.5s;
  }
  @-webkit-keyframes flash {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes flash {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }

  &:nth-child(5) {
    margin-right: 0;
  }

  &:nth-child(10) {
    margin-right: 0;
  }

  strong {
    position: absolute;
    z-index: 2;
    top: 5px;
    left: 5px;
    background: #503396;
    color: #e2e2e2;
    width: 35px;
    height: 35px;
    font-size: 25px;
    line-height: 1.2;
    display: block;
    text-align: center;
  }
  .poster {
    width: 100%;
    height: 300px;
  }

  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #e2e2e2;

    img {
      width: 15px;
      height: 15px;
      margin-right: 5px;
    }
  }

  .info {
    margin: 0 0 10px 0;
    width: 100%;
    display: flex;
    position: relative;
    justify-content: space-between;

    span {
      font-size: 13px;
      color: #e2e2e2;

      &:first-child::after {
        content: "";
        width: 1px;
        height: 10px;
        background: #999;
        position: absolute;
        top: 50%;
        left: 42%;
        transform: translateY(-50%);
      }
    }
  }
  .btn {
    margin: 5px 0;
    display: flex;
    justify-content: space-between;

    .btn2 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32%;
      height: 30px;
      font-size: 12px;
      font-weight: 500;
      color: #fff;
      border: 1px solid #503396;
      border-radius: 5px;
      position: relative;
      overflow: hidden !important;
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      background: transparent !important;

      i {
        display: flex;
        vertical-align: middle;
        font-size: 18px;
        margin-right: 5px;
      }

      span {
        font-size: 10px;
      }
    }

    .btn2:hover {
      border: 1px solid #e2e2e2;
      color: #e2e2e2 !important;
    }
    .btn2::before {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      background: #503396;
      position: absolute;
      left: 0%;
      opacity: 1;
      top: 0;
      z-index: -12;
      -webkit-transition: all 0.65s cubic-bezier(0.77, 0, 0.175, 1);
      -moz-transition: all 0.65s cubic-bezier(0.77, 0, 0.175, 1);
      -o-transition: all 0.65s cubic-bezier(0.77, 0, 0.175, 1);
      transition: all 0.65s cubic-bezier(0.77, 0, 0.175, 1);
    }

    .btn2::after {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      background: #e2e2e2;
      position: absolute;
      left: 0%;
      opacity: 1;
      top: 0;
      z-index: -15;
      -webkit-transition: all 0.65s cubic-bezier(0.77, 0, 0.175, 1);
      -moz-transition: all 0.65s cubic-bezier(0.77, 0, 0.175, 1);
      -o-transition: all 0.65s cubic-bezier(0.77, 0, 0.175, 1);
      transition: all 0.65s cubic-bezier(0.77, 0, 0.175, 1);
    }
    .btn2:hover::before,
    .btn2:hover::before {
      opacity: 1;
      -webkit-transform: translateX(100%);
      -moz-transform: translateX(100%);
      -ms-transform: translateX(100%);
      transform: translateX(100%);
    }
    .btn2:hover::after,
    .btn2:hover::after {
      opacity: 1;
      -webkit-transform: translateX(-100%);
      -moz-transform: translateX(-100%);
      -ms-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }
`;

//MeGaMenu
export const MeGaMenuBox = styled.article`
  p {
    text-align: center;
    margin-bottom: 30px;

    button {
      width: 150px;
      height: 40px;
      margin-left: 20px;
      background: #e2e2e2;
      color: #503396;
      border: 1px solid #503396;
      border-radius: 5px;
      cursor: pointer;
      font-size: 22px;
      font-weight: bold;
      vertical-align: middle;
      align-items: center;

      &:hover {
        border: 1px solid #e2e2e2;
        background: #503396;
        color: #e2e2e2;
      }

      i {
        height: 100%;
        vertical-align: middle;
        font-size: 25px;
        margin-right: 10px;
      }
    }
  }
`;

//MegaPopup
export const MegaPopupBox = styled.div`
  .bg {
    z-index: 99;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #000;
    opacity: 0.7;
  }

  .popup {
    z-index: 100;
    position: fixed;
    width: 900px;
    left: 50%;
    top: 50%;
    background-color: #202020;
    transform: translate(-50%, -50%);
    padding: 20px;
    box-sizing: border-box;

    h2 {
      font-size: 40px;
      font-weight: bold;
      color: #503396;
      display: flex;
      vertical-align: middle;
      align-items: center;

      i {
        font-size: 50px;
        display: flex;
        margin-right: 20px;
      }
    }

    .close_btn {
      position: absolute;
      top: 10px;
      right: 15px;
      font-size: 40px;
      display: block;
      color: #e2e2e2;

      &:hover {
        color: #503396;
      }
    }

    .content {
      width: 100%;
      display: flex;
      margin-top: 20px;

      .img_box {
        width: 40%;
        margin-right: 20px;
        img {
          width: 100%;
        }
      }

      .txt_box {
        width: 60%;

        h3 {
          font-size: 30px;
          font-weight: 700;
          color: #e2e2e2;
          position: relative;

          img {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 30px;
            height: 30px;
            margin-left: 20px;
          }
        }
        p {
          display: flex;

          strong {
            font-size: 18px;
            display: block;
            color: #e2e2e2;

            &:nth-child(1) {
              margin-right: 25px;
            }
            &:nth-child(2) {
              margin-right: 25px;
            }
          }
        }
        .story {
          height: 370px;
          overflow: auto;
          white-space: pre-line;

          span {
            font-size: 20px;
            color: #e2e2e2;
          }
        }
      }
    }
  }
`;

export const Paging = styled.ul`
  display: flex;
  justify-content: center;

  li {
    height: 30px;
    margin-right: 30px;

    button {
      height: 30px;
      width: 30px;
      border: none;
      border-radius: 5px;
      color: #e2e2e2;
      background-color: #503396;
    }

    :hover {
      cursor: pointer;
      color: #503396;
      background-color: #e2e2e2;
    }
  }
`;

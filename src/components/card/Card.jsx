import styled from "styled-components";

const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 80%;
  background: #fff;
  border-radius: 5px;
  border-left: ${(props) =>
    props.featured ? "5px solid hsl(180, 8%, 52%)" : "none"};
  min-height: 100px;

  & hr {
    width: 0;
  }

  @media screen and (max-width: 576px) {
    width: 90%;
    flex-direction: column;
    margin-left: 0;
    align-items: flex-start;

    & hr {
      border-color: #7b8e8e;
      opacity: 0.5;
      border-width: 1.5px;
      width: 100%;
      text-align: left;
    }
  }
`;

const Data = styled.p`
  font-family: Spartan;
  font-variation-settings: "wght" ${(props) => props.wght};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin: 10px 0;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  @media screen and (max-width: 576px) {
    position: absolute;
    top: -25px;
    left: 15px;
  }
  @media screen and (max-width: 2000px) and (min-width: 576px) {
    align-self: center;
    margin-left: 15px;
  }
`;

const StyledButton = styled.button`
  width: max-content;
  background: hsl(180, 31%, 95%);
  color: #7b8e8e;
  font-family: Spartan;
  font-variation-settings: "wght" 700;
  font-size: 12px;
  border: none;
  margin-right: 16px;
  margin-bottom: 16px;
  padding: 2%;
  border-radius: 5px;
  &::focus {
    outline: none;
  }
`;

export default Card;
export { Data, Logo, StyledButton };

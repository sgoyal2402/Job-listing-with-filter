import styled from "styled-components";

const Card = styled.div`
  box-shadow: 0 10px 10px 0 hsl(180, 31%, 85%);
  box-sizing: border-box;
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

  margin-top: 50px;

  @media screen and (max-width: 576px) {
    width: 90%;
    flex-direction: column;
    margin-left: 0;
    align-items: flex-start;
    margin-top: 75px;

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
  box-sizing: border-box;
  color: #7b8e8e;
  text-align: center;
  font-family: Spartan;
  font-variation-settings: "wght" 700;
  font-size: 12px;
  border: none;
  margin-right: 16px;
  padding: 7px 14px;
  border-radius: 5px;
  &::focus {
    outline: none;
  }
`;

const Tag = styled.span`
  color: #fff;
  margin-left: 10px;
  font-size: 10px;
  border-radius: 13px;
  background: ${(props) =>
    props.featured ? "#2c3a3a" : props.new ? "#7b8e8e" : "none"};
  padding: 2% 3%;
`;

const FilterTab = styled.div`
  box-shadow: 0 10px 10px 0 hsl(180, 31%, 85%);
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 13px;
  position: relative;
  width: 80%;
  height: 70px;
  top: -35px;
  margin-bottom: -35px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 576px) {
    width: 90%;
    height: 100px;
    top: -50px;
    margin-bottom: -60px;
    flex-wrap: wrap;
  }
`;

export default Card;
export { Data, Logo, StyledButton, Tag, FilterTab };

import styled from "styled-components/macro";
import { media } from "../../../styles/global-style";
import {
  neutralAccent,
  neutralMain,
  neutralSecond,
  primaryAccent,
  primaryMain,
  primarySecond,
} from "../../../styles/style-guide";

export const Section = styled.section`
  min-height: 100vh;
  background-color: ${primaryMain};
  display: grid;
  place-items: center;
  color: ${neutralMain};
`;

export const Container = styled.div`
  background-color: ${primarySecond};
  width: 325px;
  border-radius: 8px;
  height: 780px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  overflow: hidden;

  ${media.desktop} {
    height: 446px;
    min-width: 1110px;
    display: flex;
    flex-direction: row;
  }
`;

export const Pane = styled.div`
  text-align: center;

  &:first-of-type {
    padding: 24px;
  }

  ${media.desktop} {
    text-align: left;
    &:first-of-type {
      padding: 25px;
      width: 982px;
    }
    &:last-of-type {
      width: 972px;
    }
  }
`;

export const Picture = styled.div`
  background-image: url("/images/image-header-mobile.jpg");
  filter: brightness(33%) sepia(100%) hue-rotate(-120deg) saturate(580%)
    contrast(0.8);
  height: 239px;
  background-size: cover;

  ${media.desktop} {
    background-image: url("/images/image-header-desktop.jpg");
    height: 100%;
  }
`;

export const Title = styled.h3`
  font-size: 28px;
  font-family: "Inter", sans-serif;
  margin: 16px auto;

  & > span {
    color: ${primaryAccent};
  }

  ${media.desktop} {
    padding-left: 46px;
    padding-top: 32px;
    padding-right: 20px;
    font-size: 36px;
    line-height: 43px;
  }
`;

export const Description = styled.p`
  color: ${neutralSecond};
  font-family: "Inter";
  margin: 18px 10px;
  font-size: 15px;
  line-height: 24px;

  ${media.desktop} {
    margin-right: 0;
    margin-left: 0;
    padding-left: 46px;
    padding-top: 8px;
    padding-right: 80px;
  }
`;

export const Group = styled.div`
  padding-top: 25px;
  ${media.desktop} {
    display: flex;
    padding-left: 46px;
    padding-top: 57px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 22px;
  width: 80px;

  ${media.desktop} {
    align-items: flex-start;
    margin-right: 64px;
    margin-left: 0px;
  }
`;

export const Stat = styled.p`
  font-weight: bold;
  font-family: "Inter";
  font-size: 24px;
  margin: 0;
`;

export const Meta = styled.p`
  color: ${neutralAccent};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 8.5px 0px;
  font-family: "Inter";
  font-size: 13px;

  ${media.desktop} {
    font-family: "Lexend Deca";
    align-items: flex-start;
    margin-right: 64px;
  }
`;

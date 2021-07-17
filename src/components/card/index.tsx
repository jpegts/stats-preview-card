import React from "react";
import { ICardComposition } from "../../interfaces/ICard";
import {
  Container,
  Description,
  Group,
  Item,
  Meta,
  Pane,
  Picture,
  Section,
  Stat,
  Title,
} from "./styles/Card";

const Card: React.FC & ICardComposition = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Card.Section = function CardSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};

Card.Pane = function CardPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Card.Picture = function CardPicture({ children, ...restProps }) {
  return <Picture {...restProps}>{children}</Picture>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.Description = function CardDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Card.Group = function CardItem({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Item = function CardItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Card.Stat = function CardStat({ children, ...restProps }) {
  return <Stat {...restProps}>{children}</Stat>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

export default Card;

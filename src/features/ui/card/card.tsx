import { RootChildren } from "../../../types/shared";
import styled from "./card.module.css";

type CardProps = {
  additionalClass?: string;
};

export const Card = ({
  children,
  additionalClass,
}: RootChildren & CardProps) => {
  return (
    <div className={`${styled["card"]} ${additionalClass}`}>{children}</div>
  );
};

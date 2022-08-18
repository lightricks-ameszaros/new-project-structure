import { ReactNode } from "react";
import "./MarketricksHeader.css";

type Props = {
  children?: ReactNode;
};
const MarketricksHeader = ({ children }: Props) => (
  <div className={"MarketricksHeader"}>{children}</div>
);

export default MarketricksHeader;

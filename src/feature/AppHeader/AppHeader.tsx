import Navigation from "./Navigation";
import AppSelector from "./SelectedApp";
import MarketricksHeader from "../../components/MarketricksHeader";

const AppHeader = () => (
  <MarketricksHeader>
    <AppSelector />
    <Navigation />
  </MarketricksHeader>
);

export default AppHeader;

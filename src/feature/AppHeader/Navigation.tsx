import { Menu } from "antd";
import { Link, useLocation, useParams } from "react-router-dom";

const MarketricksMainNav = () => {
  const location = useLocation();
  const { appId } = useParams();
  return (
    <nav style={{ display: "inline-block" }}>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link to={`/${appId}/apple-optimisation`}>Apple Optimisation</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/${appId}/facebook-optimisation`}>
            Facebook Optimisation
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/${appId}/history`}>History</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/${appId}/performance`}>Performance</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/${appId}/rules`}>Rules</Link>
        </Menu.Item>
      </Menu>
    </nav>
  );
};

export default MarketricksMainNav;

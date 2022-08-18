import { Menu, Dropdown, Space } from "antd";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { APPS, APPS_BY_ID } from "../../constants/app";

const AppSelector = () => {
  const params = useParams();
  const location = useLocation();
  const selectedApp = APPS_BY_ID[params.appId || APPS[0].id];
  const items = APPS.map(({ id, name, icon }) => ({
    key: `app-selector-key-${id}`,
    label: (
      <Link to={location.pathname.replace(params.appId || APPS[0].id, id)}>
        <img src={icon} alt={name} width="32" height="32" /> {name}
      </Link>
    )
  }));
  return (
    <Dropdown overlay={<Menu items={items} />}>
      <Space>
        <img
          src={selectedApp.icon}
          alt={selectedApp.name}
          width="32"
          height="32"
        />
        {selectedApp.name}
      </Space>
    </Dropdown>
  );
};

export default AppSelector;

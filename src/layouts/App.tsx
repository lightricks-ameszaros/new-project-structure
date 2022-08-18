import "./App.css";
import { ReactChildren } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import AppHeader from "../feature/AppHeader/AppHeader";

const { Header, Content } = Layout;

type Props = {
  children?: ReactChildren;
};

const App = ({ children }: Props) => {
  return (
    <Layout className="AppLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};
export default App;

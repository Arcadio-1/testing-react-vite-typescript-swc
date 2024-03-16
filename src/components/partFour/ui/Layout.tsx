import { Outlet } from "react-router";
import { Nav } from "./Nav";
import { AuthProvider } from "../context/AuthProvider";
import { BackBtn } from "../../ui/BackBtn";
import { Container } from "../../ui/Container";

const Layout = () => {
  return (
    <div>
      <BackBtn to={"/"} />
      <Container className="max-w-3xl">
        <AuthProvider>
          <Nav />
          <Outlet />
        </AuthProvider>
      </Container>
    </div>
  );
};

export default Layout;

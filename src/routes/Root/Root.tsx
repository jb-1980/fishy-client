import { Outlet } from "react-router-dom";
import "./styles.css";
import { Navbar } from "./components/Navbar";
import { FishyProvider } from "../../context/Context";

export const Root = () => {
  return (
    <FishyProvider>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </FishyProvider>
  );
};

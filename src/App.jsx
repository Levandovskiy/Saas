import SectionMenu from "./components/sectionMenu";
import Dashboard from "./components/dashboard";
import CalendarActivity from "./calendar";
import SalesChart from "./components/SalesChart";
import NewClients from "./NewClients";

import "./App.scss";

function App() {
  return (
    <>
      <div>
        <div className="layout">
          <SectionMenu />
          <Dashboard />
          <CalendarActivity />
        </div>
        <div className="layout-two">
          <SalesChart />
          <NewClients />
        </div>
      </div>
    </>
  );
}

export default App;

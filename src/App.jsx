import SectionMenu from "./components/sectionMenu";
import Dashboard from "./components/dashboard";
import CalendarActivity from "./calendar";
import SalesChart from "./components/SalesChart";

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
        <SalesChart />
      </div>
    </>
  );
}

export default App;

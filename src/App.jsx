import SectionMenu from "./components/sectionMenu";
import Dashboard from "./components/dashboard";
import CalendarActivity from "./calendar";
import SalesChart from "./components/SalesChart";

import "./App.scss";

function App() {
  return (
    <>
      <div className="layout">
        <SectionMenu />
        <Dashboard />
        <CalendarActivity />
        <SalesChart />
      </div>
    </>
  );
}

export default App;

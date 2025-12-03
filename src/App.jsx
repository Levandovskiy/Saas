import SectionMenu from "./components/sectionMenu";
import Dashboard from "./components/dashboard";
import CalendarActivity from "./calendar";

function App() {
  return (
    <>
      <div className="layout">
        <SectionMenu />
        <Dashboard />
        <CalendarActivity />
      </div>
    </>
  );
}

export default App;

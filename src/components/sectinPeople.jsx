import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  MessageSquare,
  ClipboardList,
  Users,
  Settings,
  Bell,
  ChevronDown,
} from "lucide-react";
import "./Sidebar.scss";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: <LayoutGrid size={18} /> },
    { name: "Messages", path: "/messages", icon: <MessageSquare size={18} /> },
    { name: "My Tasks", path: "/tasks", icon: <ClipboardList size={18} /> },
    { name: "Clients", path: "/clients", icon: <Users size={18} /> },
  ];

  const settingsItems = [
    { name: "Main Settings", path: "/settings", icon: <Settings size={18} /> },
    { name: "Notifications", path: "/notifications", icon: <Bell size={18} /> },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar__top">
        <p className="sidebar__title">Dashboard</p>

        <div className="sidebar__user">
          <img
            src="https://i.pravatar.cc/100?img=3"
            alt="user"
            className="sidebar__avatar"
          />
          <div className="sidebar__user-info">
            <span className="sidebar__name">Aaron Young</span>
            <ChevronDown size={16} className="sidebar__chevron" />
          </div>
        </div>

        <nav className="sidebar__menu">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "menu__item active" : "menu__item"
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="sidebar__bottom">
        <p className="sidebar__subtitle">Settings</p>
        <nav className="sidebar__menu">
          {settingsItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "menu__item active" : "menu__item"
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

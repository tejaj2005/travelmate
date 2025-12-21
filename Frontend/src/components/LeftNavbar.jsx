import React, { useState } from "react";
import {
  Home,
  Users,
  Bell,
  Search,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const LeftNavbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isGroupsOpen, setIsGroupsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  return (
    <aside
      className="
        fixed left-0 top-20
        h-[calc(100vh-5rem)]
        w-64
        px-6 py-8
        flex flex-col justify-between
        backdrop-blur-xl
        transition-colors duration-300
      "
      style={{
        backgroundColor: "var(--card-bg)",
        color: "var(--text)",
      }}
    >
      <div>
        {/* Profile */}
        <div className="flex items-center space-x-4 mb-10">
          <img
            src="https://i.pravatar.cc/100"
            alt="User"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-[#1C769A]/30"
          />
          <div>
            <p className="font-medium text-sm">Vera Cherry</p>
            <p className="text-xs opacity-70">Bremen, Germany</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-3 text-sm">
          <NavItem icon={Home} label="Home" active />
          {/* Groups */}
          <div>
            <div
              onClick={() => setIsGroupsOpen(!isGroupsOpen)}
              className={`group relative flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer overflow-hidden transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5`}
            >
              <div className="flex items-center space-x-3">
                <Users
                  size={18}
                  className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#1C769A]"
                />
                <span
                  className="transition-all duration-300 group-hover:translate-x-1"
                >
                  Groups
                </span>
              </div>

              <ChevronDown
                size={16}
                className={`transition-all duration-300
        ${isGroupsOpen ? "rotate-180 text-[#1C769A]" : "opacity-70"}
      `}
              />
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300bg-linear-to-r
        from-[#1C769A]/10
        to-transparent
        pointer-events-none
      "
              />
            </div>

            {isGroupsOpen && (
              <div className="ml-6 mt-2 space-y-1">
                <DropdownItem
                  label="Public Groups"
                  onClick={() => navigate("/groups/public")}
                />
                <DropdownItem
                  label="Private Groups"
                  onClick={() => navigate("/groups/private")}
                />
                <DropdownItem
                  label="Joined Groups"
                  onClick={() => navigate("/groups/joined")}
                />
                <DropdownItem
                  label="Create Group"
                  onClick={() => navigate("/groups/create")}
                />
              </div>
            )}
          </div>

          <NavItem icon={Bell} label="Notifications" />
          <NavItem icon={Search} label="Search" />
          <NavItem icon={User} label="Profile" />
          <NavItem icon={Settings} label="Settings" />
        </nav>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="
          flex items-center space-x-3
          text-sm
          opacity-70
          hover:opacity-100
          transition-all duration-300
          hover:translate-x-1
          group
        "
      >
        <LogOut
          size={18}
          className="transition-colors duration-300 group-hover:text-[#0b455c]"
        />
        <span className="group-hover:text-[#0b455c] transition-colors duration-300">
          Log Out
        </span>
      </button>
    </aside>
  );
};

export default LeftNavbar;

const NavItem = ({ icon: Icon, label, active }) => {
  return (
    <div
      className={`
        group relative
        flex items-center space-x-3
        px-4 py-2 rounded-lg cursor-pointer
        overflow-hidden
        transition-all duration-300
        ${
          active
            ? "text-[#1C769A] bg-[#1C769A]/10"
            : "hover:bg-black/5 dark:hover:bg-white/5"
        }
      `}
    >
      {/* Active Indicator */}
      {active && (
        <span className="absolute left-0 top-0 h-full w-[3px] bg-[#1C769A] rounded-r-md" />
      )}

      {/* Icon */}
      <Icon
        size={18}
        className="
          transition-all duration-300
          group-hover:translate-x-1
          group-hover:text-[#1C769A]
        "
      />

      {/* Text */}
      <span
        className="
          transition-all duration-300
          group-hover:translate-x-1
        "
      >
        {label}
      </span>

      {/* Hover Glow */}
      <span
        className="
          absolute inset-0
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          bg-linear-to-r
          from-[#1C769A]/10
          to-transparent
          pointer-events-none
        "
      />
    </div>
  );
};

const DropdownItem = ({ label, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        group relative
        flex items-center
        px-4 py-2 rounded-lg cursor-pointer
        overflow-hidden
        transition-all duration-300
        ${
          active
            ? "text-[#1C769A] bg-[#1C769A]/10"
            : "hover:bg-black/5 dark:hover:bg-white/5"
        }
      `}
    >
      {/* Active Indicator */}
      {active && (
        <span className="absolute left-0 top-0 h-full w-[3px] bg-[#1C769A] rounded-r-md" />
      )}

      {/* Text */}
      <span
        className="
          transition-all duration-300
          group-hover:translate-x-1
        "
      >
        {label}
      </span>

      {/* Hover Glow */}
      <span
        className="
          absolute inset-0
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          bg-linear-to-r
          from-[#1C769A]/10
          to-transparent
          pointer-events-none
        "
      />
    </div>
  );
};

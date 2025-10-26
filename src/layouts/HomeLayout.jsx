import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Layout.scss";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Home from "../pages/Home";
import User_check from "../assets/User_check.svg";
import Calendar from "../assets/Calendar.svg";
import Settings from "../assets/Settings.svg";
import User_plus from "../assets/User_plus.svg";
import Users from "../assets/Users.svg";
import User from "../assets/User.svg";
import { useState } from "react";
import DailyReportService from "../services/DailyReportService";

export default function HomeLayout() {
  const [SideBarVisibility, SetSideBarVisibility] = useState(false);

  const Profile = { UserName: "Rakesh", Role: "Admin" };

  const SideBarItems = {
    "Daily report": [<Home />, User_check],
    "Add Worker": [<Home />, User_plus],
    "Workers List": [<Home />, Users],
    TimeSheet: [<Home />, Calendar],
    Account: [<Home />, User],
    Settings: [<Home />, Settings],
  };

  const ToggleSideBar = () => {
    console.log("Event clicked", SideBarVisibility);
    SetSideBarVisibility(!SideBarVisibility);
  };

  return (
    <div className="outer-container">
      {/* Header */}
      <div className="header">
        <Header
          MenuClicked={SideBarVisibility}
          ToggleSideBar={ToggleSideBar}
          className="Header"
        />
      </div>

      {/* Content */}
      <div className="main-content">
        <SideBar
          SideBarVisible={SideBarVisibility}
          items={SideBarItems}
          Profile={Profile}
          className="sideBar"
        ></SideBar>
        <DailyReportService>
          <Outlet className="outlet" />
        </DailyReportService>
      </div>

      {/* Footer */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

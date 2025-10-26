import "../styles/Layout.scss";
import User_Profile from "../assets/User_Profile.svg";

export default function sideBar({ SideBarVisible, items, Profile }) {
  return (
    <div
      className={
        "sideBar " + (SideBarVisible ? "sideBarclosed" : "sideBaropen")
      }
    >
      <div className="sideBarItem">
        <img className="userProfileImg" src={User_Profile} alt="" />
        <p className="userName">{Profile.UserName}</p>
        <p className="userRole">{Profile.Role}</p>
      </div>
      {Object.keys(items).map((key) => (
        <div className="sideBarItemContainer" key={key}>
          <div className="iconContainer">
            <img
              className="sideBarImg"
              src={items[key][1]}
              alt="not available"
            />
          </div>
          <p className="sideBarItem" key={key}>
            {key}
          </p>
        </div>
      ))}
    </div>
  );
}

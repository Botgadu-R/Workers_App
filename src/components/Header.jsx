import "../styles/Header.scss";
import { X, Menu, UserCircle, InfoIcon } from "lucide-react";

export default function Header({ MenuClicked, ToggleSideBar }) {
  return (
    <div className="container">
      <div className="menu">
        <X
          className={"menuIcon " + (MenuClicked ? "iconVisible" : "iconHidden")}
          onClick={ToggleSideBar}
        />
        <Menu
          className={
            "menuIcon " + (!MenuClicked ? "iconVisible" : "iconHidden")
          }
          onClick={ToggleSideBar}
        />
      </div>
      <div className="brand">Brand</div>
      <div className="options">
        <InfoIcon />
        <UserCircle />
      </div>
    </div>
  );
}

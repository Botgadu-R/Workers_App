import { useEffect, useState } from "react";
import "../styles/ToggleSwitch.scss";

export default function ToggleSwitch({ IsTrue }) {
  const [Switch, setSwitch] = useState("left");

  useEffect(() => {
    if (IsTrue) {
      setSwitch("right");
    } else {
      setSwitch("left");
    }
    console.log("Rendered");
  }, [IsTrue]);

  return (
    <div className="switchContainer">
      <div className={"background " + "background" + Switch}>
        <div className={"circle " + Switch}></div>
      </div>
    </div>
  );
}

import { useContext, useEffect, useState } from "react";
import { DContext } from "../Data/DContext";

export default function CheckPage() {
  const [WorkersData, setWorkersData] = useState(null);
  const data = useContext(DContext);

  const LoadData = () => {
    setWorkersData(data);
    console.log("Data", data);
    console.log("Data reciever", WorkersData);
  };

  useEffect(LoadData, [WorkersData, data]);

  if (!WorkersData) return <div>Loading</div>;

  return <div>{WorkersData.WorkersList["Suresh"].Name}</div>;
}

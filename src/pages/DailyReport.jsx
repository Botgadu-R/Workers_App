import "../styles/DailyReport.scss";
import { UseDailyReport } from "../services/DailyReportService";
import { useState } from "react";

export default function DailyReport() {
  const { Workers } = UseDailyReport();
  const [WorkersData, setWorkersData] = useState(Workers);

  console.log("Loaded", Workers);

  const ToggleWorkerAttendance = (workerKey) => {
    setWorkersData((prev) => {
      const worker = prev.WorkersList[workerKey];

      const isCurrentlyPresent = worker.IsPresent;
      const updatedWorker = { ...worker, IsPresent: !isCurrentlyPresent };
      const newWorkersList = {
        ...prev.WorkersList,

        [workerKey]: updatedWorker,
      };
      const newTodaysCount = isCurrentlyPresent
        ? prev.TodaysCount - 1
        : prev.TodaysCount + 1;
      return {
        ...prev,
        TodaysCount: newTodaysCount,
        WorkersList: newWorkersList,
      };
    });
  };

  function TodaysCount() {
    let count = 0;
    Object.values(WorkersData.WorkersList).forEach((value) => {
      if (value.IsPresent) count = count + 1;
    });

    return count;
  }

  // useEffect(() => {
  //   setWorkersData(Workers);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  if (!WorkersData) return <p>Loading ..!</p>;

  return (
    <div className="WorkersPage">
      <div className="containerGrid">
        <div className="titleContainer">
          <h2>Workers Daily Report</h2>
          <p>Workers Attendance today : {TodaysCount()}</p>
        </div>

        <div className="listContainer">
          <div className="headingsContainer">
            <span>Name</span>
            <span>Wage</span>
            <span>Presence</span>
          </div>

          <div className="workersList">
            {Object.entries(WorkersData.WorkersList).map(
              ([workerKey, Worker]) => {
                return (
                  <div
                    key={workerKey}
                    className={"Worker " + "Worker" + workerKey}
                  >
                    <div className="Name">{Worker.Name}</div>
                    <div className="Wage">{Worker.Wage}</div>
                    <div className="IsPresent">
                      <input
                        type="checkbox"
                        checked={Worker.IsPresent}
                        onChange={() => ToggleWorkerAttendance(workerKey)}
                      ></input>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

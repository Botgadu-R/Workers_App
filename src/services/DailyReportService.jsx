import { createContext, useContext, useState } from "react";
import { data } from "../Data/WorkersData.js";

const context = createContext();

export default function DailyReportService({ children }) {
  const [Workers] = useState(data);

  return <context.Provider value={{ Workers }}>{children}</context.Provider>;
}

export function UseDailyReport() {
  return useContext(context);
}

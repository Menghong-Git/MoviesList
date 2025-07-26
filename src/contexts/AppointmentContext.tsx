/* eslint-disable react-refresh/only-export-components */
// context/ProductContext.tsx

import { createContext, useContext, useState, type ReactNode } from "react";

interface AppointmentContextType {
  appointment: Hospital.Appointment[];
  addAppointment: (appointment: Hospital.Appointment) => void;
  updateAppointment: (id: string, appointment: Partial<Hospital.Appointment>) => void;
  deleteAppointment: (id: string) => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export const AppointmentProvider = ({ children }: { children: ReactNode }) => {
  const [appointment, setAppointment] = useState<Hospital.Appointment[]>([]);

  const addAppointment = (appointment: Hospital.Appointment) => {
    setAppointment((prev) => [...prev, appointment]);
  };

  const updateAppointment = (id: string, newData: Partial<Hospital.Appointment>) => {
    setAppointment((prev) =>
      prev.map((a) => (a.id === id ? { ...a, ...newData } : a))
    );
  };

  const deleteAppointment = (id: string) => {
    setAppointment((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <AppointmentContext.Provider
      value={{ appointment, addAppointment, updateAppointment, deleteAppointment }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointmentContext = () => {
  const context = useContext(AppointmentContext);
  if (!context)
    throw new Error("useAppointmentContext must be used within AppointmentProvider");
  return context;
};

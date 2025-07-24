/* eslint-disable react-refresh/only-export-components */
// context/ProductContext.tsx

import { createContext, useContext, useState, type ReactNode } from "react";

<<<<<<< HEAD
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
=======
interface HospitalContextType {
  patient: Hospital.Patient[];
  addPatient: (patient: Hospital.Patient) => void;
  updatePatient: (id: string, patient: Partial<Hospital.Patient>) => void;
  deletePatient: (id: string) => void;
}

const HospitalContext = createContext<HospitalContextType | undefined>(undefined);

export const PatientProvider = ({ children }: { children: ReactNode }) => {
  const [patient, setPatient] = useState<Hospital.Patient[]>([]);

  const addPatient = (patient: Hospital.Patient) => {
    setPatient((prev) => [...prev, patient]);
  };

  const updatePatient = (id: string, newData: Partial<Hospital.Patient>) => {
    setPatient((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...newData } : p))
    );
  };

  const deletePatient = (id: string) => {
    setPatient((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <HospitalContext.Provider
      value={{ patient, addPatient, updatePatient, deletePatient }}
    >
      {children}
    </HospitalContext.Provider>
  );
};

export const useHospitalContext = () => {
  const context = useContext(HospitalContext);
  if (!context)
    throw new Error("useHospitalContext must be used within ProductProvider");
>>>>>>> main
  return context;
};

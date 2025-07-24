/* eslint-disable react-refresh/only-export-components */
// context/ProductContext.tsx

import { createContext, useContext, useState, type ReactNode } from "react";

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
    setPatient((prev) => prev.filter((p) => p.id!== id));
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
  return context;
};

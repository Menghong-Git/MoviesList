 /* eslint-disable react-refresh/only-export-components */
// context/ProductContext.tsx

import { createContext, useContext, useState, type ReactNode } from "react";

interface PatientContextType {
  patient: Hospital.Patient[];
  addPatient: (patient: Hospital.Patient) => void;
  updatePatient: (id: string, patient: Partial<Hospital.Patient>) => void;
  deletePatient: (id: string) => void;
}

const PatientContext = createContext<PatientContextType | undefined>(undefined);

export const PatientProvider = ({ children }: { children: ReactNode }) => {
  const [patient, setPatient] = useState<Hospital.Patient[]>([]);

  const addPatient = (patient: Hospital.Patient) => {
    setPatient((prev) => [...prev, patient]);
  };

  const updatePatient = (id: string, newData: Partial<Hospital.Patient>) => {
    setPatient((prev) =>
      prev.map((p) => (String(p.id) === String(id) ? { ...p, ...newData } : p))
    );
  };

  const deletePatient = (id: string) => {
    setPatient((prev) => prev.filter((p) => String(p.id) !== String(id)));
  };

  return (
    <PatientContext.Provider
      value={{ patient, addPatient, updatePatient, deletePatient }}
    >
      {children}
    </PatientContext.Provider>
  );
};

export const usePatientContext = () => {
  const context = useContext(PatientContext);
  if (!context)
    throw new Error("useHospitalContext must be used within PatientProvider");
  return context;
};

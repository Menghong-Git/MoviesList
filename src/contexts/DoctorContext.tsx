/* eslint-disable react-refresh/only-export-components */
// context/ProductContext.tsx

import { createContext, useContext, useState, type ReactNode } from "react";

interface DoctorContextType {
  doctor: Hospital.Doctor[];
  addDoctor: (patient: Hospital.Doctor) => void;
  updateDoctor: (id: string, doctor: Partial<Hospital.Doctor>) => void;
  deleteDoctor: (id: string) => void;
}

const DoctorContext = createContext<DoctorContextType | undefined>(undefined);

export const DoctorProvider = ({ children }: { children: ReactNode }) => {
  const [doctor, setDoctor] = useState<Hospital.Doctor[]>([]);

  const addDoctor = (doctor: Hospital.Doctor) => {
    setDoctor((prev) => [...prev, doctor]);
  };

  const updateDoctor = (id: string, newData: Partial<Hospital.Doctor>) => {
    setDoctor((prev) =>
      prev.map((d) => (d.id === id ? { ...d, ...newData } : d))
    );
  };

  const deleteDoctor = (id: string) => {
    setDoctor((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <DoctorContext.Provider
      value={{ doctor, addDoctor, updateDoctor, deleteDoctor }}
    >
      {children}
    </DoctorContext.Provider>
  );
};

export const useDoctorContext = () => {
  const context = useContext(DoctorContext);
  if (!context)
    throw new Error("useDoctorContext must be used within DoctorProvider");
  return context;
};

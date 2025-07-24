import { useState } from "react";
import PatientList from "@/components/patient-logic/PatientList";
import { PatientProvider } from "@/contexts/PatientContext";
import CreateOrEditPatientForm from "@/components/patient-logic/CreateOrEditPatientForm";

type EditState = {
  id: string;
  name: string;
  age: number;
} | null;

export function Patient() {
  const [editPatient, setEditPatient] = useState<EditState>(null);
  return (
    <PatientProvider>
      <div className="container mx-auto py-8 w-full">
        <h1 className="text-4xl font-bold mb-4 justify-center text-center">
          Patient Register
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <PatientList
            onEdit={(p) =>
              setEditPatient({
                id: String(p.id),
                name: p.name,
                age: p.age,
              })
            }
          />
          <CreateOrEditPatientForm
            editPatient={editPatient}
            onCancelEdit={() => setEditPatient(null)}
          />
        </div>
      </div>
    </PatientProvider>
  );
}

export default Patient;

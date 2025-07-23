import { useState } from "react";
import PatientList from "@/components/patient-logic/PatientList";
import { PatientProvider } from "@/contexts/PatientContext";
import CreateOrEditPatientForm from "@/components/patient-logic/CreateOrEditPatientForm";


type EditState = {
  id: string;
  name: string;
  age: number;
} | null;


const Patient = () => {
  const [editPatient, setEditPatient] = useState<EditState>(null);
  return (
    <PatientProvider>
      <div className="flex flex-col items-center py-8 w-full">
  <div className="w-full max-w-4xl px-4">
    <h1 className="text-2xl font-bold mb-6 text-center">
      Patient Management
    </h1>

    <div className="rounded-lg p-6 mb-6 ">
     <div className="flex justify-center">
     <CreateOrEditPatientForm
        editPatient={editPatient}
        onCancelEdit={() => setEditPatient(null)}
      />
     </div>
    </div>
    <div className="rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Patient List
      </h2>
      <div className="flex justify-center">
        <div className="w-full">
          <PatientList
            onEdit={(p) =>
              setEditPatient({
                id: String(p.id),
                name: p.name,
                age: p.age,
              })
            }
          />
        </div>
      </div>
    </div>
  </div>
</div>
    </PatientProvider>
  );
};

export default Patient;

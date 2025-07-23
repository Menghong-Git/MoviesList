
import CreateOrEditDoctorForm from "@/components/doctor-logic/CreateOrEditDoctorForm";
import DoctorList from "@/components/doctor-logic/DoctorList";
import { useState } from "react";
import { DoctorProvider } from "@/contexts/DoctorContext";



type EditState = {
  id: string;
  name: string;
  age: number;
  specialty: string;
  contact: string;
} | null;




export function Doctor() {
  const [editDoctor, setEditDoctor] = useState<EditState>(null);
  return (
    <DoctorProvider>
      <div className="container mx-auto py-8 w-full">
        <h1 className="text-4xl font-bold mb-4 justify-center text-center">
          Doctor Management
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <DoctorList
            onEdit={(p) =>
              setEditDoctor({
                id: String(p.id),
                name: p.name,
                age: p.age,
                specialty: p.specialty,
                contact: p.contact,
              })
            }
          />
          <CreateOrEditDoctorForm
            editDoctor={editDoctor}
            onCancelEdit={() => setEditDoctor(null)}
          />
        </div>
      </div>
    </DoctorProvider>
  );
};

export default Doctor;

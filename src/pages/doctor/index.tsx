import { useState } from "react";
import { DoctorProvider } from "@/contexts/DoctorContext";
import CreateOrEditDoctorForm from "@/components/doctor-logic/CreateOrEditDoctorForm";
import DoctorList from "@/components/doctor-logic/DoctorList";

type EditState = {
  id: string;
  name: string;
  age: number;
  specialty: string;
  contact: string;
} | null;

const Doctor = () => {
  const [editDoctor, setEditDoctor] = useState<EditState>(null);
  return (
    <DoctorProvider>
      <div className="flex flex-col items-center py-8 w-full">
        <div className="w-full max-w-4xl px-4">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Doctor Management
          </h1>

          <div className="rounded-lg p-6 mb-6 ">
            <div className="flex justify-center">
              <CreateOrEditDoctorForm
                editDoctor={editDoctor}
                onCancelEdit={() => setEditDoctor(null)}
              />
            </div>
          </div>
          <div className="rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Doctor List
            </h2>
            <div className="flex justify-center">
              <div className="w-full">
                <DoctorList
                  onEdit={(d) =>
                    setEditDoctor({
                      id: String(d.id),
                      name: d.name,
                      age: d.age,
                      specialty: d.specialty,
                      contact: d.contact,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DoctorProvider>
  );
};

export default Doctor;

import { useState } from "react";
import { AppointmentProvider } from "@/contexts/AppointmentContext";
import CreateOrEditAppointmentForm from "@/components/appointment-logic/CreateOrEditAppiontmentForm";
import AppointmentList from "@/components/appointment-logic/AppointmentList";


type EditState = {
  id: string;
  patientId: string;
  doctorId: string;
  date: Date;
  time: string; 
} | null;


const Appointment = () => {
  const [editAppointment, setEditAppointment] = useState<EditState>(null);
  return (
    <AppointmentProvider>
      <div className="flex flex-col items-center py-8 w-full">
  <div className="w-full max-w-4xl px-4">
    <h1 className="text-2xl font-bold mb-6 text-center">
      Appointment Management
    </h1>

    <div className="rounded-lg p-6 mb-6 ">
     <div className="flex justify-center">
     <CreateOrEditAppointmentForm
        editAppointment={editAppointment}
        onCancelEdit={() => setEditAppointment(null)}
      />
     </div>
    </div>
    <div className="rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Doctor List
      </h2>
      <div className="flex justify-center">
        <div className="w-full">
          <AppointmentList
            onEdit={(a) =>
              setEditAppointment({
                id: String(a.id),
                patientId: a.patientId,
                doctorId: a.doctorId,
                date: new Date(a.date),
                time: a.time,
              })
            }
          />
        </div>
      </div>
    </div>
  </div>
</div>
    </AppointmentProvider>
  );
};

export default Appointment;

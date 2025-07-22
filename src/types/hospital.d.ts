declare namespace Hospital {
  interface Patient {
    id: string;
    name: string;
    age: number;
  }

  interface Doctor {
  id: string;
  name: string;
  specialty: string;
  contact: string;
}
 interface Appointment {
  id: string;
  patientId: number;
  doctorId: string;
  date: string;
  time: string;
}
}
declare namespace Hospital {
  interface Patient {
    id: string;
    name: string;
    age: number;
  }

  interface Doctor {
    id: string;
    name: string;
    age: number;
    specialty: string;
    contact: string;
  }
  interface Appointment {
    id: string;
    patientId: string;
    doctorId: string;
    date: Date;
    time: string;
  }
}

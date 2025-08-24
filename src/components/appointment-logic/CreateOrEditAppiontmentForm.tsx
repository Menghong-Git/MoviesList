import { useEffect, useState } from "react";
import { useAppointmentContext } from "@/contexts/AppointmentContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type EditState = {
    id: string;
    patientId: string;
    doctorId: string;
    date: Date;
    time: string;
} | null;

interface CreateOrEditAppointmentFormProps {
    editAppointment?: EditState;
    onCancelEdit?: () => void;
}

const CreateOrEditAppointmentForm = ({
    editAppointment,
    onCancelEdit,
}: CreateOrEditAppointmentFormProps) => {
    const { addAppointment, updateAppointment } = useAppointmentContext();
    const [patientId, setPatientId] = useState(editAppointment ? editAppointment.patientId : "");
    const [doctorId, setDoctorId] = useState(editAppointment ? editAppointment.doctorId: "");
    const [date, setDate] = useState<Date | undefined>(editAppointment ? new Date(editAppointment.date) : undefined);
    const [time, setTime] = useState(editAppointment ? editAppointment.time : "");
    const [message, setMessage] = useState("");


    useEffect(() => {
        if (editAppointment) {
            setPatientId(editAppointment.patientId);
            setDoctorId(editAppointment.doctorId);
            setDate(editAppointment.date);
            setTime(editAppointment.time);
        } else {
            setPatientId("");
            setDoctorId("");
            setDate(undefined);
            setTime("");
        }
    }, [editAppointment, editAppointment?.id]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!patientId || !doctorId || !date || !time.trim()) {
            setMessage("Id date and time are required.");
            return;
        }
        if (editAppointment) { 
            updateAppointment( editAppointment.id, {
                patientId: patientId,
                doctorId: doctorId,
                date: date ? new Date(date) : undefined,
                time: time.trim(),
            } as Hospital.Appointment);
            setMessage("Appointment updated!");
            setTimeout(() => setMessage(""), 1500);
            if (onCancelEdit) onCancelEdit();
        } else {
            addAppointment({
                id: crypto.randomUUID(),
                patientId:patientId,
                doctorId: doctorId,
                date: new Date(date),
                time: time.trim(),
            } as Hospital.Appointment);
            setPatientId("");
            setDoctorId("");
            setDate(undefined);
            setTime("");
            setMessage("Doctor created!");
            setTimeout(() => setMessage(""), 3000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-m">
           <div className="grid grid-cols-4 gap-4">
           <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="patient-id">
                    Patient ID
                </label>
                <Input
                    id="patient-id"
                    value={patientId}
                    onChange={(e) => setPatientId(e.target.value)}
                     type="number"
                />
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="doctor-id">
                    Doctor ID
                </label>
                <Input
                    id="doctor-id"
                    value={doctorId}
                    onChange={(e) => setDoctorId(e.target.value)}
                    type="number"
                />
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="date">
                   Date
                </label>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                        variant="outline"
                        data-empty={!date}
                        className="data-[empty=true]:text-muted-foreground w-[200px] justify-start text-left font-normal"
                        >
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[250px] p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} />
                    </PopoverContent>
                </Popover>
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="time">
                    Time
                </label>
                <Input
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}  
                />
            </div>
           </div>
            <div>
                <Button
                    type="submit"
                    className="w-full mb-2"
                    disabled={ !patientId || !doctorId || !date || !time.trim() }
                >
                    {editAppointment ? "Update Doctor" : "Create Doctor"}
                </Button>
                {editAppointment && onCancelEdit && (
                    <Button
                        type="button"
                        variant="secondary"
                        className="w-full"
                        onClick={onCancelEdit}
                    >
                        Cancel
                    </Button>
                )}
            </div>
            {message && <div className="text-green-500 text-sm">{message}</div>}
        </form>
    );
};

export default CreateOrEditAppointmentForm;

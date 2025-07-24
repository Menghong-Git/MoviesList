import { useAppointmentContext } from "@/contexts/AppointmentContext";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Trash2Icon, UserPen } from 'lucide-react';
const AppointmentList = ({
  onEdit,
}: {
  onEdit: (appointment: { id: string; patientId: string; doctorId:string; date: Date; time:string }) => void;
}) => {
  const { appointment, deleteAppointment } = useAppointmentContext();
  return (
    <div className="mt-6 border rounded p-4 w-full">
   <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]  text-center">No.</TableHead> 
            <TableHead className="w-[150px] text-center">PatientID</TableHead> 
            <TableHead className="w-[150px] text-center">DoctorID</TableHead> 
            <TableHead className="w-[100px] text-center">Date</TableHead> 
            <TableHead className="w-[100px] text-center">Time</TableHead> 
            <TableHead className="w-[200px] text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointment.length === 0 ? (
            <TableRow>
              <TableCell colSpan={8} className="text-center">
                No appointment found.
              </TableCell>
            </TableRow>
          ) : (
              appointment.map((a, index) => (
              <TableRow key={a.id} className="space-x-4">
                <TableCell className="font-medium text-center">{index + 1}</TableCell>
                <TableCell className="text-center">{a.patientId}</TableCell>
                <TableCell className="text-center">{a.doctorId}</TableCell>
                <TableCell className="text-center">{a.date.toLocaleDateString()}</TableCell>
                <TableCell className="text-center">{a.time}</TableCell>
                <TableCell className="text-center">
                  <div className="gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => onEdit({ ...a, patientId: String(a.patientId) })}
                    type="button"
                    aria-label="Edit"
                  >
                   <UserPen className="w-4 h-4"/>
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => deleteAppointment(a.id)}
                    type="button"
                    aria-label="Delete"
                  >
                    <Trash2Icon className="w-4 h-4" />
                  </Button>
                  </div>
              </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppointmentList;

import { useDoctorContext } from "@/contexts/DoctorContext";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2Icon, UserPen } from "lucide-react";
const DoctorList = ({
  onEdit,
}: {
  onEdit: (doctor: {
    id: string;
    name: string;
    age: number;
    specialty: string;
    contact: string;
  }) => void;
}) => {
  const { doctor, deleteDoctor } = useDoctorContext();
  return (
    <div className="mt-6 border rounded p-4 w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]  text-center">No.</TableHead>
            <TableHead className="w-[150px] text-center">Name</TableHead>
            <TableHead className="w-[150px] text-center">Age</TableHead>
            <TableHead className="w-[100px] text-center">Specialty</TableHead>
            <TableHead className="w-[100px] text-center">Contact</TableHead>
            <TableHead className="w-[200px] text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {doctor.length === 0 ? (
            <TableRow>
              <TableCell colSpan={8} className="text-center">
                No doctor found.
              </TableCell>
            </TableRow>
          ) : (
            doctor.map((d, index) => (
              <TableRow key={d.id} className="space-x-4">
                <TableCell className="font-medium text-center">
                  {index + 1}
                </TableCell>
                <TableCell className="text-center">{d.name}</TableCell>
                <TableCell className="text-center">{d.age}</TableCell>
                <TableCell className="text-center">{d.specialty}</TableCell>
                <TableCell className="text-center">{d.contact}</TableCell>
                <TableCell className="text-center">
                  <div className="gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => onEdit(d)}
                      type="button"
                      aria-label="Edit"
                    >
                      <UserPen className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => deleteDoctor(d.id)}
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

export default DoctorList;

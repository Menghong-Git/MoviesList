import { usePatientContext } from "@/contexts/PatientContext";
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

const PatientList = ({
  onEdit,
}: {
  onEdit: (patient: { id: string; name: string; age: number }) => void;
}) => {
  const { patient, deletePatient } = usePatientContext();
  return (
    <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]  text-center">No.</TableHead> 
            <TableHead className="w-[150px] text-center">Name</TableHead> 
            <TableHead className="w-[100px] text-center">Age</TableHead> 
            <TableHead className="w-[200px] text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patient.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No patients found.
              </TableCell>
            </TableRow>
          ) : (
              patient.map((p, index) => (
              <TableRow key={p.id} className="space-x-4">
                <TableCell className="font-medium text-center">{index + 1}</TableCell>
                <TableCell className="text-center">{p.name}</TableCell>
                <TableCell className="text-center">{p.age}</TableCell>
                <TableCell className="text-center">
                  <div className="gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => onEdit(p)}
                    type="button"
                    aria-label="Edit"
                  >
                   <UserPen className="w-4 h-4"/>
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => deletePatient(p.id)}
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
  );
};

export default PatientList;

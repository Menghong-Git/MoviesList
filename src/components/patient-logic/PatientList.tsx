import { useHospitalContext } from "@/contexts/HospitalContext";
import { Button } from "@/components/ui/button";

const PatientList = ({
  onEdit,
}: {
  onEdit: (patient: { id: string; name: string; age: number }) => void;
}) => {
  const { patient, deletePatient } = useHospitalContext();
  return (
    <div className="mt-6 border rounded p-4 w-full">
      <h2 className="font-bold mb-2">Patient Name: </h2>
      {patient.length === 0 ? (
        <div className="text-gray-500 ">No Patient yet.</div>
      ) : (
        <ul className="space-y-1 ">
          {patient.map((p) => (
            <li
              key={p.id}
              className="border rounded px-2 py-1 flex items-center justify-between gap-2"
            >
              <span className="w-1/3 text-start">{p.name}</span>
              <span className="text-gray-700 w-1/3 text-center">{p.age.toFixed(0)} year</span>
              <div className="flex gap-1">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onEdit(p)}
                  type="button"
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => deletePatient(p.id)}
                  type="button"
                >
                  Cancel
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PatientList;

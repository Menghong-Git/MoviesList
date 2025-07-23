import { useDoctorContext } from "@/contexts/DoctorContext";
import { Button } from "@/components/ui/button";

const DoctorList = ({
  onEdit,
}: {
  onEdit: (doctor: { id: string; name: string; age: number, specialty: string; contact: string; }) => void;
}) => {
  const { doctor, deleteDoctor } = useDoctorContext();
  return (
    <div className="mt-6 border rounded p-4 w-full">
      <h2 className="font-bold mb-2">Doctor Name: </h2>
      {doctor.length === 0 ? (
        <div className="text-gray-500 ">No Doctor yet.</div>
      ) : (
        <ul className="space-y-1 ">
          {doctor.map((p) => (
            <li
              key={p.id}
              className="border rounded px-2 py-1 flex items-center justify-between gap-2"
            >
              <span className="w-1/3 text-start">{p.name}</span>
              <span className="text-gray-700 w-1/3 text-center">{p.age.toFixed(0)} year</span>
              <span className="text-gray-700 w-1/3 text-center">{p.specialty}</span>
              <span className="text-gray-700 w-1/3 text-center">{p.contact}</span>
              {/* Add more fields as needed */}
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
                  onClick={() => deleteDoctor(p.id)}
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

export default DoctorList;



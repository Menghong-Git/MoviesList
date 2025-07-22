import { useEffect, useState } from "react";
import { PatientProvider, useHospitalContext } from "@/contexts/HospitalContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


type EditState = {
  id: string;
  name: string;
  age: number;
} | null;

const CreateOrEditPatientForm = ({
  editPatient,
  onCancelEdit,
}: {
  editPatient?: EditState;
  onCancelEdit?: () => void;
}) => {
  const { addPatient, updatePatient } = useHospitalContext();
  const [name, setName] = useState(editPatient ? editPatient.name : "");
  const [age, setAge] = useState(editPatient ? editPatient.age : "");
  const [message, setMessage] = useState("");

  
  useEffect(() => {
    if (editPatient) {
      setName(editPatient.name);
      setAge(editPatient.age);
    } else {
      setName("");
      setAge("");
    }
  },[editPatient?.id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || age === "" || isNaN(Number(age))) {
      setMessage("Name and age are required.");
      return;
    }
    const ageNum = Number(age);
    if (isNaN(ageNum) || ageNum < 0) {
      setMessage("Age must be a valid non-negative number.");
      return;
    }
    if (editPatient) {
      updatePatient(editPatient.id, {
        name: name.trim(),
        age: ageNum,
      } as Hospital.Patient);
      setMessage("Patient have updated!");
      setTimeout(() => setMessage(""), 1500);
      if (onCancelEdit) onCancelEdit();
    } else {
      addPatient({
          id: crypto.randomUUID(),
          Patient_name: name.trim(),
          age: ageNum,
      } as unknown as Hospital.Patient);
      setName("");
      setAge("");
      setMessage("Patient have created!");
      setTimeout(() => setMessage(""), 1500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xs">
      <div className="space-y-2">
        <label className="block text-sm font-medium" htmlFor="product-name">
          Patient Name
        </label>
        <Input
          id="product-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Pen Menghong"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium" htmlFor="product-price">
          Age
        </label>
        <Input
          id="product-price"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="e.g. 18"
          type="number"
          min="0"
          step="0.01"
        />
      </div>
      <div className="flex gap-2">
        <Button
          type="submit"
          className="w-full"
          disabled={!name.trim() || !String(age).trim()}
        >
          {editPatient ? "Update Patient" : "Create Patient"}
        </Button>
        {editPatient && onCancelEdit && (
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
      {message && <div className="text-destructive text-sm">{message}</div>}
    </form>
  );
};

const PatientList = ({
  onEdit,
}: {
  onEdit: (patient: { id: number; name: string; age: number }) => void;
}) => {
  const { patient, deletePatient } = useHospitalContext();
  return (
    <div className="mt-6 border rounded p-4 w-full">
      <h2 className="font-bold mb-2">Patient</h2>
      {Patient.length === 0 ? (
        <div className="text-gray-500">No patient yet.</div>
      ) : (
        <ul className="space-y-1">
          {patient.map((p: { id: string; name: string;  age?: number; }) => (
            <li
              key={p.id}
              className="border rounded px-2 py-1 flex items-center justify-between gap-2"
            >
              <span>{p.name}</span>
              <span className="text-gray-700">
                {typeof p.age === "number" ? p.age.toFixed(0) : ""}
              </span>
              <div className="flex gap-1">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    if (typeof p.age === "number") {
                      onEdit({ id: Number(p.id), name: String(p.name), age: p.age });
                    }
                  }}
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
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export function Patient() {
  const [editPatient, setEditPatient] = useState<EditState>(null);
  return (
    <PatientProvider>
      <div className="container mx-auto py-8 w-full">
        <h1 className="text-2xl font-bold mb-4">
          Create patient 
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <PatientList
            onEdit={(p) =>
              setEditPatient({
                id: String(p.id),
                name: p.name,
                age: p.age,
              })
            }
          />
          <CreateOrEditPatientForm
            editPatient={editPatient}
            onCancelEdit={() => setEditPatient(null)}
          />
        </div>
      </div>
    </PatientProvider>
  );
};

export default Patient;

import { useEffect, useState } from "react";
import { usePatientContext } from "@/contexts/PatientContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type EditState = {
  id: string;
  name: string;
  age: number;
} | null;

interface CreateOrEditPatientFormProps {
  editPatient?: EditState;
  onCancelEdit?: () => void;
}

const CreateOrEditPatientForm = ({
  editPatient,
  onCancelEdit,
}: CreateOrEditPatientFormProps) => {
  const { addPatient, updatePatient } = usePatientContext();
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
  }, [editPatient, editPatient?.id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || age === "" || isNaN(Number(age))) {
      setMessage("Name and age are required.");
      return;
    }
    const ageNum = Number(age);
    if (!age || isNaN(Number(age)) || Number(age) < 0) {
      setMessage("Age must be a valid non-negative number.");
      return;
    }
    if (editPatient) {
      updatePatient(editPatient.id, {
        name: name.trim(),
        age: ageNum,
      } as Hospital.Patient);
      setMessage("Patient updated!");
      setTimeout(() => setMessage(""), 1500);
      if (onCancelEdit) onCancelEdit();
    } else {
      addPatient({
        id: crypto.randomUUID(),
        name: name.trim(),
        age: Number(age),
      } as Hospital.Patient);
      setName("");
      setAge("");
      setMessage("Patient created!");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xs">
      <div className="space-y-2">
        <label className="block text-sm font-medium" htmlFor="patient-name">
          Patient Name
        </label>
        <Input
          id="patient-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Pen Menghong "
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium" htmlFor="patient-age">
          Age
        </label>
        <Input
          id="patient-price"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="e.g. 18"
          type="number"
          min="0"
        />
      </div>
      <div className="flex gap-2">
        <Button
          type="submit"
          className="w-full"
          disabled={!name.trim() || age === "" || isNaN(Number(age))}
        >
          {editPatient ? "Update Product" : "Create patient"}
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
      {message && <div className="text-green-500   text-sm">{message}</div>}
    </form>
  );
};

export default CreateOrEditPatientForm;

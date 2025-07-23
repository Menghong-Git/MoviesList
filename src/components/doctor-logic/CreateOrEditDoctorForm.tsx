import { useEffect, useState } from "react";
import { useDoctorContext } from "@/contexts/DoctorContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type EditState = {
    id: string;
    name: string;
    age: number;
    specialty: string;
    contact: string;
} | null;

interface CreateOrEditDoctorFormProps {
    editDoctor?: EditState;
    onCancelEdit?: () => void;
}




const CreateOrEditDoctorForm = ({
    editDoctor,
    onCancelEdit,
}: CreateOrEditDoctorFormProps) => {
    const { addDoctor, updateDoctor } = useDoctorContext();
    const [name, setName] = useState(editDoctor ? editDoctor.name : "");
    const [age, setAge] = useState(editDoctor ? editDoctor.age : "");
    const [specialty, setSpecialty] = useState(editDoctor ? editDoctor.specialty : "");
    const [contact, setContact] = useState(editDoctor ? editDoctor.contact : "");
    const [message, setMessage] = useState("");


    useEffect(() => {
        if (editDoctor) {
            setName(editDoctor.name);
            setAge(editDoctor.age);
            setSpecialty(editDoctor.specialty);
            setContact(editDoctor.contact);
        } else {
            setName("");
            setAge("");
            setSpecialty("");
            setContact("");
        }
    }, [ editDoctor,editDoctor?.id]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || age === "" || isNaN(Number(age))) {
            setMessage("Name and age are required.");
            return;
        }
        const ageNum = Number(age);
        if (!age || isNaN(Number(age)) || Number(age) < 0) {
            setMessage("age must be a valid non-negative number.");
            return;
        }
        if (editDoctor) {
            updateDoctor(editDoctor.id, {
                name: name.trim(),
                age: ageNum,
                specialty: specialty.trim(),
                contact: contact.trim(),
            } as Hospital.Doctor);
            setMessage("Patient updated!");
            setTimeout(() => setMessage(""), 1500);
            if (onCancelEdit) onCancelEdit();
        } else {
            addDoctor({
                id: crypto.randomUUID(),
                name: name.trim(),
                age: Number(age),
                specialty: specialty.trim(),
                contact: contact.trim(),
            } as Hospital.Doctor);
            setName("");
            setAge("");
            setSpecialty("");
            setContact("");
            setMessage("Patient created!");
            setTimeout(() => setMessage(""), 3000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xs ">
            <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="patient-name">
                    Your Name:
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
                    Your Age :
                </label>
                <Input
                    id="patient-age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="e.g. 18"
                    type="number"
                    min="0"
                    step="0.01"
                />
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="patient-name">
                    Your Specially:
                </label>
                <Input
                    id="patient-name"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    placeholder="e.g. Doctor of Cardiology "
                />
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="patient-name">
                    Your Contact:
                </label>
                <Input
                    id="patient-name"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    type="number"
                    placeholder="e.g. +855 12 345 678"
                />
            </div>
            <div className="flex gap-2">
                <Button
                    type="submit"
                    className="w-full"
                    disabled={!name.trim() || age === "" || isNaN(Number(age))}
                >
                    {editDoctor ? "Update Product" : "Create patient"}
                </Button>
                {editDoctor && onCancelEdit && (
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

export default CreateOrEditDoctorForm;

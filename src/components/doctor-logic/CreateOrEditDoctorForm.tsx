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
    }, [editDoctor, editDoctor?.id]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || age === "" || isNaN(Number(age)) || specialty.trim() === "" || contact.trim() === "") {
            setMessage("Name age specialty and contact are required.");
            return;
        }
        const ageNum = Number(age);
        if (!age || isNaN(Number(age)) || Number(age) < 0) {
            setMessage("Age must be a valid non-negative number.");
            return;
        }
        if (editDoctor) { 
            updateDoctor(editDoctor.id, {
                name: name.trim(),
                age: ageNum,
                specialty: specialty.trim(),
                contact: contact.trim(),
            } as Hospital.Doctor);
            setMessage("Doctor updated!");
            setTimeout(() => setMessage(""), 1500);
            if (onCancelEdit) onCancelEdit();
        } else {
            addDoctor({
                id: crypto.randomUUID(),
                name: name.trim(),
                age: ageNum,
                specialty: specialty.trim(),
                contact: contact.trim(),
            } as Hospital.Doctor);
            setName("");
            setAge("");
            setSpecialty("");
            setContact("");
            setMessage("Doctor created!");
            setTimeout(() => setMessage(""), 3000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-m">
           <div className="grid grid-cols-4 gap-4">
           <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="doctor-name">
                    Doctor Name
                </label>
                <Input
                    id="doctor-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Pen Menghong "
                />
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="doctor-age">
                    Age
                </label>
                <Input
                    id="doctor-age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    type="number"
                    placeholder="e.g.30"
                />
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="doctor-specialty">
                    Specialty
                </label>
                <Input
                    id="doctor-specialty"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    placeholder="Sergeon"
                />
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="doctor-contact">
                    Contact
                </label>
                <Input
                    id="doctor-contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="e.g. 012-3456789 Texas" 
                />
            </div>
           </div>
            <div>
                <Button
                    type="submit"
                    className="w-full mb-2"
                    disabled={!name.trim() || !specialty.trim() || age === "" || isNaN(Number(age)) || !contact.trim()}
                >
                    {editDoctor ? "Update Doctor" : "Create Doctor"}
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
            {message && <div className="text-green-500 text-sm">{message}</div>}
        </form>
    );
};

export default CreateOrEditDoctorForm;

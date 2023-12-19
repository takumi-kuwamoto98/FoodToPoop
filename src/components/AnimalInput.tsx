import { useState } from "react";
import { Animal } from "@/models/Animal";

export interface AnimalInputProps {
    handleAnimalInput: (animal: Animal)=> void;
}


export const AnimalInput = ({handleAnimalInput}: AnimalInputProps) => {
  const [animalName, setAnimalName] = useState("");

  const handleAnimalNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setAnimalName(e.target.value);
  };

  const handleCreateAnimal = (): void => {
    handleAnimalInput(new Animal(animalName));
  };
  return (
    <>
      <input className='border-2' type="text" value={animalName} onChange={handleAnimalNameChange} />
      <button onClick={handleCreateAnimal}>動物を作成</button>
    </>
  );
};

export default AnimalInput;

import { useState } from "react";
import { Food } from "@/models/Food";
import { Animal } from "@/models/Animal";
import { AnimalInput } from "./AnimalInput";

export interface FoodData {
  banana: {
    name: string;
    color: string;
  };
  orange: {
    name: string;
    color: string;
  };
  apple: {
    name: string;
    color: string;
  };
}

export const FoodToPoop = () => {
  const [food, setFood] = useState("");
  const [foodObject, setFoodObject] = useState<Food>(new Food('apple'));
  const [animalObject, setAnimalObject] = useState<Animal|null>();
  const [action, setAction] = useState<string>("hungry");
  const [IsPooped, setIsPooped] = useState(false);

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setFood(e.target.value);
    setFoodObject(new Food(food));
  };

  const handleEatFruits = () => {
    setAction(animalObject?.eat()|| '');
    setTimeout(() => {
      setAction(animalObject?.poop()||'');
      setIsPooped(true);
    }, 5000);
  };

  const handleCleanPoo = () => {
    setAction("I am hungry");
  };

  const handleDescribeShit = () => {
    console.log(foodObject?.describe());
    setAction(foodObject?.describe()||'');
  }

  const handleDeleteAnimal = ()=>{
    setAnimalObject(null);
    setIsPooped(false);
  }
  return (
    <>
      { animalObject == null ? (
        <AnimalInput 
          handleAnimalInput={(object: Animal) => setAnimalObject(object)}
        />
      ) : (
        <>
          <select value={food} name="fruits" onChange={handleSelectChange}>
            <option value="apple">リンゴ</option>
            <option value="orange" selected>
              オレンジ
            </option>
            <option value="banana">バナナ</option>
          </select>
          <nav className='flex flex-col space-y-4'>
  <p className='text-lg font-bold'>{action}</p>
  {animalObject && 
    <input
      className='px-4 py-2 bg-blue-500 text-white rounded'
      value="動物を再作成する"
      type="button"
      onClick={handleDeleteAnimal}
    />
  }
  <input
    className='px-4 py-2 bg-green-500 text-white rounded'
    value="フルーツを食べる"
    type="button"
    onClick={handleEatFruits}
  />
  {IsPooped && <input
    className='px-4 py-2 bg-yellow-500 text-white rounded'
    value="うんちの説明"
    type="button"
    onClick={handleDescribeShit}
  />}
  {IsPooped && <input
    className='px-4 py-2 bg-red-500 text-white rounded'
    value="うんちを掃除する"
    type="button"
    onClick={handleCleanPoo}
  />}
</nav>
        </>
      )}
    </>
  );
};

export default FoodToPoop;

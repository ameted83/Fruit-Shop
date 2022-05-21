import { useFruitAPI } from '../hooks/useFruitAPI';

const Card = () => {
    
    const [loading, fruits] = useFruitAPI()

    return(
        <>
        <div className="flex flex-wrap gap-4 mx-auto p-20 font-sans">
        {fruits.map((fruit) => (<div className="border border-neutral-300 border-solid rounded-lg p-10">
            <p><img src={fruit.image} className="w-60 h-60"/></p>
            <p className="text-3xl font-bold mt-10">{fruit.name}</p>
            <p className="text-2xl mt-3">{fruit.price} €</p>
            <div className="mt-3 text-gray-500">
            <div>carbohydrates: {fruit.nutritions.carbohydrates}</div> 
            <div>protein: {fruit.nutritions.protein}</div>
            <div>fat: {fruit.nutritions.fat}</div>
            <div>calories: {fruit.nutritions.calories}</div>
            <div>sugar: {fruit.nutritions.sugar}</div>
            </div>
            <button className="bg-lime-500 rounded-lg p-3 text-white w-[100%] mt-5">Acquista</button>
            <button className="bg-orange-400 rounded-lg p-3 text-white w-[100%] mt-3">Dettagli</button>
            </div>)
        )}
        </div>
        </>
    );

}

export default Card;
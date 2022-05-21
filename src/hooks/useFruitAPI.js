import { useEffect, useState } from 'react'

export const useFruitAPI = () => {
    const [fruits, setFruits] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const data = await fetch('https://fruits-develhope.herokuapp.com/api');
                const res = await data.json();
                setFruits(res.fruits);
                setLoading(false);
                return res;
            } catch (err){
                console.log(err)
            }
        })()
    }, [])
    return [loading, fruits]
}
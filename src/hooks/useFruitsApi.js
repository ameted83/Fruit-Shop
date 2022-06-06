import { useState, useEffect } from "react";

export const FruitsApi = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const call = await fetch(`https://fruits-develhope.herokuapp.com/api`);
        const response = await call.json();
        setProduct(() => response.fruits);
        setLoading(false);
        return response;
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return [product, loading];
};

import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("http://localhost:3005/products")
      .then((loadedData) => loadedData.json())
      .then((loadedProducts) => {
        setProducts(loadedProducts);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        products.map(({ id, name, price }) => (
          <div key={id}>
            {name} - {price} руб
          </div>
        ))
      )}
    </>
  );
}

export default App;

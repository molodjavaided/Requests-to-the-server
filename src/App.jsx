import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);

  const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);

  useEffect(() => {
    setIsLoading(true);

    fetch("http://localhost:3005/products")
      .then((loadedData) => loadedData.json())
      .then((loadedProducts) => {
        setProducts(loadedProducts);
      })
      .finally(() => setIsLoading(false));
  }, [refreshProductsFlag]);

  const requestAddVacuumCleaner = () => {
    setIsCreating(true);

    fetch("http://localhost:3005/products", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        name: "Новый товар",
        price: 4690,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log("Товар добавлен, ответ сервера:", response);
        refreshProducts();
      })
      .finally(() => setIsCreating(false));
  };

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
      <button disabled={isCreating} onClick={requestAddVacuumCleaner}>
        Добавить товар
      </button>
    </>
  );
}

export default App;

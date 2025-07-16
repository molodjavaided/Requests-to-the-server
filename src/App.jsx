import { useEffect, useState } from "react";
import styles from "./App.module.css";

const PRODUCTS_MOCK = [
  {
    id: "001",
    name: "Телевизор",
    price: 39900,
  },
  {
    id: "002",
    name: "Телефон",
    price: 15500,
  },
  {
    id: "003",
    name: "Фен",
    price: 1230,
  },
];

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ json: () => PRODUCTS_MOCK });
      }, 3000);
    })
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

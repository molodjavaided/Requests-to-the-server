import { useState } from "react";
import {
  useRequestAddVacuumCleaner,
  useRequestDeleteHairDryer,
  useRequestGetProducts,
  useRequestUpdateSmartphone,
} from "./hooks";
import styles from "./App.module.css";

function App() {
  const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);

  const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);

  const { isLoading, products } = useRequestGetProducts();
  const { isCreating, requestAddVacuumCleaner } =
    useRequestAddVacuumCleaner(refreshProducts);
  const { isUpdating, requestUpdateSmartphone } =
    useRequestUpdateSmartphone(refreshProducts);
  const { isDeleting, requestDeleteHairDryer } =
    useRequestDeleteHairDryer(refreshProducts);
  return (
    <>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        Object.entries(products).map(([id, { name, price }]) => (
          <div key={id}>
            {name} - {price} руб
          </div>
        ))
      )}
      <div className={styles.buttons}>
        <button disabled={isCreating} onClick={requestAddVacuumCleaner}>
          Добавить товар
        </button>
        <button disabled={isUpdating} onClick={requestUpdateSmartphone}>
          Обновить смартфон
        </button>
        <button disabled={isDeleting} onClick={requestDeleteHairDryer}>
          Удалить фен
        </button>
      </div>
    </>
  );
}

export default App;

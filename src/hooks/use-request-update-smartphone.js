import { useState } from "react";
import { ref, set } from 'firebase/database'
import { db } from "../firebase";

export const useRequestUpdateSmartphone = () => {
    const [isUpdating, setIsUpdating] = useState(false);

     const requestUpdateSmartphone = () => {
    setIsUpdating(true);

    const smartphoneDbRef = ref(db, 'products/002')

    set(smartphoneDbRef, {
      name: 'Смартфон',
      price: 16900,
    }
  )

      .then((response) => {
        console.log("Смартфон обновлен, ответ сервера:", response);
      })
      .finally(() => setIsUpdating(false));
  };

  return {
    isUpdating,
    requestUpdateSmartphone
  }
}
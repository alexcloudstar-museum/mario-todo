import { getLocalStorage, setLocalStorageItem } from '../index';
import { createUser } from '../../shared/Todos/data/service/todosService';

import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

const checkLocalStorage = (storageName: string) => {
  const checkStorage = async (key: string) => {
    const storedData = getLocalStorage(key);
    const userId = uuidv4();

    if (!storedData) {
      setLocalStorageItem('id', userId);
    }

    await createUser({ storedData });
  };

  useEffect(() => {
    checkStorage(storageName);

    const handler = ({ key }) => checkStorage(key);
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);
};

export default checkLocalStorage;

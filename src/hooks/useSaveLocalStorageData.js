import { useCallback } from 'react';

const useSaveLocalStorageData = () => {
    const key = "mmData";

    const saveData = useCallback((data) => {
        const mmPresistentData = localStorage.getItem(key);
        
        if(!mmPresistentData){
            localStorage.setItem(key, JSON.stringify(data));
            return;
        }

        const prevData = JSON.parse(mmPresistentData);
        const attachData = { ...prevData, ...data };

        localStorage.setItem(key, JSON.stringify(attachData));
    }, []);

    return saveData;
}

export default useSaveLocalStorageData;
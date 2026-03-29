import React from 'react'

const useGetFormData = () => {
    const getData = (keysObj) => {
        const localData = localStorage.getItem("mmData");
        
        // If no data in localStorage return this same object;
        if(!localData){
            return keysObj;
        }

        const obj = {};
        const parsedData = JSON.parse(localData);

        for(let k of Object.keys(keysObj)){
            obj[k] = parsedData[k] ?? "";
        }

        return obj;

    }

    return getData;
}


export default useGetFormData;
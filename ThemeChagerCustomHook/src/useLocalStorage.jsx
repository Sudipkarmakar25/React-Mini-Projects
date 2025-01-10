import { useEffect, useState } from "react";

export default function useLocalStorage(key,defaultvalue)
{
const [value,setvalue]=useState(()=>{
    let currentvalue;
    try {
        currentvalue=JSON.parse(localStorage.getItem(key)||String(defaultvalue))
    } catch (error) {
        console.log(error)
        currentvalue=defaultvalue
    }
    return currentvalue
})

useEffect(()=>{
localStorage.setItem(key,JSON.stringify(value))
},[key,value])
return [value,setvalue];
}
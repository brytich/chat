//useLocalStorage , un fichier un peu comme le store avec les action , reducer etc
import { useEffect, useState } from 'react'

const PREFIX = 'chat-app-'

//on exporte la function contenant en param une clé et une valeur de base
export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key
    const [value,setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue != null) return JSON.parse(jsonValue)
        if(typeof initialValue === 'function'){
        return initialValue()
    }   else {
        return initialValue
    }
    })


    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    },[prefixedKey, value])

    return [value, setValue]
}

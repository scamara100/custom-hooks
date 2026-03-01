import { useEffect, useState } from "react";

export function useDebounce(delay = 500){
    const [value, setValue] = useState("")
    const [debounceValue, setDebounceValue] = useState('')
    useEffect(() => {
        const timeoutId = setTimeout(() => {setDebounceValue(value)}, delay)
        return () => clearTimeout(timeoutId)
    }, [value, delay])

    function handleChange(e){
        setValue(e.target.value)
    }

    return{value, debounceValue, handleChange}
}
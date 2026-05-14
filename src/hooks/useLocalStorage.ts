import { useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initialValue: T) {
    //by using a function as an argument for useState, we ensure that it is only ever called upon the initial render.
    //we don't want to call this on rerenders
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key)
            if (item == null) return initialValue

            return JSON.parse(item)
        } catch {
            return initialValue
        }
    })

    //dependency array is at the end. Runs everytime values in the dependency array change.
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue))
    }, [storedValue])

    return [storedValue, setStoredValue] as const
}
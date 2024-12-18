import {useState, useEffect} from "react"

const useFetch = url => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => {
            if (!res.ok) {
                throw Error("Could not get a response for the fetch!!")
            }
            return res.json()
        })
        .then(data => {
            setData(data)
            setIsLoading(false)
            setIsLoading(null)
        })
        .catch(err => {
            setIsLoading(false)
            setIsError(err.message);
        })
    }, [])

    return {data, isLoading, isError}
}

export default useFetch;
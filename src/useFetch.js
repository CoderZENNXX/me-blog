import {useState, useEffect} from "react"

const useFetch = url => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController()

        fetch(url, {signal: abortCont.signal})
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
            if (err.name === "AbortError") {
                console.log("Fetch Aborted")
            }
            else {
                setIsLoading(false)
                setIsError(err.message);
            }
        })

        return () => abortCont.abort();
    }, [url])

    return {data, isLoading, isError}
}

export default useFetch;
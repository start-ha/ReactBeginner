import { useEffect , useState } from "react";

export function useFetch(baseUrl, initType) {

    const [data, setData] = useState(null);

    const fetchUrl = (type) =>{
        fetch(baseUrl + "/" + type)
        .then((res)=> res.json())
        .then((data)=>setData(data));
    };

    useEffect(() =>{
        fetchUrl(initType)
    },[]); 


        return {data, fetchUrl};
}
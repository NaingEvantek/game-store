import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

const useData=<T>(endpoint:string)=>{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading,setLoading]=useState(false);
   
    useEffect(() => {
      const  controller = new AbortController(); // need to create if you want to control cancelled error.

      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint,{signal: controller.signal}) // {signal : ....} to catch the signal of api request
        .then((res) => {
            setData(res.data.results);
            setLoading(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError)return; // to remove cancelled error showing in error

            setError(err.message);
             setLoading(false);
        });

        return ()=>controller.abort(); // axios always call the api two times , first request need to cancelled to avoid double jobs.
    }, []); // [] empty depedency

    return {data,error,isLoading};
}

export default useData;
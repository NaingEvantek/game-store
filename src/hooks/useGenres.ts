import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre{
    id:number;
    name:string;
}
export interface FetchGenresResponse {
    count: number;
    results: Genre[];
  }

const useGenres=()=>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading,setLoading]=useState(false);
   
    useEffect(() => {
      const  controller = new AbortController(); // need to create if you want to control cancelled error.

      setLoading(true);
      apiClient
        .get<FetchGenresResponse>("/genres",{signal: controller.signal}) // {signal : ....} to catch the signal of api request
        .then((res) => {
            setGenres(res.data.results);
            setLoading(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError)return; // to remove cancelled error showing in error

            setError(err.message);
             setLoading(false);
        });

        return ()=>controller.abort(); // axios always call the api two times , first request need to cancelled to avoid double jobs.
    }, []); // [] empty depedency

    return {genres,error,isLoading};
}

export default useGenres;
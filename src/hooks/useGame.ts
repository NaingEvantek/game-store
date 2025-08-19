import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform{
    id:number;
    name:string;
    slug:string
}

export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform: Platform}[];
    metacritic:number;
  }
  
export interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames=()=>{
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
   
    useEffect(() => {
      const  controller = new AbortController(); // need to create if you want to control cancelled error.

      apiClient
        .get<FetchGamesResponse>("/games",{signal: controller.signal}) // {signal : ....} to catch the signal of api request
        .then((res) => setGames(res.data.results))
        .catch((err) => {
            if(err instanceof CanceledError)return; // to remove cancelled error showing in error

            setError(err.message);
        });

        return ()=>controller.abort(); // axios always call the api two times , first request need to cancelled to avoid double jobs.
    }, []); // [] empty depedency

    return {games,error};
}

export default useGames;
import { useQuery } from '@tanstack/react-query';
import genre from '../data/genre'

import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre{
    id:number;
    name:string;
    image_background:string;
}

const useGenres=()=> useQuery({
    queryKey:['genres'],
    queryFn:apiClient.getAll,
    staleTime:24*60*60*1000, //24h
    initialData:{count:genre.length,results:genre}
})
//const useGenres=()=> ({data:genre,isLoading:false,error:null})
// const useGenres=()=> useData<Genre>('genres');

export default useGenres;
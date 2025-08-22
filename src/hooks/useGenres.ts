import { useQuery } from '@tanstack/react-query';
import genres from '../data/genre'

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
    initialData:genres
})
//const useGenres=()=> ({data:genre,isLoading:false,error:null})
// const useGenres=()=> useData<Genre>('genres');

export default useGenres;
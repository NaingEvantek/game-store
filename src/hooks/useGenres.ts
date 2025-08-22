import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import genres from '../data/genre';
import APIClient from "../services/api-client";
const apiClient = new APIClient<Genre>("/genres");

export interface Genre{
    id:number;
    name:string;
    image_background:string;
}

const useGenres=()=> useQuery({
    queryKey:['genres'],
    queryFn:apiClient.getAll,
    staleTime:ms('24h'), 
    initialData:genres
})
//const useGenres=()=> ({data:genre,isLoading:false,error:null})
// const useGenres=()=> useData<Genre>('genres');

export default useGenres;
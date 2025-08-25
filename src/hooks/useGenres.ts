import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import genres from '../data/genre';
import APIClient from "../services/api-client";
import { Genre } from '../entities/Genre';
const apiClient = new APIClient<Genre>("/genres");

const useGenres=()=> useQuery({
    queryKey:['genres'],
    queryFn:apiClient.getAll,
    staleTime:ms('24h'), 
    initialData:genres
})
//const useGenres=()=> ({data:genre,isLoading:false,error:null})
// const useGenres=()=> useData<Genre>('genres');

export default useGenres;
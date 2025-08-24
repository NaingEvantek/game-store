import useGenres from "./useGenres"

const useGenre = (id?:number)=>{
    const {data:genres,error,isLoading}=useGenres();
    return genres?.results.find(g=>g.id===id);
    
}

export default useGenre;
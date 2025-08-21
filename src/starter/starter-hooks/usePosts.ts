import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }


interface PostQuery{
    // page:number;// need in useQuery , no need in infinitequery
    pageSize:number; 
}

// using useQuery
// const usePosts=(query:PostQuery)=>useQuery<Post[],Error>({
//    // queryKey:userId?['users',userId,'posts']:['posts'],
//     queryKey:['posts',query],
//     queryFn:()=> axios
//         .get("https://jsonplaceholder.typicode.com/posts",{
//             params:{
//                 _start:(query.page-1)*query.pageSize,
//                 _limit:query.pageSize
//             }
//         })
//         .then((res) =>res.data),
//     staleTime:1*60*1000, //1m
//     keepPreviousData:true
// })

//using infinite query
const usePosts=(query:PostQuery)=>useInfiniteQuery<Post[],Error>({
    // queryKey:userId?['users',userId,'posts']:['posts'],
     queryKey:['posts',query],
     queryFn:({pageParam=1})=> axios
         .get("https://jsonplaceholder.typicode.com/posts",{
             params:{
                 _start:(pageParam-1)*query.pageSize, 
                 _limit:query.pageSize
             }
         })
         .then((res) =>res.data),
     staleTime:1*60*1000, //1m
     keepPreviousData:true,
     getNextPageParam:(lastPage,allPages)=>{ // only for infinite query
       return lastPage.length>0? allPages.length+1:undefined;
     }
 })


export default usePosts;
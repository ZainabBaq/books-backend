import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000"
    }),
    endpoints(builder){
        return {
            fetchBooks: builder.query({
                query(){
                    return "/books"
                }
            })
        }
    }
})

// this automatigally took fetchBooks and query, and combined the names to
// create a hook 
export const { useFetchBooksQuery} = booksSlice
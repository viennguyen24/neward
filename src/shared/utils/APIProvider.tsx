"use client"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { PropsWithChildren, useState } from "react";
import { trpc } from "@/actions/client";
import { httpBatchLink } from "@trpc/client";
const Provider = ({children} : PropsWithChildren) => {
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() => trpc.createClient({
        links:[
            httpBatchLink({
                url:`${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc`,
                fetch(url, options){
                    return fetch(url, {
                        ...options, credentials:"include",
                    })
                }
            })
        ]
    }))
    return(
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient} >{children}</QueryClientProvider>
        </trpc.Provider>
    )
}

export default Provider;

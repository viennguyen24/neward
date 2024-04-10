import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    // this is alreay an api end point
    login:publicProcedure.query(()=>{
        return "Hello"
    })
})
export type AppRouter = typeof appRouter
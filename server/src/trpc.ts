import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import { createContext } from "./context";

/**
 * express기반의 context생성 후 미들웨어, 라우터, procedure 변수 할당
 */
export type Context = inferAsyncReturnType<typeof createContext>;
const t = initTRPC.context<Context>().create();

export const middleware = t.middleware;
export const router = t.router;

export const publicProcedure = t.procedure;

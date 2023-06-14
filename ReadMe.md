## tRPC 서버+클라이언트 샘플 코드

[참조링크-(번역) tRPC와 리액트를 사용해 풀 스택 타입스크립트 앱 만들기](https://velog.io/@superlipbalm/full-stack-typescript-with-trpc-and-react?utm_source=substack&utm_medium=email)

- 서버와 클라이언트로 나눠져 있다.
- 타입스크립트를 활용하여 API의 정보(URL, 해당 API의 데이터 타입)를 서버, 클라이언트가 공유
- 샘플코드는 `/src/index.ts`의 `export type AppRouter = typeof appRouter;`로 최정적으로 API정보를 제공한다.(clinet에서 import)

### 서버

- trpc + express + ts

```bash
npm install -g ts-node
npm install
npm run start
```

### 클라이언트

- trpc + react + ts + rq
  1

```bash
npm yarn
npm yarn dev
```

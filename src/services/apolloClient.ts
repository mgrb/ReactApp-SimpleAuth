import { multipartFetchExchange } from "@urql/exchange-multipart-fetch";
import { cacheExchange, createClient, dedupExchange } from "urql";

const apolloClient = createClient({
  url: "http://localhost:4000/graphql",
  exchanges: [dedupExchange, cacheExchange, multipartFetchExchange],
});

export default apolloClient;

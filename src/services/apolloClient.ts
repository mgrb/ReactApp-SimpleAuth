import { createClient } from "urql";

const apolloClient = createClient({ url: "http://localhost:4000/graphql" });

export default apolloClient;

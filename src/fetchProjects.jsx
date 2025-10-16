import { createClient } from "contentful";

const client = createClient({
  space: "3kh097r1muk7",
  accessToken: "wn7DHx5hacColSEVEO9PifiMSXTd2JARiiixTeNIh_Q",
  environment: "master",
});

client
  .getEntries({ content_type: "projects" })
  .then((response) => console.log(response));

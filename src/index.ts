import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";

const app = new Elysia().use(swagger())
  .get("/", () => "Hello Elysia").listen(3001)
  .get("/json", () => {
    return {
      hello: "world",
    };
  })
  .get("/user/:id",({params:{id}}) => id)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

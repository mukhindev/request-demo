import * as todoApi from "./entities/todo/api";

const rootElement = document.querySelector<HTMLDivElement>("#app");

if (!rootElement) {
  throw Error("Root not found!");
}

todoApi
  .getTodo({
    delay: 1500,
    todoId: 3,
    params: {
      "some-param": 42,
    },
  })
  .then((reply) => {
    console.log(reply);
    rootElement.innerHTML = `title: ${reply.data.title}`;
  });

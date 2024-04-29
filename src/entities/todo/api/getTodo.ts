import { joinUrl } from "@mukhindev/request";
import { createJsonPlaceholderRequest } from "../../../domains/jsonPlaceholder/api";
import { TODO_API_BASE_PATH } from "../constants";
import { TodoModel } from "../types";

type Options = {
  todoId: number;
  params: {
    "some-param": number;
  };
};

type Data = TodoModel;

export const getTodo = createJsonPlaceholderRequest<Options, Data>(
  (options) => {
    const { todoId, ...other } = options;

    return {
      url: joinUrl(TODO_API_BASE_PATH, todoId),
      ...other,
    };
  }
);

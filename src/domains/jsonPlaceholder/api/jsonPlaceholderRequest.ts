import { createRequest, CreateRequestFn, joinUrl } from "@mukhindev/request";
import { JSON_PLACEHOLDER_API_HOST } from "../constants";

export const createJsonPlaceholderRequest: CreateRequestFn = (getOptions) => {
  return createRequest(async (options) => {
    const { url, ...other } = await getOptions(options);

    // You can execute an async process before the request. For example, check and refresh token
    console.log("Process before request start");
    await delay(1500);
    console.log("Process before request end");

    return {
      // join "https://jsonplaceholder.typicode.com" + pathname
      url: joinUrl(JSON_PLACEHOLDER_API_HOST, url),
      ...other,
    };
  });
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

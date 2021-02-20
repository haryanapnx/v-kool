/* eslint-disable @typescript-eslint/no-explicit-any */
import { FakeParams, HttpReq } from "./interface";

export const fakeHttp = ({ url, body, params }: FakeParams) => {
  return new Promise<HttpReq>((resolve: any, reject) => {
    const timeout: number = Math.random() * 10000;
    setTimeout(() => {
      if (timeout < 1500) {
        console.log({
          headers: { url, params, body },
          response: {
            status: 200,
            message: "success",
            data: body
          }
        });
        resolve();
      } else {
        reject({ message: "Request Time Out" });
        throw new Error("Request Time Out");
      }
    }, timeout);
  });
};

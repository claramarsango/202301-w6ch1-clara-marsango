import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://www.randomnumberapi.com/api/v1.0/random",
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json([44]));
    }
  ),
];

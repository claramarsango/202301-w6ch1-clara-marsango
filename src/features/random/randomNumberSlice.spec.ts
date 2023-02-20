import randomNumberReducer, { showNumberAsync } from "./randomNumberSlice";

describe("initializer reducer", () => {
  it("should hanldle initial state", () => {
    expect(randomNumberReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
      status: "idle",
    });
  });

  it("should handle loading status", () => {
    const loading = randomNumberReducer(undefined, showNumberAsync.pending);
    expect(loading.status).toEqual("loading");
  });

  it("should handle failed status", () => {
    const loading = randomNumberReducer(undefined, showNumberAsync.rejected);
    expect(loading.status).toEqual("failed");
  });

  it("should handle idle status", () => {
    const loading = randomNumberReducer(undefined, showNumberAsync.fulfilled);
    expect(loading.status).toEqual("idle");
  });
});

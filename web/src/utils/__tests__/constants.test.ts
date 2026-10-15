import { describe, expect, it } from "vitest";
import { parseLevel } from "../constants";

describe("parseLevel", () => {
  it("passes numbers through", () => {
    expect(parseLevel(3)).toBe(3);
  });

  it("parses the L-prefixed form", () => {
    expect(parseLevel("L4")).toBe(4);
  });
});

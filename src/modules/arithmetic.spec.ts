import { test } from "@japa/runner";
import { sum } from "./arithmetic";

test.group("arithmetic", () => {
  test("add two numbers", ({ assert }) => {
    // Test logic goes here
    assert.equal(sum(2, 3), 5);
  });
});

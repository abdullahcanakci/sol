import app from "@mars/app";
import { assert } from "console";
import request from "supertest";

test("it_responds_with_hello", (done) => {
  request(app)
    .get("/")
    .expect(200)
    .then((response) => {
      assert(response.body, "Hello World!"), done();
    })
    .catch((err) => done(err));
});

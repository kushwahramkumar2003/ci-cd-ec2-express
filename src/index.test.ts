import request from "supertest";
import { describe, it } from "node:test";
import { expect } from "@jest/globals";
import app from "./index";

// Jest provides describe, it, and expect as globals
// No need to import them

describe("Express Server", () => {
  it("GET / should return welcome message", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      message: "Hello from Express + TypeScript + CORS!",
    });
  });

  it("POST /data should echo received body", async () => {
    const data = { name: "Ramkumar", age: 22 };

    const res = await request(app).post("/data").send(data);

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ received: data });
  });
});

import express from "express";
import routes from "./routes.js";

class App {
  constructor() {
    this.app = express;
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.request(express.json());
  }
  routes() {
    this.app.request(routes);
  }
}

export default new App().app;

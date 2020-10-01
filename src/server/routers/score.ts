import { Response, Router } from "express";
import { scoreController } from "../controllers/scoreController";

const validations = require("../middlewares/validations");
class ScoreRouter {
  public router: Router = Router();
  constructor() {
    this.config();
  }

  config(): void {
    this.router.post("", scoreController.addScore);
  }
}
const ScoreRoutes = new ScoreRouter();
export default ScoreRoutes.router;

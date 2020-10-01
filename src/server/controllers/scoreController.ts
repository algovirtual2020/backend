import scoreModel from "../models/scoreModel";
import { Request, Response } from "express";

class ScoreController {

  public addScore(req: Request, res: Response) {
    let body = req.body;
    let score = new scoreModel({
      user: body.user,
      scoreList: JSON.parse(req.body.scoreList)
    });

    score.save((err, scoreDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }
      res.json({
        ok: true,
        score: scoreDB,
      });
    });
  }
}

export const scoreController = new ScoreController();
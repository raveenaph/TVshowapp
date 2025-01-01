import express from "express"
import ShowsCtrl from "./library.controller.js"

const router = express.Router();

router.route("/new").post(ShowsCtrl.apiPostShow);

export default router;
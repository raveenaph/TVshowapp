import ShowsDAO from "../dao/showsDAO.js"

export default class ShowsController {
    static async apiPostShow(req, res, next) {

        try {
            const showId = parseInt(req.body.showId);
            const title = req.body.title;
            const img = req.body.poster;

            const showResponse = await ShowsDAO.addShow(
                showId,
                title,
                img
            )

            res.json({status: "success"});
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    }
}
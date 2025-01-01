import {ObjectId} from "bson"
import { error } from "console";

let library;

export default class ShowsDAO {

    static async injectDB(conn) {
        if(library) {
            return;
        }
        try {
            library = await conn.db("tvshows").collection("library");
            console.log("Injecting db");

        } catch (e) {
            console.error(`Unable to establish connection handles in userDAO: ${e}`);
        }
    }

    static async addShow(showId, title, img) {
        try {
            console.log("adding show to db");
            const showDoc = {
                showId: showId,
                title: title,
                poster: img,
            };
            console.log(`showID: ${showId}, title: ${title}, posterpath: ${img}`);
            return await library.insertOne(showDoc);
        } catch (e) {
            console.error(`Unable to add to library: ${e}`);
            return {error: e};
        }
    }
}
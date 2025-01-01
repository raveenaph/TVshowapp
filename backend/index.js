import app from "./server.js"
import mongodb from "mongodb"
import ShowsDAO from "./dao/showsDAO.js"

const MongoClient = mongodb.MongoClient;

const uri = `mongodb+srv://raveenaphadnis:arjun123@cluster0.f7eic.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const port = 8000;

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    })
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        await ShowsDAO.injectDB(client)
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })
import express  from 'express'
import { GetLanguages } from './data-storage'

const app = express();
const port = 3000;

app.get('/languages', (req, res) => {
    let languages = GetLanguages();
    res.send(languages);
})
app.listen(port,() => {
    console.log(`Server is running at ${port} port.`)
})

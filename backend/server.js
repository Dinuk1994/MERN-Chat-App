import express from 'express'
import dotenv from 'dotenv'


dotenv.config()
const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    //root rout http:/localhost:5000
    res.send('Hello World!')
})

app.get('/api/auth/signup', (req, res) => {
    console.log("signup rout");
})

app.listen(PORT , ()=>{
    console.log(`Server Runnig on port ${PORT}`);
})
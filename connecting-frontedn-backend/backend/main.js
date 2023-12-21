import express from 'express'

const app = express();

app.get('/api/meme', (req, res)=> {
    const memes = [
        {
            id : 1,
            joke : 'Hehe boi',
        },
        {
            id : 2,
            joke : 'Noice',
        },
        {
            id : 3,
            joke : 'Maine khati toffy khai hai',
        },
        {
            id : 4,
            joke : 'Women',
        },
        {
            id : 5,
            joke : 'Samaj rhe ho',
        },
    ]
    res.send(memes);
})


app.listen( 3000, ()=> {
    console.log('server is running at http://localhost:3000');
})



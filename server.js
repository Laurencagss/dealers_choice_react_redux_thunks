const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/jenna', (req, res)=> res.sendFile(path.join(__dirname, 'Jenna.html')));
app.get('/kt', (req, res)=> res.sendFile(path.join(__dirname, 'KT.html')));
app.get('/rohail', (req, res)=> res.sendFile(path.join(__dirname, 'Rohail.html')));
app.get('/ray', (req, res)=> res.sendFile(path.join(__dirname, 'Ray.html')));

app.post('/api/friends', async(req, res, next)=>{
    try{
        await Friends.findAll()
        res.send(await Friends.findAll())
    }catch(err){
        next(err)
    }
})

app.delete('/api/friends/:id', async(req, res, next)=>{
    try{
        const destroyed = await Friends.findByPk(req.params.id)
        await destroyed.destroy()
        res.sendStatus(204)
    }catch(err){
        next(err)
    }
})

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`));

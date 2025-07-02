import express from 'express';
const app = express();


app.use(express.json());


let telas = [
  {
    Id:1,
    Nombre:"Gabardina",
    Descripcion:"Tela oscura",
    Precio:10,
    Cantidad:1

  },
    {
    Id:2,
    Nombre:"Cuero",
    Descripcion:"asd",
    Precio:20,
    Cantidad:3

  }

]

app.get('/telas',(req, res) =>{
    res.status(200).json(telas)
})

app.post('/telas',(req, res)=>{
    const newTela = req.body;
    newTela.Id = telas.length +1;
    telas.push(newTela);
    res.status(201).json(newTela);
})

app.put('/telas',(req, res)=>{
    const updateTela = req.body;
    const index = telas.findIndex(tela => tela.Id === updateTela.Id);

    if(index !== -1){
        telas[index] = updateTela;
        res.status(200).json(updateTela);

    }else{
        res.status(404).json({error:"Tela not found"});
    }
});

app.delete('/telas/:id',(req, res) => {
    const telaId = parseInt(req.params.id);
    const index = telas.findIndex(tela => tela.Id === telaId);

    if(index !== -1){
        telas.splice(index, 1);
        res.status(204).end();
    }else{
        res.status(404).json({error:"Tela not found"})
    }
});

app.get('/',(req, res) =>{
    res.status(200).send("hello world!\n");
});

app.listen(3000,'127.0.0.1',()=>{
    console.log('listening on 127.0.0.1:3000')
});
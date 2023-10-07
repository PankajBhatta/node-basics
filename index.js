const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))


let books =[
    { id: '1',title: 'NodeJS1',author: 'pankaj1' },
    { id: '2',title: 'NodeJS2',author: 'pankaj2' },
    { id: '3',title: 'NodeJS3',author: 'pankaj3' }
]

app.get('/books',(req,res) =>{
    res.json(books);
})

app.post('/books',(req,res) =>{
    console.log(req.body)
    const newBook = {
        id:books.length +1,
        title:req.body.title,
        author:req.body.author
    };
    books.push(newBook);
    res.status(201).json(newBook);
})

app.listen(3001);
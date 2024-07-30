
const express = require('express');
const app = express();


const books = [

    {id : 1, title : 'book1', author : 'auther1'},
    {id : 2, title : 'book2', author : 'auther2'},
    {id : 3, title : 'book3', author : 'auther3'}
    
]

// Read
app.get('/', (req, res)=>{

    res.json(books);
})


app.use(express.json());
// create
app.post('/books',(req, res)=>{
        console.log(req.body); // req comming from body
        const newBook = req.body; // store it as newBook 
        newBook.id = books.length+1; // set id manually , no. id prev id + 1 = next id
        books.push(newBook); // now push new requested book from server to books
        res.status(201).json(newBook); // 201-success , as res we send newBook as json
})


/* op

//reqest and response on 3000/books through POST
    //reqest from body
    {
    "title": "book4",
    "author": "author4",
    "id": 4
}
    // response :
{
    "title": "book4",
    "author": "author4",
    "id": 4
}

// now books on 30000/ through GET ->
[
    {
        "id": 1,
        "tittle": "book1",
        "author": "auther1"
    },
    {
        "id": 2,
        "tittle": "book2",
        "author": "auther2"
    },
    {
        "id": 3,
        "tittle": "book3",
        "author": "auther3"
    },
    {
        "title": "book4",
        "author": "author4",
        "id": 4
    }
]
*/


//Update

app.put('/books/:id', (req,res)=>{

    const id = parseInt(req.params.id);
    const updateBook = req.body;
    const indx = books.findIndex(book=>book.id ===id);// find index from books by a book key which id is eqal to reqested id , and stor indx variable

    if(indx != -1){ // if inxed found

        books[indx] = {...books[indx], ...updateBook}; // at that indx keep old data index...books[indx] , and also add new one ...updateBook
        res.json(books[indx]);
    }
    else{
        res.status(404).json({error : 'book not found..'});
    }


})


/*

// req through PUT fro body :
http://localhost:3000/books/1
{
    "title" : "book5",
    "author": "author5"

}

// response through PUT in body : 
{
    "id": 1,
    "title": "book5",
    "author": "author5"
} //id remain same , bakki sabhi update ho gaya as i want 

// NOW books on 30000/ through GET

[
    {
        "id": 1,
        "title": "book5",
        "author": "author5"
    },
    {
        "id": 2,
        "title": "book2",
        "author": "auther2"
    },
    {
        "id": 3,
        "title": "book3",
        "author": "auther3"
    }
]

*/





// Delete 

app.delete('/books/:id', (req,res)=>{

    const id = parseInt(req.params.id);
    const indx = books.findIndex(book=>book.id ===id);// find index from books by a book key which id is eqal to reqested id , and stor indx variable

    if(indx != -1){ // if inxed found

        const deleteBook = books[indx];// store book of indx in deleteBok
        books.slice(indx, 1); // delete book at indx , 1 represents no. of book to slice or delete
        res.json(deleteBook); // response me deleted book bhej do 
        
    }
    else{
        res.status(404).json({error : 'book not found..'});
    }


})


/*

// req through DELETE fro body :
http://localhost:3000/books/2

// res through DELETE fro body :
{
    "id": 2,
    "title": "book2",
    "author": "auther2"
}


*/


app.listen(3000, ()=>{
    console.log("Server is listening at 30000.....");
})
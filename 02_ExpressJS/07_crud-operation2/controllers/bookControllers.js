
const books = [

    {id : 1, title : 'book1', author : 'auther1'},
    {id : 2, title : 'book2', author : 'auther2'},
    {id : 3, title : 'book3', author : 'auther3'}
    
]

// Read
const readBook = (req, res)=>{

    res.json(books);
}





// create
const createdBook = (req, res)=>{
        console.log(req.body); // req comming from body
        const newBook = req.body; // store it as newBook 
        newBook.id = books.length+1; // set id manually , no. id prev id + 1 = next id
        books.push(newBook); // now push new requested book from server to books
        res.status(201).json(newBook); // 201-success , as res we send newBook as json
}




//Update

const updateBook = (req,res)=>{

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


}



// Delete 

const deleteBook =  (req,res)=>{

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


}

module.exports = {

    createdBook,
    readBook,
    updateBook,
    deleteBook
}

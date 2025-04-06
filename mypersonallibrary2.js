const book = {
    title: "Hamlet",
    description: "Quest for Justice and Truth", 
    numberOfPages: 264,
    author: "William shakespare",
    reading: true,

toggleReadingStatus: function(){
    book.reading = !book.reading;
    console.log(`is the book ${book.title} currently been read? ${book.reading}.`)
}
}
book.toggleReadingStatus()


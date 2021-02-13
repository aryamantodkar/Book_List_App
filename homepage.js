// class Book{
//     constructor(title,author,bookid){
//         this.title=title;
//         this.author=author;
//         this.bookid=bookid;
//     }
// }
// class UI{
//     static addbooktolist(book){
//         const list=document.getElementById('book-list');
//         const row=document.createElement('tr');
//         row.innerHTML=`
//         <td>${book.title}</td>
//         <td>${book.author}</td>
//         <td>${book.bookid}</td>
//         <td><a href="#" class="btn btn-danger"></a>X</td>
//         `
//         list.appendChild(row);
//     }
// }

// document.getElementById('book-form').addEventListener('submit',(e)=>{
//         e.preventDefault();
//         const title=document.getElementById('title').value;
//         const author=document.getElementById('author').value;
//         const bookid=document.getElementById('bookid').value;
//         const book= new Book(title,author,bookid);
//         UI.addbooktolist(book);
//         console.log(book);
//     });
class Book{
    constructor(title,author,bookid){
        this.title=title;
        this.author=author;
        this.bookid=bookid;
    }
}
function addbooktolist(book){
            const list=document.getElementById('book-list');
            const row=document.createElement('tr');
            row.innerHTML=`
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.bookid}</td>
            <td><a href="#" class="btn btn-danger">X</a></td>
            `
            list.appendChild(row);
            document.getElementById('title').value="";
            document.getElementById('author').value="";
            document.getElementById('bookid').value="";
}
function input(){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const bookid = document.getElementById('bookid').value;
    const book = new Book (title,author,bookid);
    addbooktolist(book);
    console.log(book);
}

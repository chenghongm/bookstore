import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/serives/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  constructor( private _bookSerive: BookService) { }

  ngOnInit(){
    this.listBooks();
  }

  listBooks(){
    this._bookSerive.getBooks().subscribe(
      data => this.books = data
    )
  }

}

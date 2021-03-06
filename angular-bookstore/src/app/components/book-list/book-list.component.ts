import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/serives/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  currentCategoryId: number;
  searchMode: boolean;
  counter: number
  p : number = 3
  
   constructor( private _bookSerive: BookService, private _activedRoute: ActivatedRoute) { }

  ngOnInit(){
    this._activedRoute.paramMap.subscribe(()=>{
    
     this.listBooks();
    })
  }
    
  
    listBooks(){
      
       this.searchMode = this._activedRoute.snapshot.paramMap.has('keyword');
     
      if(this.searchMode){
       
        //do your search work
        this.handleSearchBooks();
      }else{
        //display 
        this.handleListBooks();
      }

    }
    handleListBooks(){
      const hasCategoryId: boolean = this._activedRoute.snapshot.paramMap.has('id');
    if (hasCategoryId){
      this.currentCategoryId = +this._activedRoute.snapshot.paramMap.get('id');
    }else{
      this.currentCategoryId = 1;
    }

    this._bookSerive.getBooks(this.currentCategoryId).subscribe(
      data => this.books = data
    )
    }

    handleSearchBooks(){
      const keyword: string = this._activedRoute.snapshot.paramMap.get('keyword');

      this._bookSerive.searchBooks(keyword).subscribe(
        data => this.books = data
      )
    }

}

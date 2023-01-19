import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BookstoreService} from '../bookstore.service';
import {Book} from '../book';


@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {
  books: Array<Book> = [];

  counstructor(private _service: BookstoreService, private _route:Router) { }

  ngOnInit():void {
  this.getBooks();
  }

  getBooks() {
    this._service.getBooksFromServer().subscribe(
    data => this.books = data)
  }

  RedirectToAddBook() {
    this._route.navigate(['addbook'])
  }

}

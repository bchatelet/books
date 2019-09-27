import { Component, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
    fileIsUploading = false;
    fileUrl: string;
    fileUploaded = false;
  constructor(private booksService: BooksService) {


   }
   onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.booksService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
}

  ngOnInit() {
  }

}

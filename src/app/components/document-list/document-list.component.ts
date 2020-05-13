import { Component, OnInit } from '@angular/core';
import {Document} from '../../common/document';
import {DocumentService} from '../../services/document.service';


@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  public documents: Document[] = [];
  constructor(private _documentService: DocumentService) { }

  ngOnInit(): void {
    this.onGetDocuments();
  }
  public onGetDocuments(){
    this._documentService.getDocuments().subscribe(data=>{
      this.documents = data;
    },error => {
      console.log(error);
    });
  }

}

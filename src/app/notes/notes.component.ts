import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Notes } from './notes.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  @ViewChild('dataForm') dataForm:NgForm;

  dataArr = [
    {
      title:'Lorem ipsum',
      body:'Lorem ipsum dolor sit amet'
    },
    {
      title:'Excepteur sint ',
      body:'Excepteur sint occaecat cupidatat non proident'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAddNew(){
    this.dataForm.reset();
  }

  onAddData(data:Notes){
    // console.log(data);
    this.dataArr.push(data);
  }

  onDelete(index:number){
    // console.log(index);
    this.dataArr.splice(index, 1)
  }

}

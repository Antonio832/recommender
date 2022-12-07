import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReomendacionComponent } from '../dialogs/reomendacion.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  selected: any[] = []

  selectTextBox = '' 

  heroArr = [
    'Ruby',
    'AWS',
    'redhat',
    'data analytics',
    'embeded',
    'R',
    'information security',
    'Python',
    'React.js',
    'Networking',
  ]

  cards = [
    {
      title: '1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum cum aut eligendi voluptas amet, sunt expedita similique consectetur beatae quis?.',
      img: ''
    },
    {
      title: '2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum cum aut eligendi voluptas amet, sunt expedita similique consectetur beatae quis?.',
      img: ''
    },
    {
      title: '3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum cum aut eligendi voluptas amet, sunt expedita similique consectetur beatae quis?.',
      img: ''
    },
    {
      title: '4',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum cum aut eligendi voluptas amet, sunt expedita similique consectetur beatae quis?.',
      img: ''
    },
    {
      title: '5',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum cum aut eligendi voluptas amet, sunt expedita similique consectetur beatae quis?.',
      img: ''
    },
  ]

  ngOnInit(): void {
  }

  remove(chip: any): void {
    const index = this.selected.indexOf(chip);

    if (index >= 0) {
      this.selected.splice(index, 1);
    }
  }

  setitems(arr: any[] = []){
    this.selected = [...arr]
  }

  recomend(){
    const dialogRef = this.dialog.open(ReomendacionComponent,{
      data: [...this.selected]
    })
  }

}

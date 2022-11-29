import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-button-cluster',
  templateUrl: './button-cluster.component.html',
  styleUrls: ['./button-cluster.component.scss']
})
export class ButtonClusterComponent implements OnInit, AfterViewInit {

  constructor() { }

  @Input() items!: any[]

  fetched = []

  clusterRef!: any[]
  
  @ViewChild('cluster') cluster!: any

  @Output() onBtnToggle = new EventEmitter<any[]>()

  async ngAfterViewInit() {
    // this.clusterRef = await this.cluster.nativeElement.childNodes
    await this.cluster.nativeElement.childNodes[0].check
    // await this.clusterRef[0].check
  }

  ngOnInit(): void {
    fetch('https://random-word-api.herokuapp.com/word?number=100').then(res=>{
      res.json().then(words=>{
        this.topicsArr = words
      })
    })
  }

  topicsArr = [
    {
      txt: 'Python',
      val: 'python'
    },
    {
      txt: 'C++',
      val: 'C++'
    },
    {
      txt: 'Javascript',
      val: 'Javascript'
    },
    {
      txt: 'Python',
      val: 'python'
    },
    {
      txt: 'C++',
      val: 'C++'
    },
    {
      txt: 'Javascript',
      val: 'Javascript'
    },
    {
      txt: 'Python',
      val: 'python'
    },
    {
      txt: 'C++',
      val: 'C++'
    },
    {
      txt: 'Javascript',
      val: 'Javascript'
    },
    {
      txt: 'Python',
      val: 'python'
    },
    {
      txt: 'C++',
      val: 'C++'
    },
    {
      txt: 'Javascript',
      val: 'Javascript'
    },
    {
      txt: 'Python',
      val: 'python'
    },
    {
      txt: 'C++',
      val: 'C++'
    },
    {
      txt: 'Javascript',
      val: 'Javascript'
    },
    {
      txt: 'Python',
      val: 'python'
    },
    {
      txt: 'C++',
      val: 'C++'
    },
    {
      txt: 'Javascript',
      val: 'Javascript'
    },
    {
      txt: 'Python',
      val: 'python'
    },
    {
      txt: 'C++',
      val: 'C++'
    },
    {
      txt: 'Javascript',
      val: 'Javascript'
    },
    {
      txt: 'Python',
      val: 'python'
    },
    {
      txt: 'C++',
      val: 'C++'
    },
    {
      txt: 'Javascript',
      val: 'Javascript'
    },
    {
      txt: 'Python',
      val: 'python'
    },
    {
      txt: 'C++',
      val: 'C++'
    },
    {
      txt: 'Javascript',
      val: 'Javascript'
    },
    {
      txt: 'Python',
      val: 'python'
    },
    {
      txt: 'C++',
      val: 'C++'
    },
    {
      txt: 'Javascript',
      val: 'Javascript'
    },
    {
      txt: 'Python',
      val: 'python'
    },
    {
      txt: 'C++',
      val: 'C++'
    },
    {
      txt: 'Javascript',
      val: 'Javascript'
    },
    {
      txt: 'Python',
      val: 'python'
    },
    {
      txt: 'C++',
      val: 'C++'
    },
    {
      txt: 'Javascript',
      val: 'Javascript'
    },
    {
      txt: 'Python',
      val: 'python'
    },
    {
      txt: 'C++',
      val: 'C++'
    },
    {
      txt: 'Javascript',
      val: 'Javascript'
    },
    {
      txt: 'Python',
      val: 'python'
    },
    {
      txt: 'C++',
      val: 'C++'
    },
    {
      txt: 'Javascript',
      val: 'Javascript'
    },
    {
      txt: 'Python',
      val: 'python'
    },
    {
      txt: 'C++',
      val: 'C++'
    },
    {
      txt: 'Javascript',
      val: 'Javascript'
    },
    {
      txt: 'Python',
      val: 'python'
    },
    {
      txt: 'C++',
      val: 'C++'
    },
    {
      txt: 'Javascript',
      val: 'Javascript'
    },
    {
      txt: 'Python',
      val: 'python'
    },
    {
      txt: 'C++',
      val: 'C++'
    },
    {
      txt: 'Javascript',
      val: 'Javascript'
    },
    {
      txt: 'Python',
      val: 'python'
    },
    {
      txt: 'C++',
      val: 'C++'
    },
    {
      txt: 'Javascript',
      val: 'Javascript'
    },
    {
      txt: 'Python',
      val: 'python'
    },
    {
      txt: 'C++',
      val: 'C++'
    },
    {
      txt: 'Javascript',
      val: 'Javascript'
    },
    {
      txt: 'Python',
      val: 'python'
    },
    {
      txt: 'C++',
      val: 'C++'
    },
    {
      txt: 'Javascript',
      val: 'Javascript'
    },
  ]

  changeValue(btnToggle: MatButtonToggle){
    if(btnToggle.checked && !this.items.includes(btnToggle.value)){
      this.items.push(btnToggle.value)
      console.log(this.items)
      return this.onBtnToggle.emit(this.items)
    }
    if(!btnToggle.checked){
      this.items.splice(this.items.indexOf(btnToggle.value),1)
      return this.onBtnToggle.emit(this.items)
    }
  }

  untoggle(){

  }

}

import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { doc, Firestore } from '@angular/fire/firestore';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { collection, deleteDoc, getDocs, limit, orderBy, query, where } from '@firebase/firestore';

@Component({
  selector: 'app-button-cluster',
  templateUrl: './button-cluster.component.html',
  styleUrls: ['./button-cluster.component.scss']
})
export class ButtonClusterComponent implements OnInit, AfterViewInit {

  constructor(private db: Firestore) { }

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


  topicsArr: any[] = []

  lastDoc: any

  async ngOnInit() {
    this.topicsArr = [
      {
        name: 'AI'
      },
      {
        name: 'Angular'
      },
      {
        name: 'React'
      },
    ]
    return 
    const skillsRef = collection(this.db,'skills')
    let compQuery = query(skillsRef, orderBy('name', 'asc'), limit(50))
    let querySnap = await getDocs(compQuery)
    querySnap.forEach(doc=>{
      this.topicsArr.push({...doc.data(), docRef: doc.id})
    })
  }

  
  changeValue(btnToggle: MatButtonToggle){
    if(btnToggle.checked && !this.items.includes(btnToggle.value)){
      this.items.push(btnToggle.value)
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

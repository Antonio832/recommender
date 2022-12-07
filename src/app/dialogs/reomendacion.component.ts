import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-reomendacion',
  template: `
    <div matDialogTitle >
      <h1 class="title">
        Te recomendamos lo siguiente:
      </h1>
      <p mat-card-subtitle>&#123; {{compQuery.split(',').join(', ')}} &#125;</p>
    </div>
    <div matDialogContent>
      <div *ngIf="loading" class="loading">
        <p>Pensando 🤔</p>
        <div class="loader"></div>
      </div>
      <ul *ngIf="!loading">
        <li *ngFor="let item of jobsList">{{item}}</li>
      </ul>
    </div>
    <div matDialogActions class="actions">
      <button style="margin-inline: auto;" mat-raised-button [mat-dialog-close]="data">Cerrar</button>
    </div>
  `,
  styles: [`
      .title{
        margin-bottom: 0; 
      }

      .actions{
        display: flex;
      }

      .loading{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .loader{
        width: 50px;
        aspect-ratio: 1;
        border-radius: 50%;
        background-color: silver;
        animation: loading 2s infinite ease-in-out;
      }

      @keyframes loading {
        0%{
          background-color: silver;
        }
        50%{
          background-color: rgba(192, 192, 192, 0.158);
        }
        100%{
          background-color: silver;
        }
      }
    `
  ]
})
export class ReomendacionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ReomendacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any[],
  ) { }

  compQuery: string = ''

  jobsList: any[] = []

  loading: boolean = true

  ngOnInit(): void {
    let skillsNameArr: any[] = []
    
    this.data.forEach(skill=>{
      skillsNameArr.push(skill.name)
    })
    
    this.compQuery = skillsNameArr.join(',')
    fetch(`https://sistema-recomendador.herokuapp.com/recommender?skills=${this.compQuery}`).then(res=>{
      res.json().then(resJson=>{
        const results  = resJson.data
        console.log(results)
    
        const formatedRes = results.replace(/\[|\]|"|'/g,"").split(', ')
        this.jobsList = [...new Set(formatedRes)]
        console.log(this.jobsList)
        this.loading = false
      })
    })
  }
  
}

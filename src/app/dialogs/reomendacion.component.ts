import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-reomendacion',
  template: `
    <div matDialogTitle>
      Te recomendamos
    </div>
    <div>

    </div>
    <div matDialogActions class="actions">
      <button mat-raised-button [mat-dialog-close]="data">Cerrar</button>
    </div>
  `,
  styles: [
  ]
})
export class ReomendacionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ReomendacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any[],
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    console.log(this.data)
    const compoundQuery = this.data.join(',')
    console.log(compoundQuery)

    // fetch(`https://us-central1-recommendersystem-8431c.cloudfunctions.net/recommenderAPI?skills=${compoundQuery}`).then(res=>{
    //   console.log(res)
    // })

    // this.httpClient.get('https://us-central1-recommendersystem-8431c.cloudfunctions.net/recommenderAPI?skills=Python,R,Javascript,Flutter').subscribe(res=>{
    //   res
    // })
    fetch('https://us-central1-recommendersystem-8431c.cloudfunctions.net/recommenderAPI?skills=Python,R,Javascript,Flutter',{  
      method: 'GET',  
      mode: 'cors',
      headers: {},
      credentials: "include"
    }).then(res=>{
      res.json().then(res=>{
        console.log(res)
      })
    })
  }

}

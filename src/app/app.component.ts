import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  controlForm: FormGroup;
  statuses = ['Stable', 'Critical', 'Finished']
  formbiddenNames = ["Test"]
  ngOnInit(): void {
    this.controlForm = new FormGroup({
      projectName: new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)], this.forbiddenNamesAsync),
      email: new FormControl(null,[Validators.required,Validators.email]),
      status: new FormControl(null)
    })
  }

  onSaveProject(){
    console.log(this.controlForm.value)
  }

  forbiddenNames(control: FormControl):{[s:string] : boolean}{
    if(this.formbiddenNames.indexOf(control.value) !== -1){
      return {nameIsForbidden: true};
    }
    else{
      return null
    }
  }
  forbiddenNamesAsync(control:FormControl) : Promise<any>|Observable<any>{
    const promise = new Promise<any>((resolve,reject) => {
      setTimeout(() => {
        if(control.value === "Testy"){
          resolve({'ForbiddenName': true});
        }
        else{
          resolve(null);
        }
      },1500)
    });
    return promise;
  }
}

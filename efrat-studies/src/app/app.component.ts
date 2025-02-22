import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,StudentsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'efrat-studies'
  getCurrentHour() {
    let hour=new Date().getHours();
    if((hour>19&&hour<=24)||(hour>1&&hour<=8)){
      return "good night!"
    }
    if(hour>8&&hour<=13){
      return "good morning!"
    }
    if(hour>13&&hour<=19){
      return "good noon!"
    }
    return "not good hour!"+hour
  }
}

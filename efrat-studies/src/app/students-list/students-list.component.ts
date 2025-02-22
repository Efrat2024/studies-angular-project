import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Student } from '../../models/Student.model';

@Component({
  selector: 'app-students-list',
  imports: [CommonModule],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss'
})

export class StudentsListComponent {
studendsList :Student[]=[];

ngOnInit(){
  this.addStudents()
}

addStudents(){
  this.studendsList.push(new Student(1, "stud 1", "stud 1 family", 111,"dddd",90));
  this.studendsList.push(new Student(2, "stud 2", "stud 2 family", 222,"dddd",90));
  this.studendsList.push(new Student(3, "stud 3", "stud 3 family", 333,"dddd",90));
}
deleteStudent(studentId: number) {
  debugger;
  var index = this.studendsList.findIndex((student) => student.id === studentId);
  
  if (index !== -1) {
      this.studendsList.splice(index, 1); // Remove 1 item at the found index
  }
  
  console.log(this.studendsList);
  
}
}

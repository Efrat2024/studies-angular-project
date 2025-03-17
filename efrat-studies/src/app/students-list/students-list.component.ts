import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Student } from '../../models/Student.model';
import { FormsModule } from '@angular/forms';
import { StudentDetailsComponent } from '../student-details/student-details.component';

@Component({
  selector: 'students-list',
  imports: [CommonModule, StudentDetailsComponent],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss'
})

export class StudentsListComponent {
studendsList :Student[]=[];
isEditing:boolean=false;
editingStudent: Student=new Student(); 

ngOnInit(){
  this.addStudents()
}
closeModal() {
  this.isEditing = false; // Close the modal
}
addStudent(){
  this.editingStudent=new Student();
  this.isEditing=true;
}
addStudents(){
  this.studendsList.push(new Student(1, "stud 1", "stud 1 family", 111,"dddd",90, new Date()));
  this.studendsList.push(new Student(2, "stud 2", "stud 2 family", 222,"dddd",90, new Date()));
  this.studendsList.push(new Student(3, "stud 3", "stud 3 family", 333,"dddd",90, new Date()));
}

editStudent(student: Student) {
  console.log("ffffffffffffffffff", student);
  this.editingStudent=student
  this.isEditing=true; // Clone the student object for editing
}
onClickClose(isSave:boolean){
  console.log("hhhhh0", isSave);
    if(isSave){
      this.saveStudent()
  }
  else{

  }
  this.isEditing=false;
}
  saveStudent() {
    const index = this.studendsList.findIndex(student => student.id === this.editingStudent.id);
    if (index !== -1) {
        this.studendsList[index] = { ...this.editingStudent }; // Update the student
    }
  }
deleteStudent(studentId: number) {
  var index = this.studendsList.findIndex((student) => student.id === studentId);
  
  if (index !== -1) {
      this.studendsList.splice(index, 1); // Remove 1 item at the found index
  }
  
  console.log(this.studendsList);
  
}
}

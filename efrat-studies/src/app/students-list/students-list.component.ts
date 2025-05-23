import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentService } from '../services/student.service';
import { Student } from '../models/Student.model';

@Component({
  selector: 'students-list',
  imports: [CommonModule, StudentDetailsComponent],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss'
})

export class StudentsListComponent implements OnInit {
studendsList :Student[]=[];
isEditing:boolean=false;
editingStudent: Student=new Student(0); 

constructor(private studentService: StudentService) {}

ngOnInit(){
  this.studentService.getStudentsWithDelay().then((students) => {
    this.studendsList = students;
  });
}

loadStudents() {
  this.studendsList = this.studentService.getStudents();
}

closeModal() {
  this.isEditing = false; // Close the modal
}
addStudent(){
  const maxId = this.studendsList.length > 0 
    ? Math.max(...this.studendsList.map(student => student.id)) 
    : 0;
  this.editingStudent = new Student(maxId + 1);
  this.isEditing = true;

}
trackByFn(index: number, student: Student): number {
  return student.id;
}
editStudent(student: Student) {
  this.editingStudent=student
  this.isEditing=true; // Clone the student object for editing
}
onClickClose(isSave:boolean){
    if(isSave){
      this.saveStudent()
  }
  this.isEditing=false;
}
  saveStudent() {
    const index = this.studendsList.findIndex(student => student.id === this.editingStudent.id);
    if (index !== -1) {
        console.log(this.editingStudent);
        this.studendsList[index] = { ...this.editingStudent }; // Update the student
    } else {
        this.studendsList.push(this.editingStudent);
    }

    // Recalculate and update absence days directly in the editingStudent object
}

getTotalAbsences(student: Student): number {
    return student.absences?.reduce((total, absence) => total + absence.days, 0) || 0;
}

deleteStudent(studentId: number) {
  var index = this.studendsList.findIndex((student) => student.id === studentId);
  
  if (index !== -1) {
      this.studendsList.splice(index, 1); // Remove 1 item at the found index
  }
  
  console.log(this.studendsList);
  
}
}

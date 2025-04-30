import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models/Student.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'student-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss'
})
export class StudentDetailsComponent {
  @Input() editingStudent!: Student; 
  @Output() closeOutput= new EventEmitter<boolean>(); 
ngOnInit(){

}  

  closeModal(save: boolean = false) {
    console.log("Emitting closeOutput with save: ", save);
    this.closeOutput.emit(save);
}
}

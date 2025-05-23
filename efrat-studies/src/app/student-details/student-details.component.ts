import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Jobs, StudiesDays, Years } from '../models/Student.model';
import { Student } from '../models/Student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'student-details',
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  @Input() editingStudent!: Student; 
  @Output() closeOutput = new EventEmitter<boolean>(); 
  form!: FormGroup;
  StudiesDays=StudiesDays
  yaer=Years
  successMessage: string = '';
  absenceDays: number | null = null;
  absenceDate: Date | null = null;
  private fb = inject(FormBuilder);
  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.form = this.fb.group({
      firstName: [this.editingStudent.firstName, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastName: [this.editingStudent.lastName, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      phone: [this.editingStudent.phone, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      job: [this.editingStudent.job, [Validators.required]],
      year: [this.editingStudent.year, [Validators.required]],
      absenceDays: [this.absenceDays, [Validators.required, Validators.min(1)]],
      absenceDate: [this.absenceDate, [Validators.required]]
    });
  }

  closeModal(save: boolean = false) {
    if (save) {
        Object.assign(this.editingStudent, this.form.value);

        // Ensure absenceDays and absenceDate are added to the absences array
        if (this.form.value.absenceDays && this.form.value.absenceDate) {
            this.editingStudent.absences = [
                ...this.editingStudent.absences,
                {
                    startDate: new Date(this.form.value.absenceDate),
                    days: this.form.value.absenceDays
                }
            ];
        }

        this.successMessage = `Student ${this.editingStudent.firstName} ${this.editingStudent.lastName} updated successfully!`;
    }
    this.closeOutput.emit(save);
  }

  getJobEnum() {
    return Object.values(Jobs);
  }

  getYearsEnum() {
    return Object.values(Years);
  }

  getTotalAbsences(student: Student): number {
    return this.studentService.getTotalAbsencesById(student.id);
  }
}

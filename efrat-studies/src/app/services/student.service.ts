import { Injectable } from '@angular/core';
import { Student } from '../models/Student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // Updated students array to include examples of students with absences.
  private readonly students: Student[] = [
    new Student(1, "stud 1", "stud 1 family", 111, "Job 1", 100, new Date(), true, [
      { startDate: new Date('2023-01-10'), days: 2 },
      { startDate: new Date('2023-02-15'), days: 3 }
    ], []),
    new Student(2, "stud 2", "stud 2 family", 222, "Job 2", 50, new Date(), true, [
      { startDate: new Date('2023-03-01'), days: 1 }
    ], []),
    new Student(3, "stud 3", "stud 3 family", 333, "Job 3", 90, new Date(), false, [
      { startDate: new Date('2023-04-20'), days: 4 },
      { startDate: new Date('2023-05-05'), days: 2 }
    ], []),
  ];

  getStudents(): Student[] {
    return this.students;
  }

  getStudentsWithDelay(): Promise<Student[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.students);
      }, 3000);
    });
  }

  getStudentAverageById(studentId: number): number {
    const student = this.students.find(s => s.id === studentId);
    if (!student || !student.grades || student.grades.length === 0) {
      return 0;
    }
    const total = student.grades.reduce((sum, grade) => sum + grade, 0);
    return total / student.grades.length;
  }

  getTotalAbsencesById(studentId: number): number {
    const student = this.students.find(s => s.id === studentId);
    if (!student || !student.absences) {
      return 0;
    }
    return student.absences.reduce((total, absence) => total + absence.days, 0);
  }
}
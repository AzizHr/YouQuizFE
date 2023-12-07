import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {SubjectService} from "../../services/subject.service";
import {SubjectResponse} from "../../models/SubjectResponse";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
})
export class SubjectsComponent implements OnInit {
  subjects: SubjectResponse[] = [];

  ngOnInit(): void {
    this.getSubjects();
  }

  constructor(private subjectService: SubjectService) {}

  getSubjects(): void {
    this.subjectService.findAll().subscribe((data) => {
      this.subjects = data.subjects;
      console.log(data);
    });
  }

  confirmDelete(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteSubject(id);
      }
    });
  }

  deleteSubject(id: number): void {
    this.subjectService.delete(id).subscribe((data) => {
      console.log(data);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${data.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
      this.getSubjects();
    });
  }
}

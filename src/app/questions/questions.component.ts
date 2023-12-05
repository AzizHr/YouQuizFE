import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { QuestionService } from '../services/question/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
})
export class QuestionsComponent implements OnInit {
  questions: any = [];

  ngOnInit(): void {
    this.getQuestions();
  }

  constructor(private questionsService: QuestionService) {}

  getQuestions(): void {
    this.questionsService.findAll().subscribe((data) => {
      this.questions = data.questions;
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
        this.deleteQuestion(id);
      }
    });
  }

  deleteQuestion(id: number): void {
    this.questionsService.delete(id).subscribe((data) => {
      console.log(data);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${data.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
      this.getQuestions();
    });
  }
}

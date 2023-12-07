import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ValidationService} from "../../../services/validation/validation.service";
import {QuestionService} from "../../../services/question/question.service";
import {ResponseService} from "../../../services/response/response.service";

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-validation.component.html'
})
export class EditValidationComponent implements OnInit {
  validationId: any;
  questions: any;
  responses: any;
  validation: any = {};

  constructor(private route: ActivatedRoute, private validationService: ValidationService, private questionService: QuestionService, private responseService: ResponseService, private router: Router) {}

  ngOnInit(): void {
    this.validationId = this.route.snapshot.paramMap.get('id');
    this.getValidation();
    this.getQuestions();
    this.getResponses();
  }

  getValidation(): void {
    this.validationService.findById(this.validationId).subscribe(data => {
      console.log(data.validation);
      this.validation = data.validation;
    });
  }

  getQuestions(): void {
    this.questionService.findAll().subscribe(data => {
      this.questions = data.questions;
    });
  }

  getResponses(): void {
    this.responseService.findAll().subscribe(data => {
      this.responses = data.responses;
    });
  }

  editValidation(): void {
    const validationRequest = {
      id: this.validation.id,
      points: this.validation.points,
      questionId: this.validation.question.id,
      responseId: this.validation.response.id
    }

    this.validationService.update(validationRequest).subscribe(data => console.log(data))
    this.router.navigate(['/validations']);
  }
}

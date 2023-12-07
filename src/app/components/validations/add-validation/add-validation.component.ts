import { Component, OnInit } from '@angular/core';
import {ValidationService} from "../../../services/validation/validation.service";
import {QuestionService} from "../../../services/question/question.service";
import {ResponseService} from "../../../services/response/response.service";

@Component({
    selector: 'app-add-subject',
    templateUrl: './add-validation.component.html'
})

export class AddValidationComponent implements OnInit {

    points: number = 0;
    questionId: number = 0;
    responseId: number = 0;

    questions: any;
    responses: any;

    ngOnInit(): void {
        this.getQuestions();
        this.getResponses();
    }

    constructor(private validationService: ValidationService, private questionService: QuestionService, private responseService: ResponseService) {}

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

    addValidation() {

        const validation = {
            points: this.points,
            questionId: this.questionId,
            responseId: this.responseId
        }

        return this.validationService.addValidation(validation).subscribe(validation => console.log(validation))
    }
}

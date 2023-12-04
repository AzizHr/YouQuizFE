import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SubjectService } from 'src/app/services/question.service';

@Component({
    selector: 'app-add-question',
    templateUrl: './add-question.component.html'
})

export class AddQuestionComponent implements OnInit {

    @Output() onAddSubject: EventEmitter<any> = new EventEmitter();
    title: string = '';
    parentId: number = 0;

    questions: any = [];

    ngOnInit(): void {
        this.getQuestions();
    }

    constructor(private questionService: QuestionService) {}

    getQuestions(): void {
        this.questionService.findAll().subscribe(data => {
            this.questions = data.questions;
        });
    }

    addSubject() {

        if(!this.title) {
            alert('Please provide a title');
        }

        const subject = {
            title: this.title,
            parentId: this.parentId
        }

        return this.subjectService.addSubject(subject).subscribe(subject => console.log(subject))
    }
}
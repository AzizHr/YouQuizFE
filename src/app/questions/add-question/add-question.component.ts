import { Component, OnInit } from '@angular/core';
import { LevelService } from 'src/app/services/level.service';
import { QuestionService } from 'src/app/services/question/question.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
    selector: 'app-add-question',
    templateUrl: './add-question.component.html'
})

export class AddQuestionComponent implements OnInit {

    content: string = '';
    numberOfCorrectResponses: number = 0;
    numberOfResponses: number = 0;
    points: number = 0;
    type: string = '';
    levelId: number = 0;
    subjectId: number = 0;

    levels: any = []
    subjects: any = []

    ngOnInit(): void {
        this.getLevels();
        this.getSubjects();
    }

    constructor(private questionService: QuestionService, private levelService: LevelService, private subjectService: SubjectService) {}


    getLevels(): void {
        this.levelService.findAll().subscribe((data) => {
          this.levels = data.levels;
          console.log(data);
        });
    }

    getSubjects(): void {
        this.subjectService.findAll().subscribe((data) => {
          this.subjects = data.subjects;
          console.log(data);
        });
    }


    addQuestion() {

        if(!this.content || !this.numberOfCorrectResponses || !this.numberOfResponses || !this.points || !this.type) {
            alert('All fiels are required');
        }

        const question = {
            content: this.content,
            numberOfCorrectResponses: this.numberOfCorrectResponses,
            numberOfResponses: this.numberOfResponses,
            points: this.points,
            type: this.type,
            levelId: this.levelId,
            subjectId: this.subjectId
        }

        return this.questionService.addQuestion(question).subscribe(question => console.log(question))
    }
}
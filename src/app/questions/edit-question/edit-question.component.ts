import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LevelService } from 'src/app/services/level.service';
import { QuestionService } from 'src/app/services/question/question.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
})
export class EditQuestionComponent implements OnInit {
  questionId: any;
  question: any = {};

  levels: any = [];
  subjects: any = [];

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private levelService: LevelService,
    private subjectService: SubjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.questionId = this.route.snapshot.paramMap.get('id');
    this.getQuestion();
    this.getLevels();
    this.getSubjects();
  }

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

  getQuestion(): void {
    this.questionService.findById(this.questionId).subscribe((data) => {
      console.log(data.question);
      this.question = data.question;
    });
  }

  editQuestion(): void {
    this.questionService
      .update(this.question)
      .subscribe((data) => console.log(data));
    this.router.navigate(['/questions']);
  }
}

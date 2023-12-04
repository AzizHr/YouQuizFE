import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html'
})
export class EditQuestionComponent implements OnInit {
  questionId: any;
  question: any = {};

  constructor(private route: ActivatedRoute, private questionService: QuestionService, private router: Router) {}
  
  ngOnInit(): void {
    this.questionId = this.route.snapshot.paramMap.get('id');
    this.getQuestion();
  }

  getQuestion(): void {
    this.questionService.findById(this.questionId).subscribe(data => {
      console.log(data.question);
      this.question = data.question;
    });
  }


  editQuestion(): void {
    this.questionService.update({id: this.subject.id, title: this.subject.title, parentId: this.subject.parent.id}).subscribe(data => console.log(data))
    this.router.navigate(['/questions']);
  }
}

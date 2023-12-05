import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaService } from 'src/app/services/media/media.service';
import { QuestionService } from 'src/app/services/question/question.service';

@Component({
  selector: 'app-edit-media',
  templateUrl: './edit-media.component.html'
})


export class EditMediaComponent implements OnInit {
  mediaId: any;
  questions: any;
  media: any = {};

  constructor(private route: ActivatedRoute, private mediaService: MediaService, private questionService: QuestionService, private router: Router) {}
  
  ngOnInit(): void {
    this.mediaId = this.route.snapshot.paramMap.get('id');
    this.getMedia();
    this.getQuestions();
  }

  getMedia(): void {
    this.mediaService.findById(this.mediaId).subscribe(data => {
      console.log(data.media);
      this.media = data.media;
    });
  }

  getQuestions(): void {
    this.questionService.findAll().subscribe(data => {
      this.questions = data.questions;
    });
  }

  editMedia(): void {
    this.mediaService.update({id: this.media.id, type: this.media.type, url: this.media.url, questionId: this.media.questionId}).subscribe(data => console.log(data))
    this.router.navigate(['/medias']);
  }
}

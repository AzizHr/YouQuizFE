import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/services/media/media.service';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
})
export class AddMediaComponent implements OnInit {
  type: string = '';
  url: string = '';
  questionId: number = 0;

  questions: any = [];

  ngOnInit(): void {
    this.getQuestions();
  }

  constructor(private mediaService: MediaService) {}

  getQuestions(): void {
    this.mediaService.findAll().subscribe((data) => {
      this.questions = data.questions;
    });
  }

  addMedia() {
    if (!this.type || !this.url) {
      alert('All fields are required');
    }

    const media = {
      type: this.type,
      url: this.url,
      questionId: this.questionId,
    };

    return this.mediaService
      .addMedia(media)
      .subscribe((media) => console.log(media));
  }
}

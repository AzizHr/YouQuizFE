import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseService } from 'src/app/services/response.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html'
})
export class EditResponseComponent implements OnInit {
  responseId: any;
  response: any = {};

  constructor(private route: ActivatedRoute, private responseService: ResponseService, private router: Router) {}
  
  ngOnInit(): void {
    this.responseId = this.route.snapshot.paramMap.get('id');
    this.getResponse();
  }

  getResponse(): void {
    this.responseService.findById(this.responseId).subscribe(data => {
      console.log(data.subject);
      this.response = data.response;
    });
  }

  editSubject(): void {
    this.responseService.update({id: this.subject.id, title: this.subject.title, parentId: this.subject.parent.id}).subscribe(data => console.log(data))
    this.router.navigate(['/responses']);
  }
}

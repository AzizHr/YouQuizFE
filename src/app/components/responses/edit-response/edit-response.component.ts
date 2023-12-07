import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseService } from 'src/app/services/response/response.service';

@Component({
  selector: 'app-edit-response',
  templateUrl: './edit-response.component.html'
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
      console.log(data.response);
      this.response = data.response;
    });
  }

  editResponse(): void {
    this.responseService.update(this.response).subscribe(data => console.log(data))
    this.router.navigate(['/responses']);
  }
}

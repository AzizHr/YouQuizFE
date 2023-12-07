import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-validation.component.html'
})
export class EditValidationComponent implements OnInit {
  subjectId: any;
  subjects: any;
  subject: any = {};

  constructor(private route: ActivatedRoute, private subjectService: SubjectService, private router: Router) {}

  ngOnInit(): void {
    this.subjectId = this.route.snapshot.paramMap.get('id');
    this.getSubject();
    this.getSubjects();
  }

  getSubject(): void {
    this.subjectService.findById(this.subjectId).subscribe(data => {
      console.log(data.subject);
      this.subject = data.subject;
    });
  }

  getSubjects(): void {
    this.subjectService.findAll().subscribe(data => {
      this.subjects = data.subjects;
    });
  }

  editSubject(): void {
    if(!this.subjectId) {
      this.subjectService.update({id: this.subject.id, title: this.subject.title}).subscribe(data => console.log(data))
      this.router.navigate(['/subjects']);
    } else {
      this.subjectService.update({id: this.subject.id, title: this.subject.title, parentId: this.subject.parent.id}).subscribe(data => console.log(data))
      this.router.navigate(['/subjects']);
    }
  }
}

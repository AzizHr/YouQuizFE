import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';

@Component({
    selector: 'app-subjects',
    templateUrl: './subjects.component.html'
})

export class SubjectsComponent implements OnInit {

    subjects: any = [];

    ngOnInit(): void {
        this.getSubjects();
    }

    constructor(private subjectService: SubjectService) {}

    getSubjects(): void {
        this.subjectService.findAll().subscribe(data => {
            this.subjects = data.subjects;
            console.log(data);
        });
    }

    deleteSubject(subject: any): void {
        this.subjectService.delete(subject).subscribe(data => {
            console.log(data);
        });
    }
    
}
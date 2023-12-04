import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
    selector: 'app-add-subject',
    templateUrl: './add-subject.component.html'
})

export class AddSubjectComponent implements OnInit {

    @Output() onAddSubject: EventEmitter<any> = new EventEmitter();
    title: string = '';
    parentId: number = 0;

    subjects: any = [];

    ngOnInit(): void {
        this.getSubjects();
    }

    constructor(private subjectService: SubjectService) {}

    getSubjects(): void {
        this.subjectService.findAll().subscribe(data => {
            this.subjects = data.subjects;
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
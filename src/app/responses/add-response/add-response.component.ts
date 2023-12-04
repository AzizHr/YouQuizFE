import { Component, OnInit } from '@angular/core';
import { ResponseService } from 'src/app/services/response.service';

@Component({
    selector: 'app-add-response',
    templateUrl: './add-response.component.html'
})

export class AddResponseComponent implements OnInit {

    title: string = '';
    parentId: number = 0;

    responses: any = [];

    ngOnInit(): void {}

    constructor(private responseService: ResponseService) {}


    addResponse() {

        if(!this.title) {
            alert('Please provide a title');
        }

        const response = {
            title: this.title,
            parentId: this.parentId
        }

        return this.responseService.addSubject(response).subscribe(response => console.log(subject))
    }
}
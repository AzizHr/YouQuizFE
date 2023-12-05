import { Component, OnInit } from '@angular/core';
import { ResponseService } from 'src/app/services/response/response.service';

@Component({
    selector: 'app-add-response',
    templateUrl: './add-response.component.html'
})

export class AddResponseComponent implements OnInit {

    content: string = '';

    ngOnInit(): void {}

    constructor(private responseService: ResponseService) {}


    addResponse() {

        if(!this.content) {
            alert('Please provide a content');
        }

        const response = {
            content: this.content
        }

        return this.responseService.addResponse(response).subscribe(response => console.log(response))
    }
}
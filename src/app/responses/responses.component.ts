import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../services/response.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
})
export class ResponsesComponent implements OnInit {
  responses: any = [];

  ngOnInit(): void {
    this.getResponses();
  }

  constructor(private responseService: ResponseService) {}

  getResponses(): void {
    this.responseService.findAll().subscribe((data) => {
      this.responses = data.responses;
      console.log(data);
    });
  }

  confirmDelete(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteSubject(id);
      }
    });
  }

  deleteSubject(id: number): void {
    this.responseService.delete(id).subscribe((data) => {
      console.log(data);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${data.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
      this.getResponses();
    });
  }
}

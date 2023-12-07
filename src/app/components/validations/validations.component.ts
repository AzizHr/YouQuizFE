import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {ValidationService} from "../../services/validation/validation.service";

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
})
export class ValidationsComponent implements OnInit {
  validations: any;

  ngOnInit(): void {
    this.getValidations();
  }

  constructor(private validationService: ValidationService) {}

  getValidations(): void {
    this.validationService.findAll().subscribe((data) => {
      this.validations = data.validations;
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
        this.deleteValidation(id);
      }
    });
  }

  deleteValidation(id: number): void {
    this.validationService.delete(id).subscribe((data) => {
      console.log(data);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${data.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
      this.getValidations();
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { LevelService } from 'src/app/services/level.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
})
export class LevelsComponent implements OnInit {
  levels: any = [];

  ngOnInit(): void {
    this.getLevels();
  }

  constructor(private levelService: LevelService) {}

  getLevels(): void {
    this.levelService.findAll().subscribe((data) => {
      this.levels = data.levels;
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
    this.levelService.delete(id).subscribe((data) => {
      console.log(data);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${data.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
      this.getLevels();
    });
  }
}

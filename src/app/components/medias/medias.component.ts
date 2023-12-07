import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/services/media/media.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
})
export class MediasComponent implements OnInit {
  
  medias: any = [];

  ngOnInit(): void {
    this.getMedias();
  }

  constructor(private mediaService: MediaService) {}

  getMedias(): void {
    this.mediaService.findAll().subscribe((data) => {
      this.medias = data.medias;
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
        this.deleteMedia(id);
      }
    });
  }

  deleteMedia(id: number): void {
    this.mediaService.delete(id).subscribe((data) => {
      console.log(data);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${data.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
      this.getMedias();
    });
  }
}

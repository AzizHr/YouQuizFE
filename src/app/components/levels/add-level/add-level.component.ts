import { Component, OnInit } from '@angular/core';
import { LevelService } from 'src/app/services/level.service';

@Component({
  selector: 'app-add-level',
  templateUrl: './add-level.component.html',
})
export class AddLevelComponent implements OnInit {
  description: string = '';
  maxPoints: number = 0;
  minPoints: number = 0;

  ngOnInit(): void {}

  constructor(private levelService: LevelService) {}

  addLevel() {
    if (!this.description || !this.maxPoints || !this.minPoints) {
      alert('all fiels are required');
    }

    const level = {
      description: this.description,
      maxPoints: this.maxPoints,
      minPoints: this.minPoints,
    };

    return this.levelService
      .addLevel(level)
      .subscribe((level) => console.log(level));
  }
}

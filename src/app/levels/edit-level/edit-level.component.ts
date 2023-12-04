import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LevelService } from 'src/app/services/level.service';

@Component({
  selector: 'app-edit-level',
  templateUrl: './edit-level.component.html',
})
export class EditLevelComponent implements OnInit {
  levelId: any;
  level: any = {};

  constructor(
    private route: ActivatedRoute,
    private subjectService: LevelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.levelId = this.route.snapshot.paramMap.get('id');
    this.getLevel();
  }

  getLevel(): void {
    this.subjectService.findById(this.levelId).subscribe((data) => {
      console.log(data.level);
      this.level = data.level;
    });
  }

  editLevel(): void {
    this.subjectService
      .update({
        id: this.level.id,
        description: this.level.description,
        maxPoints: this.level.maxPoints,
        minPoints: this.level.minPoints,
      })
      .subscribe((data) => console.log(data));
    this.router.navigate(['/levels']);
  }
}

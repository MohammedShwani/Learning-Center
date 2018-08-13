import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  totalLessons = 20
  completedLessons = 16

  constructor() { }

  ngOnInit() {
    this.initSemanticUIViews(this.totalLessons, this.completedLessons)
  }

  initSemanticUIViews(totalLessons, completedLessons) {
    $(document).ready(function() {

      (<any>$('#lesson-complete-progress')).progress({
        total: totalLessons,
        value: completedLessons,
        text: {
          active  : "{value} of {total} lessons complete",
          success : 'All lessons completed'
        }
      });
  
      (<any>$('.ui.accordion')).accordion();
    
    });
  }

}

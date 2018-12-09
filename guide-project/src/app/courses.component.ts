import { CoursesService } from './courses.service';
import { Component } from '@angular/core';
// Decorator function
// modify dom *ngFor
@Component({
  selector: 'courses',
  template: `
    <h2>{{title}}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <img src="{{ imgUrl }}" />
    `
})
export class CoursesComponent {
  title = "List of courses";
  imgUrl = "http://lorempixel.com/g/800/400/";
  courses;
  constructor(service: CoursesService) {
    // let service = new CoursesService();
    this.courses = service.getCourses();
  }
}

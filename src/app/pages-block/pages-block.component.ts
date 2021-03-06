import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ICoursePage } from '../interfaces/course.interface';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-pages-block',
  templateUrl: './pages-block.component.html',
  styleUrls: ['./pages-block.component.scss'],
})

export class PagesBlockComponent implements OnInit {

  @Output() addButtonClicked: EventEmitter<void> = new EventEmitter()

  courses: ICoursePage[] = [];

  constructor(private coursesPagesService: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.coursesPagesService.getCoursesList()
  }

  deleteComponent(id: string): void {
    if (confirm('Do you really want to delete this course? Yes/No')) {
      this.courses = this.coursesPagesService.deleteCourse(id)
    }
  }

  loadNewCourses(): void {
    console.log('here is come action');
  }

  changeRate(course: ICoursePage): void {
    course.topRated = !course.topRated;
    this.coursesPagesService.updateCourse(course);
  }

  findClick(inputData: string): void {
    if (inputData !== '') {
      this.courses = this.courses.filter(course => course.title.toLowerCase().includes(inputData.toLowerCase()))
    } else {
      this.courses = this.coursesPagesService.getCoursesList();
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  standalone: false,

  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
	courses:Course[] = []; /*PARA NAO FICAR EM ANY, VAMOS CRIAR UMA INTERFACE COM O MODELO QUE DEVE SER SEGUIDO*/
	displayedColumns= ['name', 'category'];
	constructor(coursesService:CoursesService){
		this.courses = coursesService.list();
	}
	ngOnInit(): void {
	}

}

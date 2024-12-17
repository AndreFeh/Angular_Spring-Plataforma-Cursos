import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  standalone: false,

  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
	courses$:Observable<Course[]>;	/** BOAS PRATICAS PARA INFORMAR QUE ISSO É UM OBSERVABLE */
	/*PARA NAO FICAR EM ANY, VAMOS CRIAR UMA INTERFACE COM O MODELO QUE DEVE SER SEGUIDO*/
	/*PARA NAO FICAR RECLAMANDO, PODEMOS INSERÍ-LO DENTRO DE CONSTRUCTOR, CHAMANDO O METODO DE LISTAR OS ELEMENTOS DE DADOS VINDOS DE UMA API BACK */
	displayedColumns= ['name', 'category'];

	constructor(private coursesService:CoursesService){
		this.courses$ = this.coursesService.list();
	}
	ngOnInit(): void {

	}

}

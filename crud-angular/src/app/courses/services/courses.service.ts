import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Course } from '../models/course';
import { delay, first,  tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
	private readonly API='./assets/courses.json';

  constructor(private httpClient:HttpClient) { }
  list(){
	return this.httpClient.get<Course[]>(this.API)
	.pipe(
		// take(1), // ASSIM QUE O SERVE RETORNARA A INFORMAÇÃO ELE FECHARÁ A CHAMADA, EVITA FICAR ABERTO
		first(), // RETORNA O PRIMEIRO ITEM DO ARRAY E FECHA A CHAMADA
		delay(5000),
		tap((courses)=> console.log(courses))
	);
  }
}

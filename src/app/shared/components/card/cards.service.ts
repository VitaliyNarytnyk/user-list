import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../../interfaces";

@Injectable({ providedIn: 'root' })

export class CardsService {

	constructor(
		private http: HttpClient
	) { }

	getAll(): Observable<User[]> {
		return this.http.get<User[]>(`${environment.jsonUrl}/users`)
	}

}
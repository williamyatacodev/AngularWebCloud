import { Injectable } from '@angular/core';
import { User } from 'app/model/User';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = `${environment.HOST}/users`;

  constructor(private http: HttpClient) { }

  listarUsuarios(){
    return this.http.get<any>(`${this.url}`);
  }

  listarUsuariosXEspecialidad(especialidad : String){
    return this.http.get<any>(`${this.url}/speciality/${especialidad}`);
  }
}

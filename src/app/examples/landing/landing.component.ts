import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/User';
import { UserService } from 'app/service/user.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  persons: User[];
  totalRecords: Number;
  page:Number=1;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.callListPerson();
  }

  callListPerson(){

    this.userService.listarUsuarios().subscribe(response => {
        this.persons = response.data.users;
        this.totalRecords = response.data.users.length;
    });

  }

  changeEspecialidad(value:String) {
    if(value.length > 0){
      this.userService.listarUsuariosXEspecialidad(value).subscribe(response => {
        this.persons = response.data.users;
        this.totalRecords = response.data.users.length;
      });
    }else{
      this.callListPerson();
    }
    
  }

}

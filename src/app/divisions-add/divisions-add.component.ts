import { Component, OnInit } from '@angular/core';
import { Division } from '../model/division.model';
import { DivisionService } from '../services/division.service';
@Component({
  selector: 'app-divisions-add',
  templateUrl: './divisions-add.component.html',
  styleUrls: ['./divisions-add.component.css']
})
export class DivisionsAddComponent implements OnInit {
  division: Division = {
    name: '',
    description: '',
  };
  submitted = false;
  constructor(private divisionService:DivisionService) { }

  ngOnInit(): void {
  }
  saveDivision(): void {
    const data = {
      name: this.division.name,
      description: this.division.description
    };
  
    this.divisionService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newDivision(): void {
    this.submitted = false;
    this.division = {
      name: '',
      description: ''
    };
  }
}
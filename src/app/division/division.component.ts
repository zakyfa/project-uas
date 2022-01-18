import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Division } from '../model/division.model';
import { DivisionService } from '../services/division.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  divisions?:Division[];
  currentDivision:Division={};
  name='';
  constructor(private divisionService: DivisionService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.retrieveDivision()
  }
  deleteDivision(division_id:any): void {
    this.divisionService.delete(division_id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/divisi'])
          .then(() => {
            window.location.reload();
          });
        },
        error => {
          console.log(error);
        });
  }
  retrieveDivision():void{
    this.divisionService.getAll()
      .subscribe(
        data=>{
          this.divisions=data;
          console.log(data);
        },
        error=>{
          console.log(error)
        }
      )

  }
}

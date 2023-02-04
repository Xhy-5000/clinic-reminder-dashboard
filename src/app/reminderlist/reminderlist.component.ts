import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table' 

type listItem={
	"id": number,
  "name": string,
  "priority": number[]
  }
  
type Result ={
	code: number;
	msg: string;
	obj: listItem[];
	count:number
  }
  export interface ReminderList {
    name: string;
    patientid: number,
    high: number;
    mid: number;
    low: number;
  }
  const ELEMENT_DATA:ReminderList[] = [
    {name:"unnamed", patientid:0, high:0, mid:0, low:0},
  ];

@Component({
  selector: 'app-reminderlist',
  templateUrl: './reminderlist.component.html',
  styleUrls: ['./reminderlist.component.css']
})
export class ReminderlistComponent implements OnInit{
  constructor(private http:HttpClient){}
  displayedColumns: string[] = ['name', 'patientid', 'high', 'mid', 'low'];
  dataSource = ELEMENT_DATA;
  ngOnInit() {
    let id = localStorage.getItem('id');
    const HTTPheaders = new HttpHeaders().set("Content-type", "application/json");
		const HTTPparams = new HttpParams().set("id",id!);
		const options = {  headers: HTTPheaders, params: HTTPparams };
    this.http.get<Result>("http://localhost:8080/doctor/list", options)
    .subscribe(res=>{
      console.log(1111);
      console.log(res);
      let reminders:ReminderList[]=[];
      res.obj.forEach(function (value){
        let item: ReminderList={name:value.name, patientid:value.id, high:value.priority[0],mid:value.priority[1],low:value.priority[2]};
        reminders.push(item);
      });
      this.dataSource= reminders;
    })
    
  }

}

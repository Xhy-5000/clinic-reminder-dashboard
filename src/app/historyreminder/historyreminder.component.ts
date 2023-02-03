import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Chart } from 'chart.js/auto';


type Obj={
	1:number;
  2:number;
  3:number;
  4:number;
  5:number;
  6:number;
  7:number
  }
  
type Result ={
	code: number;
	msg: string;
	obj: Obj;
	count:number
  }
@Component({
  selector: 'app-historyreminder',
  templateUrl: './historyreminder.component.html',
  styleUrls: ['./historyreminder.component.css']
})
export class HistoryreminderComponent implements OnInit{
  private data = [
    { date: 1, count: 1 },
    { date: 2, count: 2 },
    { date: 3, count: 3 },
    { date: 4, count: 4 },
    { date: 5, count: 5 },
    { date: 6, count: 6 },
    { date: 7, count: 7 },
  ];
  private chart = new Chart(
    'myChart',
    {
      type: 'bar',
      data: {
        labels: this.data.map(row => row.date),
        datasets: [
          {
            label: 'Unfinished Reminders Last Week',
            data: this.data.map(row => row.count)
          }
        ]
      }
    }
  );
  constructor(private http:HttpClient){}
  ngOnInit(){}
    historyFormGroup = new FormGroup({
		patientid: new FormControl(0)
		});
    onSubmit() {
      const patientid = this.historyFormGroup.get('patientid')!.value;
      const HTTPheaders = new HttpHeaders().set("Content-type", "application/json");
		  const HTTPparams = new HttpParams().set('patientid',patientid!);
      const options = {  headers: HTTPheaders, params: HTTPparams };

      this.http.get<Result>("http://localhost:8080/doctor/history",options)
		  .subscribe(res=>{
        console.log(11111);
			  console.log(res);
        localStorage.setItem('code',res.code.toString());
        localStorage.setItem("msg",res.msg);
        this.data[0].count= res.obj[1];
        this.data[1].count= res.obj[2];
        this.data[2].count= res.obj[3];
        this.data[3].count= res.obj[4];
        this.data[4].count= res.obj[5];
        this.data[5].count= res.obj[6];
        this.data[6].count= res.obj[7];
        // console.log(res.obj[1]);
        // console.log(res.obj[2]);
        // console.log(res.obj[3]);
        // console.log(res.obj[4]);
        // console.log(res.obj[5]);
        // console.log(res.obj[6]);
        // console.log(res.obj[7]);
        this.chart.destroy();
        this.chart = new Chart(
          'myChart',
          {
            type: 'bar',
            data: {
              labels: this.data.map(row => row.date),
              datasets: [
                {
                  label: 'Unfinished Reminders Last Week',
                  data: this.data.map(row => row.count)
                }
              ]
            }
          }
        );
     })
    }
}


import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

type Doctor={
	docotrid: number;
	doctorname:string;
	doctorpassword:string
  }
  
type Result ={
	code: number;
	msg: string;
	obj: Doctor;
	count:number
  }

@Component({
  selector: 'app-postreminder',
  templateUrl: './postreminder.component.html',
  styleUrls: ['./postreminder.component.css']
})
export class PostreminderComponent implements OnInit{
  postFormGroup = new FormGroup({
    patientid: new FormControl(0),
    detail: new FormControl(""),
    // posttime: new FormControl('00:00'),
    existtime: new FormControl(0),
    priority: new FormControl('HIGH')
  });
  constructor(private http:HttpClient){}
  ngOnInit() {}
  onSubmit(){
    const patientid = this.postFormGroup.get("patientid")!.value;
    let detail = this.postFormGroup.get("detail")!.value;
    // const posttime = this.postFormGroup.get("posttime")!.value;
    const existtime = this.postFormGroup.get("existtime")!.value;
    const priority = this.postFormGroup.get("priority")!.value;
    const HTTPheaders = new HttpHeaders().set("Content-type", "application/json");
		const HTTPparams = new HttpParams()
    .set("doctorid", localStorage.getItem("id")!)
    .set("patientid",patientid!)
    .set("detail",detail!)
    // .set("posttime",posttime!)
    .set("existtime", existtime!)
    .set("priority",priority!);
		const options = {  headers: HTTPheaders, params: HTTPparams };

    this.http.get<Result>("http://localhost:8080/doctor/post",options)
		.subscribe(res=>{
      console.log(1111);
      console.log(res);
      if(res.code!=0){
				alert("wrong input")
				return
			}else{
        alert("successfully post reminder!")
        this.postFormGroup.setValue({
          patientid: 0,
          detail: "",
          // posttime: new FormControl('00:00'),
          existtime: 0,
          priority: 'HIGH'});

      }
    })
  }
  

}

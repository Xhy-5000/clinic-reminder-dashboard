import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from "@angular/common/http" ;
import { HttpHeaders } from "@angular/common/http" 
import {Router} from '@angular/router'
import { AuthService } from './../auth.service';

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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
	loginFormGroup = new FormGroup({
		id: new FormControl(0),
		password: new FormControl('000000')
		});
  	public anyList:any;
  
  	constructor(private http:HttpClient,private auth: AuthService, private router: Router){}
	onSubmit() {
		const id = this.loginFormGroup.get('id')!.value;
		const password = this.loginFormGroup!.get('password')!.value;

		this.register(id!,password!);
	}

	ngOnInit(): void {
		if(this.auth.isLoggedIn()){
			this.router.navigate(["/historyreminder"]);
		}
		this.loginFormGroup = new FormGroup({
		id: new FormControl(0),
		password: new FormControl('')
		});
		console.info(this.loginFormGroup.value);
	}

	register (id:number, password:string){
		const HTTPheaders = new HttpHeaders().set("Content-type", "application/json");
		const HTTPparams = new HttpParams().set("id",id).set("password",password);
		const options = {  headers: HTTPheaders, params: HTTPparams };
		this.http.get<Result>("http://localhost:8080/doctor/login",options)
		.subscribe(res=>{ 
			console.log(11111);
			console.log(res);
			if(res.code!=0){
				alert("wrong id or password")
				return
			}
			localStorage.clear;
			localStorage.setItem("status code",res.code.toString());
			localStorage.setItem("msg",res.msg);
			// console.log(res.obj);
			// console.log(res.obj.docotrid);
			// console.log(res.obj.doctorname);
			// console.log(res.obj.doctorpassword);
			// console.log(res.object!.docotrid.toString());
			localStorage.setItem("id",id.toString());
			localStorage.setItem("name",res.obj.doctorname);
			// console.log(localStorage.getItem('id'));
			// console.log(localStorage.getItem("name"));
			// console.log(localStorage.getItem("status code"));
			// console.log(localStorage.getItem("msg"));

			this.router.navigate(["/historyreminder"]);

		})
		
	}

}
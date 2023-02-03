import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from "@angular/common/http" ;
import { HttpHeaders } from "@angular/common/http" 
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router'
import { AuthService } from './../auth.service';

type doctor={
	docotrid: number;
	doctorname:string;
	doctorpassword:string
  }
  
type Result ={
	code: number;
	msg: string;
	object: doctor|null;
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
	// @ViewChild(RouterOutlet)
	// private outlet: RouterOutlet = new RouterOutlet;
  
  	constructor(private http:HttpClient,private auth: AuthService, private router: Router){}
	onSubmit() {
		// TODO: Use EventEmitter with form value
		const id = this.loginFormGroup.get('id')!.value;
		const password = this.loginFormGroup!.get('password')!.value;
		// console.log("onSubmit() begins:");
		// console.log("id:"+id);
		// console.log("password:"+password);

		// console.warn(this.loginFormGroup.get('id')!.value);
		this.register(id!,password!);
	}

	ngOnInit(): void {
		this.loginFormGroup = new FormGroup({
		id: new FormControl(0),
		password: new FormControl('')
		});
		console.info(this.loginFormGroup.value);
	}

	register (id:number, password:string){
		const HTTPheaders = new HttpHeaders().set("Content-type", "application/json");
		//console.info(headers);
		let HTTPparams = new HttpParams().set("id",id).set("password",password);
		const options = {  headers: HTTPheaders, params: HTTPparams };
		this.http.get<Result>("http://localhost:8080/login",options)
		.subscribe(res=>{ 
			console.log(11111);
			console.log(res);
			if(res.code!=0){
				alert("wrong id or password")
				return
			}
			// localStorage.clear;
			localStorage.setItem("status code",res.code.toString());
			localStorage.setItem("msg",res.msg);
			// localStorage.setItem("id",res.object!.docotrid.toString());
			localStorage.setItem("name",res.object!.doctorname);

			// this.outlet.deactivate();
			// this.router.navigateByUrl("/reminderlist");
			// this.router.navigateByUrl("/historyreminder");
			this.router.navigate(["/historyreminder"]);

		})
		
	}

}
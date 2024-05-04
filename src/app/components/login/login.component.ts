import { Component } from '@angular/core';
import { FormControl , FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading:boolean = false;
  apiError: string = '';

  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null , [Validators.required ]),
    password:new FormControl(null , [Validators.required ]),
      // email:new FormControl(null , [Validators.required , Validators.email]),
      // password:new FormControl(null , [Validators.required , Validators.pattern(`^[A-Z]{a-z}{2,8}$`)]),
  });

constructor(public _AuthService:AuthService , public _Router :Router){}

submitLoginForm(loginForm:FormGroup){
  this.isLoading = true;
  if(loginForm.valid){
    this._AuthService.login(loginForm.value).subscribe({
      next:(response)=> {
        localStorage.setItem('userToken', response.token);
        this._AuthService.saveUserData();
        this.isLoading = false;
        this._Router.navigate(['/home'])
      },
      error:(err)=> {
        this.isLoading = false;
        this.apiError = err.error.errors.msg ;
        
      },

});
  }
     
 }


}

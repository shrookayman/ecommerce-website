import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isLoading:boolean = false;
  apiError: string = '';
  constructor(private _AuthService : AuthService , private _Router : Router){}
     registerForm: FormGroup = new FormGroup({
        name: new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(50)]),
        email: new FormControl(null , [ Validators.required , Validators.email]),
        password: new FormControl(null , [Validators.required , Validators.pattern('')]),
        rePassword: new FormControl(null , [Validators.required , Validators.pattern('')]),
        phone: new FormControl(null , [Validators.required , Validators.pattern('')]),
     })


     handleRegister(registerForm:FormGroup){
      this.isLoading = true;
      if(registerForm.valid){
        console.log(registerForm.value);
        this._AuthService.register(registerForm.value).subscribe({
          next:(response)=> {
            this.isLoading = false;
            this._Router.navigate(['/login'])
          },
          error:(err)=> {
            this.isLoading = false;
            this.apiError = err.error.errors.msg ;
            
          },

    });
      }
         
     }
}

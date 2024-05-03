import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
     registerForm: FormGroup = new FormGroup({
        name: new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(50)]),
        email: new FormControl(null , [ Validators.required , Validators.email]),
        password: new FormControl(null , [Validators.required , Validators.pattern('')]),
        rePassword: new FormControl(null , [Validators.required , Validators.pattern('')]),
        phone: new FormControl(null , [Validators.required , Validators.pattern('')]),
     })


     handleRegister(registerForm:FormGroup){
      console.log(registerForm)
     }
}

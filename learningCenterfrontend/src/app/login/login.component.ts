import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initSemanticUIFormValidationForLogin(this.loginFormSubmitHandler)
  }

  loginFormSubmitHandler() {
    console.log("done")
    return false
  }

  initSemanticUIFormValidationForLogin(onSuccessCallBack) {

    $(document).ready(function(){
      
      (<any>$('.ui.form.login'))
        .form({
        fields: {
            email: {
            identifier  : 'email',
            rules: [
                {
                type   : 'empty',
                prompt : 'Please enter your e-mail'
                },
                {
                type   : 'email',
                prompt : 'Please enter a valid e-mail'
                }
            ]
            },
            password: {
            identifier  : 'password',
            rules: [
                {
                type   : 'empty',
                prompt : 'Please enter your password'
                },
                {
                type   : 'length[6]',
                prompt : 'Your password must be at least 6 characters'
                }
            ]
            }
        }, onSuccess: onSuccessCallBack
        });
    });

  }

}

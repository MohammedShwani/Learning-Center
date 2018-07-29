import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public helperService: HelperService) { }

  ngOnInit() {
    this.initSemanticUIFormValidationForRegister(this.registerFormSubmitHandler)
  }

  registerFormSubmitHandler() {
    console.log("done")
    return false
  }

  //upon calling this function it clicks on selecting image input
  openImgSelectDialog() {
    let el = document.getElementById('selectUserImgBtn');
    el.click();
  }

  initSemanticUIFormValidationForRegister(onSuccessCallBack) {
    $(document)
    .ready(function() {

        (<any>$('.ui.form.register'))
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
            },
            passwordRepeat: {
                identifier  : 'passwordRepeat',
                rules: [
                    {
                    type   : 'empty',
                    prompt : 'Please re-enter your password'
                    },
                    {
                    type   : 'match[password]',
                    prompt : 'Password did not match'
                    }
                ]
            },
            firstname: {
                identifier: 'name1',
                rules: [
                    {
                    type   : 'empty',
                    prompt : 'Please enter your first name'
                    },
                    {
                    type   : 'length[2]',
                    prompt : 'Your first name must be at least [2] characters'
                    }
                ]
            },
            secondname: {
                identifier: 'name2',
                rules: [
                    {
                    type   : 'empty',
                    prompt : 'Please enter your second name'
                    },
                    {
                    type   : 'length[2]',
                    prompt : 'Your second name must be at least [2] characters'
                    }
                ]
            },
            userImg: {
                identifier: 'userImg',
                rules: [
                    {
                    type   : 'empty',
                    prompt : 'Please select an image'
                    }
                ]
            }
        },onSuccess: onSuccessCallBack
        });
        
    });
  }

}

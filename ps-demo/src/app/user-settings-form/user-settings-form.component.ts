import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  // here we are using "spread operator ..." will take the original user settings, and copy each property
  // so when we are changing values in the form, only the "userSettings" will be affected, but note that we make this copy
  // incase the user click on back or did not submit the changed values, we still keep the default value and not losing them
  userSettings: UserSettings = {... this.originalUserSettings}
  postError = false;
  postErrorMessage = '';
  subscriptionType: Observable<string[]>;
  singleModel = "On";
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscriptionType = this.dataService.getSubscriptionType();
  }

  

  onHttpError(errorResponse: any){
    console.log('error: ', errorResponse)
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm){
    console.log(form.valid);
    if(form.valid)
    {
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        // on success first arrow function will be executed
        result => console.log('success: ', result),
  
        // on failure second arrow function will be executed
        error => this.onHttpError(error)
      );
    }
    else{
      this.postError = true;
      this,this.postErrorMessage = "please fix above error";
    }

    
  }

  onBlur(field : NgModel){
    console.log(field);
  }

}

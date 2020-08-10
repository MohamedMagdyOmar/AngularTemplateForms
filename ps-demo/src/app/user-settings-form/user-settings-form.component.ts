import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: "Mohamed",
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'sadfasdffsa'
  };

  // here we are using "spread operator ..." will take the original user settings, and copy each property
  // so when we are changing values in the form, only the "userSettings" will be affected, but note that we make this copy
  // incase the user click on back or did not submit the changed values, we still keep the default value and not losing them
  userSettings: UserSettings = {... this.originalUserSettings}

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

//service
import { ProfileService } from '../../services/profile.service';

//model
import { Profile } from '../../../../models/interfaces/profile';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit, OnDestroy {

  profiles: Profile[] = [];
  private _profiles: Profile[] = [];

  private _getProfiles$: Subscription;
  private _filterProfiles$: Subscription;

  constructor(private _profileservice: ProfileService) { }

  ngOnInit() {
    this.initializeSubscriptions();
  }

  ngOnDestroy() {
    if (this._getProfiles$) {
      this._getProfiles$.unsubscribe();
    }

    if (this._filterProfiles$) {
      this._filterProfiles$.unsubscribe();
    }
  }

  private initializeSubscriptions(): void {
    this.getprofiles();
    this.filterprofiles();
  }

  public getprofiles(): void {
    this._getProfiles$ = this._profileservice.get()
      .subscribe(result => {
        this.profiles = result;
        this._profiles = this.profiles;
      });
  }

  public filterprofiles() {
    this._filterProfiles$ = this._profileservice.profileList$.subscribe(filter => {
      let filterString = filter.toLowerCase();

      this.profiles = this._profiles
        .filter(profile => profile.givenName.toLowerCase().indexOf(filterString) >= 0 ||
          profile.lastName.toLowerCase().indexOf(filterString) >= 0
        )
    });
  }

}

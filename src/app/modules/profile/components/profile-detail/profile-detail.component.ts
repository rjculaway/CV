import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

//service
import { ProfileService } from '../../services/profile.service';

//model
import { Profile } from '../../../../models/interfaces/profile';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit, OnDestroy {

  profile: Profile;
  private _id: string;

  _getProfile$: Subscription;

  constructor(private _profileService: ProfileService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getProfile();
  }

  ngOnDestroy() {
    if (this._getProfile$) {
      this._getProfile$.unsubscribe();
    }
  }

  public getProfile(): void {
    this._id = this._activatedRoute.snapshot.params.id;
    this.profile = this._profileService.getProfile(Number(this._id));
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { ProfileService } from '../../../profile/services/profile.service';

@Component({
  selector: 'app-quick-search',
  templateUrl: './quick-search.component.html',
  styleUrls: ['./quick-search.component.scss']
})
export class QuickSearchComponent implements OnInit, OnDestroy {

  searchControl = new FormControl();
  private _searchControl$: Subscription;

  constructor(private _profileService: ProfileService) { }

  ngOnInit() {
    this.initializeSearchControl();
  }

  ngOnDestroy() {
    if (this._searchControl$) {
      this._searchControl$.unsubscribe();
    }
  }

  private initializeSearchControl(): void {
    this._searchControl$ = this.searchControl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe(value => {
        this._profileService.filter(value);
      });
  }

}

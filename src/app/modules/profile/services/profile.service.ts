import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

//model
import { Profile } from '../../../models/interfaces/profile';
import { map } from 'rxjs/operators';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService implements Resolve<any>{

  private profiles: Array<Profile>;
  private _profileList: Subject<string> = new Subject();
  profileList$ = this._profileList.asObservable();

  constructor(private _httpClient: HttpClient) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.get();
  }

  public get(): Observable<Profile[]> {
    return this._httpClient.get<Profile[]>("/assets/json/profiles.json")
    .pipe(
      map((result: Array<Profile>) => {
        this.profiles = result;
        return result;
    }));
  }

  public getProfile(id: number): Profile {
    return this.profiles.find(x => x.id === id);
  }

  public filter(filterString: string): void {
    this._profileList.next(filterString);
  }
}

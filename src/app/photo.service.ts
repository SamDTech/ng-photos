import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export interface PhotoResponse{
  urls: {
    regular: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient: HttpClient) {
  }

  public getPhoto(): Observable<string> {
   return this.httpClient.get<PhotoResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID yZjSpto2irC7SIpzZjaR68KeKxRuwVDpUpJS_bSSvXk'
      }
    }).pipe(map(value => value.urls.regular))
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BEER_URL = 'https://api.punkapi.com/v2/beers';
  constructor(private httpClient: HttpClient) { }

  async get() {}
}

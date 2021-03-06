import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { IBeer } from '../interfaces/ibeer';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apiService: ApiService) { }

  async getBeers(): Promise<IBeer[]> {
    return await this.apiService.get();
  }

  async getRandomBeer(): Promise<IBeer> {
    return await this.apiService.getRandom();
  }

}

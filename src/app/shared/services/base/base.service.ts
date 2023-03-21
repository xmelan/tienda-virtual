import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { enviroment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class BaseService<T> {
  public baseUrl: string;
  constructor(private http: HttpClient, @Inject('endpoint') endpoint: string) {
    this.baseUrl = `${enviroment.apiUrl}/${endpoint}`;
  }

  public post(obj: T, action = '') {
    return this.http.post<T>(`${this.baseUrl}/${action}`, obj);
  }

  public get(action = '') {
    return this.http.get<T>(`${this.baseUrl}/${action}`);
  }

  public getById(id: string) {
    return this.http.get<T>(`${this.baseUrl}/${id}`);
  }

  public put(obj: T, action = '') {
    return this.http.put<T>(`${this.baseUrl}/${action}`, obj);
  }

  public delete(id: string, action = '') {
    return this.http.delete<T>(`${this.baseUrl}/${id}/${action}`, {});
  }
}

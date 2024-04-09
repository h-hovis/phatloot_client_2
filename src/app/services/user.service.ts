import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private url = 'http://127.0.0.1:3000';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.url);
    }

    getUserById(id:number): Observable<User> {
      return this.http.get<User>(`${this.url}/${id}`);
    }

    createUser(user: {firstName: string, lastName: string, email: string, username: string, password:string}): Observable<User> {
      return this.http.post<User>(this.url, user);
    }

    updateUser(user: User): Observable<User> {
      return this.http.put<User>(`${this.url}/${user.id}`, user);
    }

    deleteUser(id: number): Observable<User> {
      return this.http.delete<User>(`${this.url}/${id}`);
    }
}

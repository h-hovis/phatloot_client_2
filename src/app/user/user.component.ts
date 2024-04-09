import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  users: User[] = [];
  newUser: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  addUser() {
    const user = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: ''
    };

    this.userService.createUser(user).subscribe(newUser => {
      this.users.push(newUser);
      this.newUser = '';
    });
  }

  updateUser(user: User) {
    this.userService.updateUser(user).subscribe(updatedUser => {
      const index = this.users.findIndex(u => u.id === updatedUser.id);
      this.users[index] = updatedUser;
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: () => this.users = this.users.filter(user => user.id !== id),
      error: (err) => console.error(err)
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  data: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.userService.fetchData().subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }
}

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  httpClient = inject(HttpClient);
  data: any[] = [];
  apiUrl = 'http://localhost:3000/';

  ngOnInit(): void { 
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get(this.apiUrl)
      .subscribe((data: any) => {
        this.data = data;
      });
  }
}
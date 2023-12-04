import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionApplication } from 'src/app/model/connection-application.model';
import { ConnectionApplicationService } from 'src/app/services/connection-application.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent  implements OnInit {
  users: any[] | undefined;
  searchTerm: any;
  filteredUsers: any[] | undefined;

  selectedDate: Date;
  yourData: any[] = [];

  constructor(private service: ConnectionApplicationService, private router: Router) {
    this.selectedDate = new Date();
   }

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications() {
    this.service.getAllApplications().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(id: number) {
    this.service.deleteApplicationById(id).subscribe(data => {
      this.users = this.users?.filter(user => user.id !== id);
    });

    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  updateUser(id: number) {
    this.router.navigate(['update', id]);
  }

  filterUsers() {
    if (!this.searchTerm) {
      // If the search term is empty, show all users
      this.filteredUsers = this.users;
    } else {
      // Otherwise, filter users based on the search term
      this.filteredUsers = this.users?.filter(user =>
        user.applicantName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  filterDataByDate() {
    if (this.selectedDate) {
      const filteredData = this.yourData.filter(item => {
        const itemDate = new Date(item.applicationDate);
        return itemDate >= this.selectedDate;
      });
    }
  }

}


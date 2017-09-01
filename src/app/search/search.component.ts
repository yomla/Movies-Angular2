import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  private searchInput: '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitSearch() {
     this.router.navigate(['search',this.searchInput])
    }
}


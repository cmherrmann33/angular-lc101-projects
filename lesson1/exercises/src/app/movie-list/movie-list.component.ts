import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Pride and Prejudice', 'Binging The Office', 'Shes the Man', 'Popstar: Never Stop Never Stopping','Contagion'];

   constructor() { }

   ngOnInit() {
   }

}

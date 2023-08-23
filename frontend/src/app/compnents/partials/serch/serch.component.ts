import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.css']
})
export class SerchComponent {
  searchTerm = '';
  constructor(activatedRouter:ActivatedRoute, private router:Router) {
    activatedRouter.params.subscribe((params) => {
      if(params.searchTerm) this.searchTerm = params.searchTerm;
    });
  }
  search(term:string):void {
    //if(term)
    this.router.navigateByUrl('/search/'+term)
  }
}

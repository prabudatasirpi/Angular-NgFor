import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {

  title= "Top 5 Movies";

  movies:Movie [] =[
    {title:'Captain america', director:'Anthony Russo', hero:'Chris Evans', releaseDate:'29/2011'},
    {title:'X-men', director:'Simon', hero:'Hugh Jackman', releaseDate:'29/2012'},
    {title:'Batman', director:'Matt Reeves', hero:'Christian Bale', releaseDate:'29/2013'},
    {title:'Superman', director:'Zack Snyder', hero:'Christopher Reeve', releaseDate:'29/2014'},
    {title:'spiderman', director:'Anthony Russo', hero:'Tom Holland', releaseDate:'29/2015'},
    
  
  ]
  
  trackByFn(index, item){
    return item.title;
  }
   
  }
  
  class Movie {
    title!: string;
    director!: string;
    hero!:string;
    releaseDate!: string; 
    
  
  }

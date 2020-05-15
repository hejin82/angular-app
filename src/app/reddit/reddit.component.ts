import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.scss']
})
export class RedditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title:${title.value} and link:${link.value}`);
    return false;
  }

}

import { Component, OnInit } from '@angular/core';
import {Article} from "../reddit-article/article.model";

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.scss']
})
export class RedditComponent implements OnInit {

  articles: Article[];

  constructor() {
    this.articles = [
      new Article('angular', 'http://angular.io', 10),
      new Article('react', 'http://react.io', 10),
      new Article('vue', 'http://vue.io', 10),
    ]
  }

  ngOnInit(): void {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title:${title.value} and link:${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

}

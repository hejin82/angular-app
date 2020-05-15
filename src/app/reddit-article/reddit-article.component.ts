import {Component, HostBinding, OnInit} from '@angular/core';
import {Article} from "./article.model";

@Component({
  selector: 'app-reddit-article',
  templateUrl: './reddit-article.component.html',
  styleUrls: ['./reddit-article.component.scss']
})
export class RedditArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  article: Article;

  constructor() {
    this.article = new Article(
      'angular',
      'http://angular.io',
      10
    );
  }

  ngOnInit(): void {
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
}

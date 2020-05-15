import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditArticleComponent } from './reddit-article.component';

describe('RedditArticleComponent', () => {
  let component: RedditArticleComponent;
  let fixture: ComponentFixture<RedditArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

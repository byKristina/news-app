import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-app';

  arrayArticles: Array<any>;
  arraySources: Array<any>;

  constructor(private newsapi: NewsApiService) {
    console.log('app component constructor called');
  }

  ngOnInit() {
    
    this.newsapi.getArticles().subscribe(data => this.arrayArticles = data['articles']);
    
    this.newsapi.getSources().subscribe(data => this.arraySources = data['sources']);
  }

  getArticlesFromSource(source) {
    this.newsapi.getArticlesByID(source).subscribe(data => this.arrayArticles = data['articles']);
  }
}

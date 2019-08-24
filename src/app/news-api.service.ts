import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsApiService {

  api_key = '29e5c664c2004b308363ccf989afd276';

  constructor(private http: HttpClient) { }
  
  getSources() {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
  }
  getArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techradar&apiKey=' + this.api_key);
  }
  getArticlesByID(source: String) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
  }

}

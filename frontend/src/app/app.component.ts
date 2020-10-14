import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  numberOfRulings = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchNumberOfRulings();
  }

  private fetchNumberOfRulings(): any {
  this.http.get('http://localhost:8080/home')
    .subscribe(response => {
      console.log(response);
      this.numberOfRulings = response[0];
    });
}

}

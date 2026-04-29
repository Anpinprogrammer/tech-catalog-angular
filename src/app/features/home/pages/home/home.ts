import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Service {
  id: number;
  name: string;
  featured: boolean;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  services: Service[] = [];

  ngOnInit(): void {
      
  }

}

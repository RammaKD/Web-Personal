import { Component } from '@angular/core';
import { Projects } from '../projects/projects';
import { Skills } from '../skills/skills';
import { Aboutme } from '../aboutme/aboutme';

@Component({
  selector: 'app-home',
  imports: [Aboutme, Projects, Skills],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

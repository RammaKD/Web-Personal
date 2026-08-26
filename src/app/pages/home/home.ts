import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Projects } from '../projects/projects';
import { Skills } from '../skills/skills';
import { Aboutme } from '../aboutme/aboutme';
import { Experience } from '../experience/experience';

@Component({
  selector: 'app-home',
  imports: [Aboutme, Experience, Projects, Skills, TranslateModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

import { Component, computed, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

type ProjectCategory = 'fullstack' | 'frontend' | 'backend';
type ProjectFilter = 'all' | ProjectCategory;

type Project = {
  titleKey: string;
  descriptionKey: string;
  category: ProjectCategory;
  categoryLabel: string;
  tech: string[];
  links: {
    demo?: string;
    code?: string;
  };
};

@Component({
  selector: 'app-projects',
  imports: [TranslateModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly activeFilter = signal<ProjectFilter>('all');

  readonly projects = signal<Project[]>([
    {
      titleKey: 'projectsList.projectManager.title',
      descriptionKey: 'projectsList.projectManager.description',
      category: 'fullstack',
      categoryLabel: 'FULLSTACK',
      tech: ['Angular', 'NestJS', 'PostgreSQL'],
      links: {
        demo: 'https://project-manager-zeta-ten.vercel.app',
        code: 'https://github.com/RammaKD/Project-Manager.git',
      },
    },
    {
      titleKey: 'projectsList.top.title',
      descriptionKey: 'projectsList.top.description',
      category: 'fullstack',
      categoryLabel: 'FULLSTACK',
      tech: ['Angular', 'NestJS', 'MongoDB'],
      links: {
        demo: 'https://red-social-front-two.vercel.app/',
        code: 'https://github.com/RammaKD/RedSocial-Front',
      },
    },
    {
      titleKey: 'projectsList.gameRoom.title',
      descriptionKey: 'projectsList.gameRoom.description',
      category: 'fullstack',
      categoryLabel: 'FULLSTACK',
      tech: ['Angular', 'Supabase', 'PostgreSQL'],
      links: {
        demo: 'https://sala-de-juegos-flame.vercel.app/',
        code: 'https://github.com/RammaKD/Sala-de-juegos.git',
      },
    },
    // {
    //   titleKey: 'projectsList.taskboard.title',
    //   descriptionKey: 'projectsList.taskboard.description',
    //   category: 'frontend',
    //   categoryLabel: 'FRONTEND',
    //   links: {
    //     demo: 'https://example.com',
    //     code: 'https://github.com/RammaKD',
    //   },
    // },
  ]);

  readonly showFilters = computed(() => this.projects().length > 1);

  readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    const list = this.projects();
    if (filter === 'all') return list;
    return list.filter((p) => p.category === filter);
  });

  setFilter(filter: ProjectFilter) {
    this.activeFilter.set(filter);
  }
}

import { Component, computed, signal } from '@angular/core';

type ProjectCategory = 'fullstack' | 'frontend' | 'backend';
type ProjectFilter = 'all' | ProjectCategory;

type Project = {
  title: string;
  description: string;
  category: ProjectCategory;
  categoryLabel: string;
  links: {
    demo?: string;
    code?: string;
  };
};

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly activeFilter = signal<ProjectFilter>('all');

  readonly projects = signal<Project[]>([
    {
      title: 'Top!',
      description:
        'Red social desarrollada con Angular y NestJS. Permite perfiles, publicaciones y conexión entre usuarios, similar a X.',
      category: 'fullstack',
      categoryLabel: 'FULLSTACK',
      links: {
        demo: 'https://red-social-front-two.vercel.app/',
        code: 'https://github.com/RammaKD/RedSocial-Front',
      },
    },
    {
      title: 'Sala de juegos',
      description:
        'App hecha con Angular + Supabase (Auth + DB). Los usuarios deben loguearse para jugar: incluye 4 minijuegos y una tabla de puntuaciones con el Top 10 por juego.',
      category: 'fullstack',
      categoryLabel: 'FULLSTACK',
      links: {
        demo: 'https://sala-de-juegos-flame.vercel.app/',
        code: 'https://github.com/RammaKD/Sala-de-juegos.git',
      },
    },
    // {
    //   title: 'TaskBoard (demo)',
    //   description:
    //     'Tablero Kanban simple para organizar tareas con columnas y drag & drop. Ejemplo para mostrar layout de tarjetas en la sección de proyectos.',
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

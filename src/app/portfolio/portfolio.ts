import { Component } from '@angular/core';

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  year: string;
  link?: string;
  sourceCode?: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  readonly projects: Project[] = [
    {
      id: 'freelance-site',
      title: 'Site web freelance',
      shortDescription:
        'Site vitrine moderne pour présenter mes services en développement web et cybersécurité.',
      description: `
        Conception et développement d’un site vitrine responsive pour présenter mes services,
        mon parcours et mes réalisations. Mise en avant claire de l’offre, des compétences et
        des projets, avec une attention particulière portée à l’accessibilité et aux performances.
      `,
      technologies: ['Angular', 'Tailwind CSS', 'AOS', 'TypeScript'],
      year: '2025',
      link: 'https://keller-fr.com',
      sourceCode: 'https://github.com/keller-lucas/website',
    },
    {
      id: 'api-google-trends',
      title: 'API Google Trends (Django)',
      shortDescription: 'API Django basée sur Pytrends pour interroger les tendances de recherche Google.',
      description: `
        Création d’une API Django reposant sur Pytrends, permettant de récupérer des informations
        sur des mots-clés (popularité, tendances, comparaisons). Mise en place d’un système de cache
        avec jeton afin de limiter les appels et d’optimiser les performances.
      `,
      technologies: ['Django', 'Python', 'MySQL', 'Pytrends', 'Docker'],
      year: '2024',
      sourceCode: 'https://github.com/keller-lucas/ApiGoogleTrends',
    },
    {
      id: 'google-trends-data-visualization',
      title: 'Dashboard Google Trends (Laravel)',
      shortDescription:
        'Application Laravel pour visualiser les tendances de mots-clés via un dashboard interactif.',
      description: `
        Développement d’une application Laravel avec gestion de comptes utilisateurs, permettant
        de rechercher des mots-clés, de visualiser les tendances sous forme de graphiques et
        d’envoyer des rapports par e-mail. L’application consomme l’API ApiGoogleTrends pour
        centraliser et présenter les données de manière claire et exploitable.
      `,
      technologies: ['Laravel', 'PHP', 'Docker'],
      year: '2024',
      sourceCode: 'https://github.com/keller-lucas/google-trends-data-visualization',
    },
  ];

  selectedProject: Project | null = null;

  openProject(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).id === 'portfolio-modal-overlay') {
      this.closeModal();
    }
  }
}

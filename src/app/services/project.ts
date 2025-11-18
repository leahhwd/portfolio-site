export interface Project {
  id: number;
  title: string;
  description: string;
  img: string;
  link: string;
}

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {



  private Project = [
    { id: 0,
      title: "Project Alpha",
      description: "A cutting-edge project focused on AI development.",
      img: "/images/image1.jpg",
      link: "https://example.com/project-alpha"
    },
    { id: 1,
      title: "Project Beta",
      description: "An innovative platform for collaborative work.",
      img: "/images/image2.jpg",
      link: "https://example.com/project-beta"
    },
    { id: 2,
      title: "Project Gamma",
      description: "A mobile app that revolutionizes social networking.",
      img: "/images/image3.jpg",
      link: "https://example.com/project-gamma"
    },
    { id: 3,
      title: "Project Delta",
      description: "A cloud-based solution for data management.",
      img: "/images/image4.jpg",
      link: "https://example.com/project-delta"
    },
    { id: 4,
      title: "Project Epsilon",
      description: "An e-commerce platform with advanced features.",
      img: "/images/image5.jpg",
      link: "https://example.com/project-epsilon"
    }
  ];

  getProjects() {
    return this.Project;
  }


}

import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project';

describe('Project', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of projects', () => {
    const projects = service.getProjects();
    expect(projects.length).toBe(5);
    expect(projects[0].title).toBe("Project Alpha");
    expect(projects[1].title).toBe("Project Beta");
    expect(projects[2].title).toBe("Project Gamma");
    expect(projects[3].title).toBe("Project Delta");
    expect(projects[4].title).toBe("Project Epsilon");
  });

  it('should return project data in correct order', () => {
    const projects = service.getProjects();

    expect(projects[0].id).toBeDefined();
    expect(projects[0].title).toBeDefined();
    expect(projects[0].description).toBeDefined();
    expect(projects[0].img).toBeDefined();
    expect(projects[0].link).toBeDefined();
  });
});

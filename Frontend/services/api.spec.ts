import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService, Project, ContactForm } from './api';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch projects', () => {
    const dummyProjects: Project[] = [
      { name: 'Portfolio', tech: ['Angular', 'Laravel'] }
    ];

    service.getProjects().subscribe(projects => {
      expect(projects.length).toBe(1);
      expect(projects).toEqual(dummyProjects);
    });

    const req = httpMock.expectOne('http://127.0.0.1:8000/projects');
    expect(req.request.method).toBe('GET');
    req.flush(dummyProjects);
  });

  it('should fetch skills', () => {
    const dummySkills: string[] = ['Angular', 'TypeScript', 'Laravel'];

    service.getSkills().subscribe(skills => {
      expect(skills.length).toBe(3);
      expect(skills).toEqual(dummySkills);
    });

    const req = httpMock.expectOne('http://127.0.0.1:8000/skills');
    expect(req.request.method).toBe('GET');
    req.flush(dummySkills);
  });

  it('should send contact form', () => {
    const dummyForm: ContactForm = {
      name: 'Marcos',
      email: 'marcos@example.com',
      message: 'Hola!'
    };

    service.sendContact(dummyForm).subscribe(response => {
      expect(response).toEqual({ status: 'success', data: dummyForm });
    });

    const req = httpMock.expectOne('http://127.0.0.1:8000/contact');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(dummyForm);
    req.flush({ status: 'success', data: dummyForm });
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, of } from 'rxjs';
import { ProjectNames } from './project-models';
import { ProjectComponent } from './project.component';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;
  let route: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useFactory: () => ({
            paramMap: of(convertToParamMap({ name: '' })),
            // Provide dummy values for the remaining parameters
            data: {},
            queryParams: {},
            fragment: {},
            outlet: {},
            component: {},
            routeConfig: {},
            root: {},
            parent: {},
            firstChild: {},
            children: [],
            pathFromRoot: []
          })
        }
      ]
    })
      .compileComponents();

    // Inject an instance of the ActivatedRoute service
    route = TestBed.inject(ActivatedRoute);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the correct project name based on the route param', () => {
    // Set a test route param on the injected ActivatedRoute instance
    (route as any).paramMap = of(convertToParamMap({ name: 'OnTrackChat' }));

    // Call the determineProjectName method to set the projectName property
    component.determineProjectName();

    // Expect the projectName property to be set to the correct value
    expect(component.projectName).toBe(ProjectNames.OnTrackChat);
  });

  it('should set the noProjectMessage property if no project name is provided', () => {
    // Don't set a test route param

    // Call the determineProjectName method to set the projectName property
    component.determineProjectName();

    // Expect the noProjectMessage property to be set to the correct value
    expect(component.noProjectMessage).toBe('No project was specified.');
  });
});

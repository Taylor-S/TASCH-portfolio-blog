import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, of } from 'rxjs';
import { ProjectNames } from './project-models';
import { projectTemplates } from './project-templates/project-templates';
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

  describe('determineProjectName', () => {
    it('should set the correct project name based on the route param for OnTrackChat', () => {
      // Set a test route param on the injected ActivatedRoute instance
      (route as any).paramMap = of(convertToParamMap({ name: 'OnTrackChat' }));

      // Call the determineProjectName method to set the projectName property
      component.determineProjectName();

      // Expect the projectName property to be set to the correct value
      expect(component.projectName).toBe(ProjectNames.OnTrackChat);
    });

    it('should set the correct project name based on the route param for Wirely', () => {
      // Set a test route param on the injected ActivatedRoute instance
      (route as any).paramMap = of(convertToParamMap({ name: 'Wirely' }));

      // Call the determineProjectName method to set the projectName property
      component.determineProjectName();

      // Expect the projectName property to be set to the correct value
      expect(component.projectName).toBe(ProjectNames.Wirely);
    });

    it('should set the correct project name based on the route param for Pomodoro', () => {
      // Set a test route param on the injected ActivatedRoute instance
      (route as any).paramMap = of(convertToParamMap({ name: 'Pomodoro' }));

      // Call the determineProjectName method to set the projectName property
      component.determineProjectName();

      // Expect the projectName property to be set to the correct value
      expect(component.projectName).toBe(ProjectNames.Pomodoro);
    });

    it('should set the noProjectMessage property if no project name is provided', () => {
      // Don't set a test route param

      // Call the determineProjectName method to set the projectName property
      component.determineProjectName();

      // Expect the noProjectMessage property to be set to the correct value
      expect(component.noProjectMessage).toBe('No project was specified.');
    });
  });

  describe('renderProjectTemplate', () => {
    it('should set the correct HTML template for OnTrackChat', () => {
      // Set the projectName property to OnTrackChat
      component.projectName = ProjectNames.OnTrackChat;

      // Call the renderProjectTemplate method
      component.renderProjectTemplate();

      // Create a temp element for comparison
      const tempElement = document.createElement('div');
      tempElement.innerHTML = projectTemplates.onTrackChat;

      // Expect the HTML template to be set to the correct value
      expect(component.tref.nativeElement.innerHTML).toEqual(tempElement.innerHTML);
    });

    it('should set the correct HTML template for Wirely', () => {
      // Set the projectName property to Wirely
      component.projectName = ProjectNames.Wirely;

      // Call the renderProjectTemplate method
      component.renderProjectTemplate();

      // Create a temp element for comparison
      const tempElement = document.createElement('div');
      tempElement.innerHTML = projectTemplates.wirely;

      // Expect the HTML template to be set to the correct value
      expect(component.tref.nativeElement.innerHTML).toEqual(tempElement.innerHTML);
    });

    it('should set the correct HTML template for Pomodoro', () => {
      // Set the projectName property to Pomodoro
      component.projectName = ProjectNames.Pomodoro;

      // Call the renderProjectTemplate method
      component.renderProjectTemplate();

      // Create a temp element for comparison
      const tempElement = document.createElement('div');
      tempElement.innerHTML = projectTemplates.pomodoro;

      // Expect the HTML template to be set to the correct value
      expect(component.tref.nativeElement.innerHTML).toEqual(tempElement.innerHTML);
    });

    it('should set the innerHTML property to an empty string if the projectName property is not one of the three possible project names', () => {
      // Set the projectName property to a value that is not one of the three possible project names
      component.projectName = null;

      // Call the renderProjectTemplate method
      component.renderProjectTemplate();

      // Expect the HTML template to be set to the correct value
      expect(component.tref.nativeElement.innerHTML).toEqual('');
    });

  });


});

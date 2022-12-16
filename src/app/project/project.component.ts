import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectNames } from './project-models';
import { projectTemplates } from './project-templates/project-templates';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent {
  @ViewChild("ref", { read: ElementRef }) tref: ElementRef = {} as ElementRef;
  projectName: ProjectNames | null = null;
  noProjectMessage: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.determineProjectName();
  }

  ngAfterViewInit() {
    this.renderProjectTemplate();
  }

  determineProjectName() {
    this.route.paramMap.subscribe(params => {
      // Use the enum members to set the projectName
      switch (params.get('name')) {
        case ProjectNames.OnTrackChat:
          this.projectName = ProjectNames.OnTrackChat;
          break;
        case ProjectNames.Wirely:
          this.projectName = ProjectNames.Wirely;
          break;
        case ProjectNames.Pomodoro:
          this.projectName = ProjectNames.Pomodoro;
          break;
        default:
          this.projectName = null;
          break;
      }

      // If no project name is provided, set an error message
      if (!this.projectName) {
        this.noProjectMessage = 'No project was specified.';
      }
    });
  }

  renderProjectTemplate() {
    switch (this.projectName) {
      case ProjectNames.OnTrackChat:
        this.tref.nativeElement.innerHTML = projectTemplates.onTrackChat;
        break;
      case ProjectNames.Wirely:
        this.tref.nativeElement.innerHTML = projectTemplates.wirely;
        break;
      case ProjectNames.Pomodoro:
        this.tref.nativeElement.innerHTML = projectTemplates.pomodoro;
        break;
      default:
        this.tref.nativeElement.innerHTML = ''
        break;
    }
  }
}
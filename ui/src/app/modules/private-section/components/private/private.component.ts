import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../../src/app/shared/services/user/user.service';
import { IProject } from '../../../../../../src/app/shared/interfaces/IProject';
import { LocalStorageService } from 'ngx-webstorage';
import { NotificationService } from '../../../../../../src/app/shared/services/appNotifications/notification-changes.service';
import { Dictionary } from 'src/app/shared/consts/notification-const';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.less']
})
export class PrivateComponent implements OnInit {

  defaultProject: string = '';
  projects: Array<IProject>;
  user: any;

  constructor(
    private userService: UserService,
    private localSt: LocalStorageService,
    private notifications: NotificationService) { }

  ngOnInit(): void {
    this.userService.projects().subscribe((response: any) => {
      this.projects = response;
      var storedProject = this.localSt.retrieve('currentProject');
      this.defaultProject = storedProject === null ? this.projectChange(this.projects[0].id) : storedProject;
    });

    this.userService.current().subscribe((response: any) => {
      this.user = response.data;
    });
  }

  public projectChange(event: string): void {
    this.defaultProject = event;
    this.localSt.store('currentProject', this.defaultProject);
    console.log('projectChange1');
    this.notifications.sendNotification({
      from: Dictionary.Private,
      to: Dictionary.LOGS,
      subject: this.defaultProject
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { MessageScreenComponent } from './message-screen/message-screen.component';
import { ProfileScreenComponent } from './profile-screen/profile-screen.component';

import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    UsersListComponent,
    MessageScreenComponent,
    ProfileScreenComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
    MatProgressSpinnerModule

  ],
  exports: [
    UsersListComponent,
    MessageScreenComponent,
    ProfileScreenComponent
  ]
})
export class ChatScreenModule { }

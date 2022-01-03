import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzButtonModule,
    NzDrawerModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    NzIconModule,
    NzSelectModule,

    NzMessageModule,
    NzAffixModule,
    NzResultModule,
    NzSpinModule,
    NzSwitchModule,
    NzTreeModule,
    NzMenuModule,
    NzTabsModule,
    NzModalModule,
    NzUploadModule,
    NzInputNumberModule,
    NzSpaceModule,
    NzDescriptionsModule,
    NzTableModule,
    NzDatePickerModule,

    NzImageModule,
    NzNotificationModule,
    NzTimePickerModule,
    NzCheckboxModule
  ],

  exports:     [

    NzButtonModule,
    NzDrawerModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    NzIconModule,
    NzSelectModule,

    NzMessageModule,
    NzAffixModule,
    NzResultModule,
    NzSpinModule,
    NzSwitchModule,
    NzTreeModule,
    NzMenuModule,
    NzTabsModule,
    NzModalModule,
    NzUploadModule,
    NzInputNumberModule,
    NzSpaceModule,
    NzDescriptionsModule,
    NzTableModule,
    NzDatePickerModule,

    NzImageModule,
    NzNotificationModule,
    NzTimePickerModule,
    NzCheckboxModule
  ],


})
export class SharedModule { }

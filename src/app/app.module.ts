import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { InputPage } from '../pages/hello-input/hello-input';
import { HelloModal } from '../pages/hello-modal/hello-modal';
import { HelloLogin } from '../pages/hello-login/hello-login';
import { HelloNavMenu } from '../pages/hello-navmenu/hello-navmenu';
import { PressDirective } from './swipedown';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    InputPage,
    HelloModal,
    HelloLogin,
    HelloNavMenu
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    InputPage,
    HelloModal,
    HelloLogin,
    HelloNavMenu
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

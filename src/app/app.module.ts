import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
// import { ConverterPage } from '../pages/converter/converter';
// import { AboutPage } from '../pages/about/about';
import { ProgramOutlinePage } from '../pages/program-outline/program-outline';
import { LengthConverterProvider } from '../providers//length-converter';
import { TeachersPage } from '../pages/teachers/teachers';
import { CommentsPage } from '../pages/comments/comments';
import { CourseDetailPage } from '../pages/course-detail/course-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProgramOutlinePage,
    TeachersPage,
    CommentsPage,
    CourseDetailPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProgramOutlinePage,
    TeachersPage,
    CommentsPage,
    CourseDetailPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LengthConverterProvider
  ]
})
export class AppModule {}

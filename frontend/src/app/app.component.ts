import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Test, TestService } from './services/test-service/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  testValue: Observable<Test> = this._testService.getTest();

  constructor(private _testService: TestService) {}
}

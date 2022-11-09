import { AfterContentInit, Component, OnInit } from '@angular/core';
import { MytestService } from './mytest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MytestService]
})
export class AppComponent implements OnInit{
  title = 'my-cv';

  data: any;
  constructor(private mytestService: MytestService){}

  ngOnInit() {
    this.mytestService.getdata().subscribe(a => {
        this.data = a;
        console.log(this.data);
    });
  }



  


}

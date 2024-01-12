import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-app-bodyflex',
  templateUrl: './app-bodyflex.component.html',
  styleUrls: ['./app-bodyflex.component.css']
})
export class AppBodyflexComponent {
  
  constructor(private api : ApiService){}

  examData: any;
  ngOnInit():void {
    this.api.getExamdata().subscribe(res=>{
      try {
        this.examData = res;
      } catch (error) {
        alert('ไม่พบข้อมูล' + error);
      }
      
    })
  }
}

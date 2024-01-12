import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http : HttpClient) { }

  getExamdata(){
    return this.http.get<any>("https://demotrade.efintradeplus.com/ExamAPI/examdata")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}

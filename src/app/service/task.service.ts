import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private WebRequestService: WebRequestService) { }

  //Save
  saveDetails(payload:any){
    return this.WebRequestService.post('register',JSON.stringify(payload)); 
   }
}

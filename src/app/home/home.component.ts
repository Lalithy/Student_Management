import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name = "";
  phone = "";
  address = "";

  constructor(
    private toastr: ToastrService,
    private taskService: TaskService,
  ) {

  }

  //Details Save
  saveDetails(details: { name: string; address: string; phone: string; }) {
    const payload = {
      name: details.name,
      address: details.address,
      number: details.phone,
    };

    if (!this.name || !this.address || !this.phone) {
      this.toastr.error('Error');
    } else {
      this.toastr.success('Success');
      this.taskService.saveDetails(payload).subscribe((res: any) => {
        const obj = res;
      });
    }
  }
}



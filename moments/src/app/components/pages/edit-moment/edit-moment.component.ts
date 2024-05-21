import { Component } from '@angular/core';
import { Moment } from '../../../moment';
import { MomentService } from '../../../services/moment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrl: './edit-moment.component.css'
})
export class EditMomentComponent {

  moment!: Moment;
  btnText: string = 'Editar';

  constructor (
    private momentService: MomentService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.momentService.getMoment(id).subscribe(item => {
      this.moment = item.data;
    });
  }

}

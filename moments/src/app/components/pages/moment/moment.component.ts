import { Component } from '@angular/core';
import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../moment';
import { Router, ActivatedRoute } from '@angular/router';
import { enviroment } from '../../../../enviroments/enviroment';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent {
  
  moment?: Moment;
  baseApiUrl = enviroment.baseApiUrl;
  faTimes = faTimes;
  faEdit = faEdit;
  
  constructor (
    private momentService: MomentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.momentService.getMoment(id).subscribe(item => this.moment = item.data);
  }

}

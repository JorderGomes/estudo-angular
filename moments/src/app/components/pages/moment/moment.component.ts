import { Component } from '@angular/core';
import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../moment';
import { Router, ActivatedRoute } from '@angular/router';
import { enviroment } from '../../../../enviroments/enviroment';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from '../../../services/messages.service';

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
    private activatedRoute: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.momentService.getMoment(id).subscribe(item => this.moment = item.data);
  }

  async removeHandler(id:number){
    await this.momentService.removeMoment(id).subscribe();
    this.messagesService.addMessage("Momento excluído com sucesso!");
    this.router.navigate(["/"]);
  }

}

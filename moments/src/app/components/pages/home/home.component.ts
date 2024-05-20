import { Component } from '@angular/core';
import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../moment';
import { enviroment } from '../../../../enviroments/enviroment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl = enviroment.baseApiUrl;

  //todo: search

  constructor(
    private momentService: MomentService
  ){}

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data;
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleString('pt-BR');
      });
      this.allMoments = data;
      this.moments = data;
    });
  }


}

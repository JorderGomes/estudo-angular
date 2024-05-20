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
  faSearch = faSearch;
  searchTerm:string = '';

  //todo: search

  constructor(
    private momentService: MomentService
  ) { }

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data;

      for (let i = 0; i < data.length; i++) {
        data[i].created_at! = this.formatDate(data[i].created_at!);
      }

      this.allMoments = items.data;
      this.moments = data;
    });
  }

  formatDate(date: string) {
    const americanFormatRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}[+-]\d{2}:\d{2}$/;
    // const brazilianFormatRegex = /^\d{2}\/\d{2}\/\d{4}, \d{2}:\d{2}:\d{2}$/;
    if (americanFormatRegex.test(date)) {
      return new Date(date).toLocaleString('pt-BR')
    } else  {
      const [datePart, timePart] = date.split(', ');
      return datePart;
    }
  }

  search(e: Event): void{
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.moments = this.allMoments.filter(moment => {
      return moment.title.toLocaleLowerCase().includes(value);
    });
  }

}

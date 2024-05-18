import { Component } from '@angular/core';
import { Register } from '../../Register';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {
  
  register?: Register;
  
  constructor(private listService: ListService, private route: ActivatedRoute){
    this.getRegister();
  }

  getRegister() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listService.getItem(id).subscribe((register) => {
      console.log(register);
      this.register = register[0];
    });
  }
}

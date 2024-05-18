import { Component } from '@angular/core';
import { Register } from '../../Register';
import { ListService } from '../../services/list.service';

@Component({
    selector: 'app-list-render',
    templateUrl: './list-render.component.html',
    styleUrl: './list-render.component.css'
})
export class ListRenderComponent {

    balance: number = 0;
    registers: Register[] = [];

    constructor(private listService: ListService){
        this.getRegisters();
    }

    showBalance() {
        this.balance = 0;
        this.registers.forEach(item => {
            if (item.flux === "DESPESA") {
                this.balance -= item.value;
            } else {
                this.balance += item.value;
            }
        })
    }

    removeRegister(register: Register){
        console.log(`Removendo o registro de ${register.description}`);
        this.registers = this.listService.remove(this.registers, register);
    }

    getRegisters(): void{
        this.listService.getAll().subscribe((registers) => this.registers = registers);
    }

}

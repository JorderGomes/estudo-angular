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
    registers: Register[] = [
        {
            "id": 1,
            "description": "Salário de Maio",
            "value": 5000.00,
            "flux": "RENDA",
            "tag": "Salário"
        },
        {
            "id": 2,
            "description": "Aluguel de Maio",
            "value": 1200.00,
            "flux": "DESPESA",
            "tag": "Aluguel"
        },
        {
            "id": 3,
            "description": "Compra no supermercado",
            "value": 350.45,
            "flux": "DESPESA",
            "tag": "Alimentação"
        },
        {
            "id": 4,
            "description": "Freelance de design gráfico",
            "value": 800.00,
            "flux": "RENDA",
            "tag": "Freelance"
        },
        {
            "id": 5,
            "description": "Mensalidade da academia",
            "value": 100.00,
            "flux": "DESPESA",
            "tag": "Saúde"
        },
        {
            "id": 6,
            "description": "Pagamento de energia elétrica",
            "value": 220.30,
            "flux": "DESPESA",
            "tag": "Contas"
        },
        {
            "id": 7,
            "description": "Reembolso de viagem",
            "value": 150.00,
            "flux": "RENDA",
            "tag": "Reembolso"
        },
        {
            "id": 8,
            "description": "Compra de roupas",
            "value": 400.00,
            "flux": "DESPESA",
            "tag": "Compras"
        },
        {
            "id": 9,
            "description": "Investimento em ações",
            "value": 1000.00,
            "flux": "DESPESA",
            "tag": "Investimentos"
        },
        {
            "id": 10,
            "description": "Venda de itens usados",
            "value": 200.00,
            "flux": "RENDA",
            "tag": "Vendas"
        }
    ];

    constructor(private listService: ListService){

    }

    showBalance() {
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

}

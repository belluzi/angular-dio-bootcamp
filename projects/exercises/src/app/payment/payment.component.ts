import { Component, Input, OnInit } from '@angular/core';
import { PaymentOption } from '../models/payment-option.interface';
import { ParcelOption } from '../models/parcel-option.interface';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
    @Input() public totalValue: number = 0;
    constructor() {}

    ngOnInit(): void {}

    public UpdatePaymentWay(PaymentOption: PaymentOption): void {
        console.log('Componente Pai: ', PaymentOption);
    }

    public UpdateParcel(ParcelOption: ParcelOption): void {
        console.log('Componente Pai: ', ParcelOption);
    }
}


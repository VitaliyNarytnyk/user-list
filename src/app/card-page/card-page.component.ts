import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardsService } from '../shared/cards.service';
import { User } from '../shared/interfaces';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss']
})
export class CardPageComponent implements OnInit {

  form!: FormGroup

  constructor() { }

  ngOnInit(): void {

    this.form = new FormGroup({
      name: new FormControl('', []),
      username: new FormControl('', []),
      email: new FormControl('', [
        Validators.email, Validators.required
      ]),
      street: new FormControl('', []),
      city: new FormControl('', []),
      zipcode: new FormControl('', []),
      phone: new FormControl('', [
        Validators.required
      ]),
      website: new FormControl('', [
        Validators.required
      ]),
      comment: new FormControl('', [])
    })
  }

  submit() {
    const user: User = {
      name: this.form.value.name,
      username: this.form.value.username,
      email: this.form.value.email,
      address: {
        city: this.form.value.city,
        street: this.form.value.street,
        zipcode: this.form.value.zipcode
      },
      phone: this.form.value.phone,
      website: this.form.value.website,
      comment: this.form.value.comment
    }

    console.log('User', user);
  }
}

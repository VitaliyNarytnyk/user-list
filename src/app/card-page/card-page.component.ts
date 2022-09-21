import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../shared/cards.service';
import { User } from '../shared/interfaces';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss']
})
export class CardPageComponent implements OnInit {

  form!: FormGroup
  id!: string
  user!: User
  isEditDisable = true

  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createForm()

    this.id = this.route.snapshot.params['id']
    this.getUserById()

  }

  private createForm() {
    this.form = new FormGroup({
      name: new FormControl({ value: '', disabled: this.isEditDisable }, []),
      username: new FormControl({ value: '', disabled: this.isEditDisable }, []),
      email: new FormControl({ value: '', disabled: this.isEditDisable }, [
        Validators.email, Validators.required
      ]),
      street: new FormControl({ value: '', disabled: this.isEditDisable }, []),
      city: new FormControl({ value: '', disabled: this.isEditDisable }, []),
      zipcode: new FormControl({ value: '', disabled: this.isEditDisable }, []),
      phone: new FormControl({ value: '', disabled: this.isEditDisable }, [
        Validators.required
      ]),
      website: new FormControl({ value: '', disabled: this.isEditDisable }, [
        Validators.required
      ]),
      comment: new FormControl({ value: '', disabled: this.isEditDisable }, [])
    })
  }

  private getUserById(): void {
    this.cardsService.getById(this.id).subscribe(response => {
      this.form.patchValue({
        name: response.name,
        username: response.username,
        email: response.email,
        city: response.address.city,
        street: response.address.street,
        zipcode: response.address.zipcode,
        phone: response.phone,
        website: response.website
      })
    })
  }

  edit() {
    this.isEditDisable = !this.isEditDisable
    if (this.isEditDisable) {
      this.form.disable()
    } else {
      this.form.enable()
    }
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

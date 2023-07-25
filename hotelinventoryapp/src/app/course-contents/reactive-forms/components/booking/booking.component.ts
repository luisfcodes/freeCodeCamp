import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { CustomValidator } from '../../validators/custom-validator';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  get guests(){
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: [{ value: (Math.random() * 100).toFixed(0), disabled: true }, { validators: [Validators.required] }],
      guestEmail: ['', { updateOn: 'blur', validators: [Validators.required, Validators.email] }],
      checkinDate: ['', [Validators.required]],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: ['', [Validators.required, Validators.minLength(3), CustomValidator.ValidateName]],
      address: this.fb.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      guests: this.fb.array([
        this.fb.group({ guestName: [''], age: new FormControl('') }),
      ]),
    })

    // this.bookingForm.valueChanges.subscribe((data) => {
    //   console.log(data);
    // })

    // this.bookingForm.valueChanges.pipe(
    //   mergeMap((data) => this.bookingService.bookRoom(data))
    // ).subscribe((data) => {
    //   console.log(data);
    // })

    // this.bookingForm.valueChanges.pipe(
    //   switchMap((data) => this.bookingService.bookRoom(data))
    // ).subscribe((data) => {
    //   console.log(data);
    // })

    // this.bookingForm.valueChanges.pipe(
    //   exhaustMap((data) => this.bookingService.bookRoom(data))
    // ).subscribe((data) => {
    //   console.log(data);
    // })
  }

  addBooking() {
    console.log(this.bookingForm.value);
    this.bookingService.bookRoom(this.bookingForm.value).subscribe((data) => {
      console.log(data);
      this.bookingForm.reset();
      this.bookingForm.patchValue({
        roomId: (Math.random() * 100).toFixed(0),
      })
    })
  }

  addGuest(){
    this.guests.push(this.fb.group({ guestName: [''], age: new FormControl('') }));
  }
}

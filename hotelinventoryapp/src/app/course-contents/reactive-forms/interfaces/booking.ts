export interface Booking {
  roomId: string;
  guestEmail: string;
  checkinDate: Date;
  checkoutDate: Date;
  bookingStatus: string;
  bookingAmount: number;
  bookingDate: Date;
  mobileNumber: string;
  guestName: string;
  guestAdress: string;
  guestCity: string;
  guestState: string;
  guestCountry: string;
  guestZipCode: string;
  guestCount: number;
  //guestList: Guest[];
}

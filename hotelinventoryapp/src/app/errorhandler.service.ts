import { ErrorHandler } from "@angular/core";

export class GlobalErroHandler implements ErrorHandler {
  handleError(error: any) {
    console.log("An error occurred:", error.message);
  }
}

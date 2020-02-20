import { Component } from '@angular/core';
//import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textBoxType = 'number';
  textBox: any;
  validationErrorFlag = false;
  validionErrorMessage = '';

  /* Check the type based on selection
  @param number goes to numberValidation
  @param alphabets goes to allowAlphabets
  @param password goes to validatePassword
  */
  public changeType() {
  
    if (this.textBoxType === 'number') {
      this.numberValidation();
    } else if (this.textBoxType === 'alphabets') {
      this.allowAlphabets()
    } else {
      this.validatePassword();
    }
  }

  /* Check the type based on validation
 /* check th evalue is number or not 
 */
  public numberValidation() {
    if (isNaN(this.textBox)) {
      this.validationErrorFlag = true;
      this.validionErrorMessage = `Your'e selected ${this.textBoxType} property.  Please enter Number only`;
    } else {
      this.validationErrorFlag = false;
    }
  }

  /* Check the type based on validation
 /* check the value is alphabet or not 
 */
  public allowAlphabets() {
    let regex = /^[a-zA-Z]*$/;
    if (!regex.test(this.textBox)) {
      this.validationErrorFlag = true;
      this.validionErrorMessage = `Your'e selected ${this.textBoxType} property.  Please enter Alphabets only`;
    } else {
      this.validationErrorFlag = false;
    }
  }
  /* Check the type based on validation
   /* check the value is contain alphabets, number and special character
   */
  public validatePassword() {
    const regex = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/;
    if (!regex.test(this.textBox)) {
      this.validationErrorFlag = true;
      this.validionErrorMessage = `Your'e selected ${this.textBoxType} property. 
      Must have letters, numbers and at least 1 of the following symbols (!@#&*), and it can not have 3 consecuative numbers, example 456.`;
    } else {
      if (!this.checkIfSequential(this.textBox)) {
        this.validationErrorFlag = false;
      } else {
        this.validationErrorFlag = true;
        this.validionErrorMessage = 'Password should not have consecuative numbers';
      }

    }
  }
  /* Check the type based on validation
 /* check the value is not consecuative  number  
 */
  private checkIfSequential(number) {
    let collectNumber = [];
    for (var i = 0, len = number.length; i < len; i += 1) {
      if (!isNaN(number.charAt(i))) {
        collectNumber.push(+number.charAt(i));
      }
    }
    if (collectNumber && collectNumber.length > 2) {
      return collectNumber.every((e, i, a) => i > 0 ? e > a[i - 1] : true);
    } else {
      return false;
    }
  }
}

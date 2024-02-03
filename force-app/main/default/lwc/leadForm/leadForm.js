/**
 * @description       :
 * @author            : Beto
 * @group             :
 * @last modified on  : 02-03-2024
 * @last modified by  : Beto
 **/
import { LightningElement, track } from "lwc";

export default class LeadForm extends LightningElement {
  @track name = "";
  @track email = "";
  @track phone = "";
  @track company = "";

  handleChange(event) {
    const field = event.target.name;
    const value = event.target.value;

    if (field === "name") {
      this.name = value;
    } else if (field === "email") {
      this.email = value;
    } else if (field === "phone") {
      this.phone = value;
    } else if (field === "company") {
      this.company = value;
    }
  }

  handleSubmit() {
    console.log(
      "Adding Lead: ${this.name}, ${this.email}, ${this.phone}, ${this.company}"
    );
    //lead submission logic to send to salesforce org or server but I am not using one in this project so nothing here right now.

    this.name = "";
    this.email = "";
    this.phone = "";
    this.company = "";
  }
}

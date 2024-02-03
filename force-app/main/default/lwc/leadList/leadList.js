/**
 * @description       :
 * @author            : Beto
 * @group             :
 * @last modified on  : 02-02-2024
 * @last modified by  : Beto
 **/
import { LightningElement, track } from "lwc";

export default class LeadList extends LightningElement {
  @track leads = [
    {
      id: 1,
      name: "Lead One",
      email: "lead1@example.com",
      company: "Company One",
      phone: "111-111-1111"
    },
    {
      id: 2,
      name: "Lead Two",
      email: "lead2@example.com",
      company: "Company Two",
      phone: "222-222-2222"
    },
    {
      id: 3,
      name: "Lead Three",
      email: "lead3@example.com",
      company: "Company Three",
      phone: "333-333-3333"
    }
  ];
}

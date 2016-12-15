export class Communication {

  id: number;
  reportId : number;
  customerId : number;
  orderNumber : number;
  content : string;
  insertionDate : Date;

  constructor(reportId){
    this.reportId = reportId;
  }
}

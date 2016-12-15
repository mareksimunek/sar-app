import {Component, OnInit, Input} from '@angular/core';
import {ReportService} from "../shared/report.service";
import {Communication} from "../shared/communication.model";
import {AlertService} from "../shared/alert.service";


@Component({
  selector: 'communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css'],
})
export class CommunicationComponent implements OnInit {
  @Input() reportId: number;

  communication : Communication;
  private commList : Communication[];
  private loading  : boolean = false;

  constructor( private api : ReportService,
               private alertService : AlertService
  ) {


  }

  ngOnInit() {
    this.communication = new Communication(this.reportId);
    this.api.getReportCommunications(this.reportId)
      .subscribe(commList => {
        this.commList = commList;
      });


  }

  addComm(){
    console.log(this.communication);
    this.loading = true;
    this.api.addCommunication(this.communication)
      .subscribe(
        data => {
          this.alertService.success('Komunikace úspěšně přidána');
          this.loading = false;
          this.commList.push(data);
          this.communication.content = null;
        },
        error => {
          this.alertService.error(error);
        });;
  }


}

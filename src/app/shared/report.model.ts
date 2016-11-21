export class Report {
  id: number;
  reportNumber: number;
  reportYear: number;
  reportType: string;
  dateOfCreation: Date;
  companyId: number;
  customerId: number;
  dueDate: number;
  difficulty: number;
  reportText: string;
  solutionText: string;
  solvingUserCode: string;
  solvedUserCode: number;
  solutionDate: Date;
  creatorUserCode: string;
  lastChangeDate: Date;
  lastChangeUserCode: string;
  lastUpdateDate: Date;
  garantUserCode: string;
  garantSolvedUserCode: string;
  solutionDateGarant: Date;
  priority: number;
  name: string;
  systemId: number;

  constructor() {
    this.id = null;
    this.reportNumber = null;
    this.reportYear = null;
    this.reportType = null;
    this.dateOfCreation = null;
    this.companyId = null;
    this.customerId = null;
    this.dueDate = null;
    this.difficulty = null;
    this.reportText = null;
    this.solutionText = null;
    this.solvingUserCode = null;
    this.solvedUserCode = null;
    this.solutionDate = null;
    this.creatorUserCode = null;
    this.lastChangeDate = null;
    this.lastChangeUserCode = null;
    this.lastUpdateDate = null;
    this.garantUserCode = null;
    this.garantSolvedUserCode = null;
    this.solutionDateGarant = null;
    this.priority = null;
    this.name = null;
    this.systemId = null;

  }
  // constructor(obj){
  //   for (var prop in obj) this[prop] = obj[prop];
  //
  // }


}

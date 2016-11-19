
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class MockData implements InMemoryDbService {
  createDb() {
    let reports = [
      {id_hlaseni: 1, text_hlaseni: 'Bombasto'},
      {id_hlaseni: 2, text_hlaseni: 'Tornado'},
      {id_hlaseni: 3, text_hlaseni: 'Magneta'},
    ];
    return {reports};
  }
}

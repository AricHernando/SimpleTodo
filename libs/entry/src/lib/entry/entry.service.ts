import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class EntryService {
  private http = inject(HttpClient);

  public getEntries = (category = 'all') =>
    firstValueFrom(
      this.http.get(`http://my-json-server.typicode.com/AricHernando/SimpleTodo/${category}`)
    );
}

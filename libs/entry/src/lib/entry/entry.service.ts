import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, firstValueFrom, Observable } from 'rxjs';
import { Entry } from './entry.util';

@Injectable({
  providedIn: 'root'
})

export class EntryService {
  private http = inject(HttpClient);
  
  private entrySubject: BehaviorSubject<Entry | null> = new BehaviorSubject<Entry | null>(null);
  public entry$ = this.entrySubject.asObservable();

  public getEntries = (category = 'all') =>
    firstValueFrom(
      this.http.get(`http://my-json-server.typicode.com/AricHernando/SimpleTodo/${category}`)
    );

  public addEntry = (entry: Entry) => {
    this.entrySubject.next(entry);
  }
}

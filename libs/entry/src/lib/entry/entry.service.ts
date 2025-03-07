import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, filter, first, firstValueFrom, map, merge, mergeAll, Observable, of, switchMap, tap, toArray } from 'rxjs';
import { Category, Entry } from './entry.util';

@Injectable({
  providedIn: 'root'
})

export class EntryService {
  private entriesSubject: BehaviorSubject<Entry[]> = new BehaviorSubject<Entry[]>([]);
  private fakeId = 0;

  public entries$: Observable<Entry[]> = this.entriesSubject.asObservable();

  public getEntriesByCategory = (category: Category = Category.all) => {
    return of(this.entriesSubject.value).pipe(
      mergeAll(),
      filter(entry => entry.category === category),
      toArray()
    )
  }
  
  public getEntriesById = (id: number) => {
    return of(this.entriesSubject.value).pipe(
      mergeAll(),
      first(entry => entry.id === id),
    );
  }

  public addEntry = (entry: Entry) => {
    entry.id = this.fakeId++;
    this.entriesSubject.next([...this.entriesSubject.value, entry]);
  }
}

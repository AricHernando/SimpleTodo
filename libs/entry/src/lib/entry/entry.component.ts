import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EntryService } from './entry.service';
@Component({
  selector: 'lib-entry',
  imports: [CommonModule],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.css',
})

export class EntryComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
 service = inject(EntryService);
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.category = params.get('category') || 'all';
        return this.service.getEntries(this.category);
      })
    )
  }
  
  category = 'all';
}
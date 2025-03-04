import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'single-entry',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './single-entry.component.html',
  styleUrl: './single-entry.component.css',
  providers: [HttpClient]
})

export class SingleEntryComponent {
  @Input() description = ''
  @Input() category = ''
}
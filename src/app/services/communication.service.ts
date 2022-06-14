import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  definingTheForm:EventEmitter<string> = new EventEmitter()

  constructor() { }
}

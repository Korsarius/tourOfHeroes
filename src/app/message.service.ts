import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  public messages: string[] = new Array<string>();

  public constructor() {}

  public add(message: string): void {
    this.messages.push(message);
  }

  public clear(): void {
    this.messages = new Array<string>();
  }
}

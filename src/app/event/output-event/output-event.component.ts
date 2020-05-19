import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-output-event',
  templateUrl: './output-event.component.html',
  styleUrls: ['./output-event.component.scss']
})
export class OutputEventComponent implements OnInit {

  @Output() putRingOnIt: EventEmitter<string>;

  constructor() {
    this.putRingOnIt = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  liked(): void {
    this.putRingOnIt.emit("oh oh oh");
  }

}

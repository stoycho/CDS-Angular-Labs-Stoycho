import { Component, OnInit } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  randomNumberHolder;

  constructor(private _randomNumberService:RandomService) { }

  placeRandomNumberInHolder() {
    this.randomNumberHolder = this._randomNumberService.generateNumber();
  }

  ngOnInit(): void {
  }

}

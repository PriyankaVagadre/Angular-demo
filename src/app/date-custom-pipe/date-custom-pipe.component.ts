import { Component, OnInit } from '@angular/core';
import {Constants} from './Constants';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-custom-pipe',
  templateUrl: './date-custom-pipe.component.html',
  styleUrls: ['./date-custom-pipe.component.scss']
})

@Pipe({
  name: 'sqrt'
})

export class DateCustomPipeComponent implements PipeTransform  {
  today: number = 3;;

  // transform(value: any, args?: any): any {
  //   return super.transform(value, Constants.DATE_FMT);
  // }

  transform(value: number ): number {
    return Math.sqrt(value);
  }


  

}

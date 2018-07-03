import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: number, args?: any): any {

    if(value == 2){
      return "Not Available";
    }
    else
    {
      return "Available";
    }
    
  }

}

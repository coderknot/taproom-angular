import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './keg.model';


@Pipe ({
  name: "alcoholContent",
  pure: false
})

export class AlcoholContentPipe implements PipeTransform {
  transform(input: Keg[], desiredAlcoholContent) {
    var output: Keg[] = [];
      if(desiredAlcoholContent === "low") {
        for (var i = 0; i< input.length; i++) {
          if (input[i].alcoholContent < 5) {
            output.push(input[i]);
          }
        }
      return output;
    } else if (desiredAlcoholContent === "high") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].alcoholContent >= 5) {
            output.push(input[i]);
          }
        }
        return output;
    } else {
      return input;
    }
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  imgPreview(input, img) {
    input = input.target
    if (input.files && input.files[0]) {
      var reader = new FileReader()
      
      reader.onload = (e) => {
        let imgEl = <HTMLImageElement>document.getElementById(img);
        imgEl.src = reader.result
      }
  
      reader.readAsDataURL(input.files[0])
    }
  }

}

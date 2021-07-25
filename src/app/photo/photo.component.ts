import {Component, OnInit} from '@angular/core';
import {PhotoService} from "../photo.service";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

public imageUrl: string = ''
  constructor(private photoService: PhotoService) {
  this.fetchPhoto()
  }

  ngOnInit(): void {
  }

  public getPhoto() {
   this.fetchPhoto()
  }

  public fetchPhoto(){
    this.photoService.getPhoto().subscribe(response => {
      this.imageUrl = response
    })
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxY2PlayerComponent, NgxY2PlayerOptions } from 'ngx-y2-player';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  youtubePlayerReady = false
  previewVideoID = 'z8WdQsPknf0'
  @ViewChild('video') video: NgxY2PlayerComponent;
  
  playerOptions: NgxY2PlayerOptions = {
    videoId: this.previewVideoID,
    height: 'auto',
    width: 'auto',
    resizeDebounceTime: 1,
    playerVars: {
      autoplay: 0,
      fs: 0,
      rel: 0
    },
  };

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    
  }

  // 4. The API will call this function when the video player is ready.
  onReady(event) {
      this.youtubePlayerReady = true
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  onStateChange(event) {
    
  }
  ///////////////////////////////////////////////////////////////////////////

  openPreviewModal() {
    (<any>$('#preview-modal'))
      .modal({
          onVisible: () => {
            this.playPreviewVideo()
          },
          onHide: () => {
            this.stopPreviewVideo()
          }
          })
      //.modal('setting', 'transition', 'fade')
      .modal('show')
  }

  playPreviewVideo = () => {
    console.log("Playing")
    if (this.youtubePlayerReady) {
      this.video.videoPlayer.playVideo();
    }
  }
  stopPreviewVideo = () => {
    console.log("stopping")
    if (this.youtubePlayerReady) {
      this.video.videoPlayer.stopVideo();
    }
  }

}

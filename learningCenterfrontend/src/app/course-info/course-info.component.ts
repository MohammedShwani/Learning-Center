import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxY2PlayerComponent, NgxY2PlayerOptions } from 'ngx-y2-player';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  YT: any
  youtubePlayer: any
  youtubePlayerReady = false
  done = false
  previewVideoSrc: any
  previewVideoID = '6wD4V0rvlDI'

  @ViewChild('video') video: NgxY2PlayerComponent;
  playerOptions: NgxY2PlayerOptions = {
    videoId: 'z8WdQsPknf0',
    height: 'auto', // you can set 'auto', it will use container width to set size
    width: 'auto',
    resizeDebounceTime: 1,
    playerVars: {
      autoplay: 0,
      fs: 0,
      rel: 0,
      origin: "http://localhost:4200"
    },
    // aspectRatio: (3 / 4), // you can set ratio of aspect ratio to auto resize with
  };

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {

    this.previewVideoSrc = this._sanitizer.bypassSecurityTrustResourceUrl(
      this.getFullYoutubeSrcFromVideoID(this.previewVideoID)
    )
    
  }

  private loadYoutubIFrameApi() {
    // 2. This code loads the IFrame Player API code asynchronously.

    /*let tag = document.createElement('script')
    let firstScriptTag = document.getElementById('course-info-container')
    tag.src = "https://www.youtube.com/iframe_api"
    firstScriptTag.appendChild(tag)*/
  }

  private initYoutubPlayer() {
    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    /*let windowHandler = (<any>window)
    windowHandler.onYouTubeIframeAPIReady = () =>  {
      this.YT = YT
      this.youtubePlayer = new this.YT.Player('player', {
        events: {
          'onReady': (e) => {
            this.onPlayerReady(e)
          },
          'onStateChange': (e) => {
            this.onPlayerStateChange(e)
          }
        }
      });
    }*/
  }

  private getFullYoutubeSrcFromVideoID(videoID: String) {
    return `https://www.youtube.com/embed/${videoID}?enablejsapi=1&showinfo=0&rel=0&autoplay=0&fs=0`
  }

  // 4. The API will call this function when the video player is ready.
  onReady(event) {console.log('player ready')
      this.youtubePlayerReady = true
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  onStateChange(event) {
    /*if (event.data == this.YT.PlayerState.PLAYING && !this.done) {
      this.done = true
    }*/
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

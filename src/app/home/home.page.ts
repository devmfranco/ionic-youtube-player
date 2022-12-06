import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import PlayerFactory from 'youtube-player';
import YoutubePlayer from 'youtube-player'; // npm install youtube-player --save
import youtubePlayer from 'youtube-player';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
player:any;
videoId:string="";
stopped:boolean=true;

  constructor() {}

  ngOnInit() {

  }



  play()
  {
    if (this.stopped)
    {
      if(this.player==undefined)
      {
        this.player=youtubePlayer('divid');
      }
        this.player.loadVideoById(this.videoId).then(()=>{
        this.player.playVideo();
        this.stopped=false;
      });
    
  }



} 


stop()
{
  if(!this.stopped)
  {
    this.player.stopVideo().then(()=>{;
    this.stopped=true;
  })
}
}
}
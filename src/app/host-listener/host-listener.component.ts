import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-listener',
  templateUrl: './host-listener.component.html',
  styleUrls: ['./host-listener.component.css']
})
export class HostListenerComponent {
 showButton: boolean = false;

 constructor() {
  this.updateButtonVisibility()
  
 }
 @HostListener('window:scroll', [])

 onWindowScroll():void{
  this.updateButtonVisibility()

 }


 updateButtonVisibility(){
this.showButton = window.pageYOffset >100
 }
 scrollToTop(){
  window.scroll({ top: 0, behavior: 'smooth' });
 }
}

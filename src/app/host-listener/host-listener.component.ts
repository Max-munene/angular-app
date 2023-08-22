import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-listener',
  templateUrl: './host-listener.component.html',
  styleUrls: ['./host-listener.component.css']
})
export class HostListenerComponent {
 showButton: boolean = true;

 @HostListener('window:scroll', [])
 onWindowScroll(){
  this.showButton = window.scrollX < 100
 }

 scrollTop(){
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
 }
  
 }

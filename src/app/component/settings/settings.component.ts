import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }
  private links = [
    {
      title: 'Home page',
      route: '/home',
      icon: 'home'
    },
    {
      title: 'About us',
      route: '/about-us',
      icon: 'people'
    },
    {
      title: 'Contact us',
      route: '/contact-us',
      icon: 'contact_phone'
    },
    {
      title: 'Article listing',
      route: '/articles',
      icon: 'list_alt'
    },
    {
      title: 'Article detail',
      route: '/article/1',
      icon: 'library_books'
    },
    {
      title: 'Post Article',
      route: '/article',
      icon: 'create'
    },
    {
      title: 'Login Page',
      route: '/login',
      icon: 'fullscreen'
    },
    {
      title: 'Logout Page',
      route: '/article',
      icon: 'add_box'
    },
    {
      title: 'Register Page',
      route: '/register',
      icon: 'face'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'build'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'zoom_in'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'zoom_out'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'watch_later'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'error'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'error_outline'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'airplay'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'mic'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'mic_none'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'pause'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'play_arrow'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'replay'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'skip_next'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'skip_previous'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'volume_off'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'videocam'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'location_on'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'email'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'mail_outline'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'add'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'add_circle_outline'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'create'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'reply'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'reply_all'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'save_alt'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'cloud_upload'
    },
    {
      title: 'Settings Page',
      route: '/settings',
      icon: 'cloud_download'
    },
  ];
  ngOnInit() {
  }

}

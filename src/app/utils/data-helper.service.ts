import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataHelper {
  /* static data */
  private avatars = [
    '../assets/image/avatar/1.png',
    '../assets/image/avatar/2.png',
    '../assets/image/avatar/3.png',
    '../assets/image/avatar/5.jpg',
    '../assets/image/avatar/6.jpg',
    '../assets/image/avatar/7.png',
    '../assets/image/avatar/8.png',
    '../assets/image/avatar/9.png',
    '../assets/image/avatar/10.jpg',
    '../assets/image/avatar/11.png',
    '../assets/image/avatar/12.png',
    '../assets/image/avatar/13.png',
  ];
  private names = [
    'Sawakonotsadako',
    'Sawakonotsadako',
    'Sawakonotsadako',
    'Sawakonotsadako',
    'Sawakonotsadako',
    'Sawakonotsadako',
    'Sawakonotsadako',
    'Sawakonotsadako',
    'Sawakonotsadako',
    'Sawakonotsadako',
    'Sawakonotsadako',
    'Sawakonotsadako',
  ];
  private jobs = [
    'Developer',
    'Developer',
    'Developer',
    'Developer',
    'Developer',
    'Developer',
    'Developer',
    'Developer',
    'Developer',
    'Developer',
    'Developer',
    'Developer',
  ];
  private images = [
    '../assets/image/blog/blog1.jpg',
    '../assets/image/blog/blog2.jpg',
    '../assets/image/blog/blog3.jpg',
    '../assets/image/blog/blog4.jpg',
    '../assets/image/blog/blog5.jpg',
    '../assets/image/blog/blog6.jpg',
    '../assets/image/blog/blog7.jpg',
    '../assets/image/blog/blog8.jpg',
    '../assets/image/blog/blog9.jpg',
    '../assets/image/blog/blog11.jpg',
    '../assets/image/blog/blog12.jpg',
    '../assets/image/blog/blog13.jpg',
  ];
  private titles = [
    'How I stumbled across a niche hobby I never knew existed',
    'How Google Marketers Exploit Your Discomfort',
    'The Atrocities in Myanmar Can’t Be Summed Up in a Tweet',
    'How Hitler Nearly Destroyed the Great American Novel',
    'Cities Will Blend Together Into Giant Urban Regions',
    'Technology Enables Bullying, but Can It Empower Survivors, Too?',
    '5 Things I Wish I’d Known Before Starting an LLC',
    'Postpartum Depression in Black Women Is a Silent Epidemic',
    'The Best Homesickness Cure When You Can’t Go Home for the Holidays',
    'How to Lead Your Family Like an Entrepreneur',
    'The Dirty Secret of Elite College Admissions',
    'How Democrats (and Republicans) Can Survive Victory',
  ];
  private data = [];
  private links = [
    {
      title: 'Home ',
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
      title: 'Login ',
      route: '/login',
      icon: 'fullscreen'
    },
    {
      title: 'Logout ',
      route: '/article',
      icon: 'add_box'
    },
    {
      title: 'Register ',
      route: '/register',
      icon: 'face'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'build'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'zoom_in'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'zoom_out'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'watch_later'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'error'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'error_outline'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'airplay'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'mic'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'mic_none'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'pause'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'play_arrow'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'replay'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'skip_next'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'skip_previous'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'volume_off'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'videocam'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'location_on'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'email'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'mail_outline'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'add'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'add_circle_outline'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'create'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'reply'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'reply_all'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'save_alt'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'cloud_upload'
    },
    {
      title: 'Settings ',
      route: '/settings',
      icon: 'cloud_download'
    },
  ];
  private navLinks = [
    {
      path: '/home',
      label: 'Home',
      icon: 'home'
    },
    {
      path: '/about-us',
      label: 'About us',
      icon: 'people'
    },
    {
      path: '/settings',
      label: 'Settings',
      icon: 'settings'
    }
  ];
  constructor() {}
  articles() {
    for (let i = 0; i < 12; i++) {
      let article = {
        id: i.toString,
        image: this.images[i],
        title: this.titles[i],
        body: '',
        author: {
          id: '',
          avatar: this.avatars[i],
          name: this.names[i],
          job: this.jobs[i],
        },
      };
      this.data.push(article);
    }
    return this.data;
  }
  sideLinks() {
    return this.links;
  }
  getNavLinks() {
    return this.navLinks;
  }
  applyJsonFile() {
    return '';
  }
}

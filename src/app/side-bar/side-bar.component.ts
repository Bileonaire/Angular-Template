import {Component, OnDestroy, OnInit} from '@angular/core';
import { MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {Event as RouterEvent, Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, OnDestroy {

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private media: ObservableMedia,
    private router: Router
  ) {
    this.registerIcons();
    this.createMediaWatcher();

    router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.url;
      }
    });

  }

  isMenuOpen: Boolean;
  over: String = 'side';
  watcher;
  activeRoute = '';

  routes = [
    {name: 'Dashboard', iconActive: 'dashboard', iconInActive: 'dashboard-inactive', link: 'dashboard', pages: []},
    {
      name: 'Routes', iconActive: 'routes', iconInActive: 'routes-inactive', link: 'routes', pages: [
        {name: 'Create Route', link: 'routes/create'},
        {name: 'Inventory', link: 'routes/inventory'}
      ]
    },
    {
      name: 'Trips', iconActive: 'trips', iconInActive: 'trips-inactive', link: 'trips', pages: [
        {name: 'Pending Requests', link: 'trips/pending'},
        {name: 'Trip History', link: 'trips/history'},
        {name: 'Trip Itinerary', link: 'trips/itinerary'}
      ]
    },
    {
      name: 'Cabs', iconActive: 'cabs', iconInActive: 'cabs-inactive', link: 'cabs', pages: [
        {name: 'Pending Requests', link: 'cabs/pending'},
        {name: 'Trip History', link: 'cabs/itinerary'}
      ]
    },
    {
      name: 'Settings', iconActive: 'settings', iconInActive: 'settings-inactive', link: 'settings', pages: [
        {name: 'Fellows', link: 'settings/fellows'},
        {name: 'Departments', link: 'settings/departments'},
      ]
    }
  ];

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.watcher) {
      this.watcher.unsubscribe();
    }
  }

  registerIcons = () => {
    const logos = [
      {name: 'logo', url: 'assets/logo.svg'},
      {name: 'dashboard', url: 'assets/sidebar-icons/ic_active_dashboard.svg'},
      {name: 'dashboard-inactive', url: 'assets/sidebar-icons/ic_inactive_dashboard.svg'},
      {name: 'routes', url: 'assets/sidebar-icons/ic_active_routes.svg'},
      {name: 'routes-inactive', url: 'assets/sidebar-icons/ic_inactive_routes.svg'},
      {name: 'trips', url: 'assets/sidebar-icons/ic_active_location.svg'},
      {name: 'trips-inactive', url: 'assets/sidebar-icons/ic_inactive_location.svg'},
      {name: 'cabs', url: 'assets/sidebar-icons/ic_active_cabs.svg'},
      {name: 'cabs-inactive', url: 'assets/sidebar-icons/ic_inactive_cabs.svg'},
      {name: 'settings', url: 'assets/sidebar-icons/ic_active_settings.svg'},
      {name: 'settings-inactive', url: 'assets/sidebar-icons/ic_inactive_settings.svg'}
    ];

    logos.forEach(item => {
      this.iconRegistry.addSvgIcon(item.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(item.url));
    });
  };

  createMediaWatcher = () => {
    this.watcher = this.media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.isMenuOpen = false;
        this.over = 'over';
      } else {
        this.isMenuOpen = true;
        this.over = 'side';
      }
    });
  };

  menuClicked = (sideNav, shouldCloseWhenClicked = false) => {
    if (this.over === 'over' && shouldCloseWhenClicked) {
      sideNav.close();
      this.isMenuOpen = false;
    }
  };
}

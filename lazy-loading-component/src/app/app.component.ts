import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazy-loading-component';
  constructor(private vcr: ViewContainerRef, private cfr: ComponentFactoryResolver) { }

  async loadAdmin() {
    this.vcr.clear();
    const { AdminComponent } = await import('./admin/admin.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(AdminComponent)
    );
  }
  async loadUser() {
    this.vcr.clear();
    const { UserlistComponent } = await import('./userlist/userlist.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(UserlistComponent)
    );
  }
}

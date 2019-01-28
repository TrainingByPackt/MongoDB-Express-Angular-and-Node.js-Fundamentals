import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ApplicationRef } from '@angular/core';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { enableDebugTools } from "@angular/platform-browser"

if (environment.production) {
  enableProdMode();
}

  platformBrowserDynamic().bootstrapModule(AppModule)
  .then(modRef => {
    const appRef = modRef.injector.get(ApplicationRef);
    const compRef = appRef.components[0];
    // allows to run `ng.profiler.timeChangeDetection();`
    enableDebugTools(compRef);
  })
  .catch(err => console.log(err));

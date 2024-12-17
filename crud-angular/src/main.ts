import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule, {
	// providers:[provideHttpClient(withFetch())],
  	ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));

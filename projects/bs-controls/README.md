# Angular Bootstrap Controls

This library contains commonly used bootstrap controls as Angular components.
Here is <a href="https://stackblitz.com/edit/ng-bs-controls-sample?embed=1&file=app/app.component.html">live stackBlitz sample</a>

## Installation

Install `ng-bs-controls` from `npm`:

```bash
npm install ng-bs-controls --save
```

Add BsControlsModule package to NgModules imports:

```
import { BsControlsModule } from 'ng-bs-controls';

@NgModule({
...
imports: [BsControlsModule,...]
...
})
```

Use needed components in your forms, you can refer to sample form in <a href="https://github.com/amitmca43/ng-bs-controls">ng-bs-controls github</a>

```
<app-form-text-email
[(ngModel)]="email"
[formLabel]="'Email'"
[name]="'email'"
[isRequired]="true"
[setAutofocus]="true">
</app-form-text-email>
```

You will need bootstrap styles:

- `Bootstrap 4`

```
<!--- index.html -->
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
```

### License

[MIT](https://github.com/amitmca43/ng-bs-controls/blob/master/projects/bs-controls/LICENSE)

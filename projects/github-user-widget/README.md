# Libreria Github User Widget

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Introducción
Muestra la información de un usuario de GitHub haciendo uso de la libreria de la API. Libreria para Angular.

### Instalación
```
npm i rus-github-user-widget
```

### Configuración
Modificamos el app.module.ts
``` typescrypt
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GithubUserWidgetModule } from 'rus-github-user-widget';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GithubUserWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
### Añadir estilos
En src/styles de la App principal importamos:

### Uso
* Con buscador
```<guw-usuario [busqueda]="'klerith'"></guw-usuario>```

* Sin buscador
```<guw-buscador-usuario></guw-buscador-usuario>```


## Code scaffolding

Run `ng generate component component-name --project githubUserWidget` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project githubUserWidget`.
> Note: Don't forget to add `--project githubUserWidget` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build githubUserWidget` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build githubUserWidget`, go to the dist folder `cd dist/github-user-widget` and run `npm publish`.

## Running unit tests

Run `ng test githubUserWidget` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

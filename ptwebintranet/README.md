# Ptwebintranet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
ng generate module core => incluye el core de la aplicaion, se pueden ingresar guars, el core debe ir dentro app module
 	                            
 	
 
 	
 	
 ##	ng generate module data
 	
  el modulo data no se va a llamar en el module app por que no siempre se va a cargar. aqui van todos los datos
 	dentro una carpeta constanst de paginas, secciones urls y eso para cuando se quiera cambiar algo especifico 
 	dentro una carpeta que se llama interface, le decimos a los metodos que recibimos y que mandamos , atravez de una interfaz
 	dentro una carpeta que se llama schema, aqui van las clases con partes de la interface 
 	dentro una carpeta que se llama services, enfocada en la informacion, servicios para la información 
 	carpeta opcional mocks => texto plano tipo json para que se generen 
 	
 	
 	
 	
 	## ng generate module shared 
  vamos a cargar 2 carpetas:
 	                           components => 
 	                           services =>  
 	                                                       
 	
 	
 	## nivel de app crear carpeta layout 
  se utiliza para introducir componentes genericos, una applicacion se componentes de un esckleton => template
 	
 	
 	
 	
 	## nivel de app crear una carpeta que se llame modules  
 	   
   autenticathion registro login resed password, panel de administracion
 	         
 	
 	
 	## para llamar las rutas
  dentro de la carpeta tsconfig.js configurados los pahts para no tener problemas con ../../.../
 	ej
 	
      "paths":{
      "@core/*":["app/core/*"],
      "@shared/*":["app/shared/*"],
      "@components/*":["app/shared/"],
      "@env/*": ["envioroment/*"],
      "@modules/*":["app/modules/*"],
      "@data/*": ["app/data/*"],
      "@layout/*": ["app/layout/*"]
    }
    
  ## dentro de las carpeta layout generar los siguientes componentes
      
  ng generate component layout/skeleton
 	ng generate component layout/footer
 	ng generate component layout/navigation

# Proyecto de Automatizacion Saucedemo QA

Pruebas automatizadas para [Sauce Demo](https://www.saucedemo.com) usando **Playwright**, **Cucumber BDD** y **TypeScript**.

## Descripción del Proyecto

Este proyecto implementa pruebas automatizadas para la aplicación web **SauceDemo** utilizando un enfoque basado en **BDD (Behavior Driven Development)** con escenarios escritos en lenguaje Gherkin.

El framework permite:

- Automatización web con Playwright.
- Definición de escenarios mediante Gherkin.
- Ejecución de pruebas mediante Playwright Test.
- Gestión de ambientes mediante archivos de configuración.
- Ejecución selectiva de escenarios mediante Tags.
- Integración con GitHub Actions.

## Escenarios automatizados

Actualmente se contemplan escenarios como:

1. El usuario puede iniciar sesión con credenciales válidas.  
2. El usuario no puede iniciar sesión con credenciales inválidas.  
3. El usuario puede agregar productos al carrito de compras.  
4. El usuario puede ver los productos agregados en el carrito.  
5. El usuario puede completar el proceso de compra y ver la confirmación.  

**Patrón de diseño:** Page Object Model (POM)

**Librerías utilizadas:**  
- Playwright Test
- Playwright BDD
- TypeScript
- Faker.js
- Cross-env
---

## Prerequisitos

- Node.js >= 18  
- npm >= 9  
- Git

---

## Instalación

**1. Clonar el repositorio:** 
    
    bash
    git clone https://github.com/andresalban97/nuevoRetoSauceDemo.git
    cd nuevoRetoSauceDemo

**2. Instalar dependencias:**
    
    bash
    npm install

**3. Instalar los navegadores de Playwright:**
    
    bash
    npm run install:pw

## Estructura del Proyecto

    saucedemo-qa/
    ├─ bdd/
    │  ├─ features/        # Archivos feature en Gherkin
    │  ├─ pages/           # Clases POM (Page Object Model)
    │  ├─ steps/           # Step definitions
    │  ├─ supports/        # Hooks, entorno, locators
    │  └─ fixtures.ts
    ├─ reports/           # Reportes JSON y capturas
    ├─ playwright-report/ # Reporte HTML generado por Playwright
    ├─ test-results/      # Resultados de ejecuciones
    ├─ environment.conf
    ├─ environment.ts
    ├─ package.json
    ├─ playwright.config.ts
    └─ README.md

## Configuración del Entorno

La configuración de ambientes se administra mediante:

  
    environment.conf
    

El archivo utiliza formato JSON.

Ejemplo:

```json
{
  "default": {
    "BASE_URL": "https://www.saucedemo.com",
    "USERNAME": "standard_user",
    "PASSWORD": "secret_sauce"
  },

  "cert": {
    "BASE_URL": "https://www.saucedemo.com",
    "USERNAME": "standard_user",
    "PASSWORD": "secret_sauce"
  }
}
```

---
## Selección del ambiente

El ambiente se define mediante la variable:


    NODE_ENV


Ejemplo:

    bash
    NODE_ENV=cert


El framework cargará automáticamente la configuración correspondiente.

---

## Ejecución de Pruebas

Ejecutar pruebas basicas:

    bash
    npm run test

**Ejecución personalizada (variables de entorno)**
    
    bash
    NODE_ENV=cert  TAGS=@LoginFail npm run test

## Scripts disponibles

Configuración actual de `package.json`:

    "scripts": {
        "test": "cross-env NODE_ENV=${NODE_ENV:-default} npx bddgen test --tags=${TAGS:-@default} && npx playwright test",
        "install:pw": "npx playwright install",
        "show-report": "npx playwright show-report"
    }

Descripción:

| Script | Descripción |
|---|---|
| npm test | Genera pruebas BDD y ejecuta Playwright |
| npm run install:pw | Instala navegadores Playwright |
| npm run show-report | Visualiza reporte HTML |

# Integración Continua (GitHub Actions)

El proyecto cuenta con integración mediante GitHub Actions.

Características:

- Ejecución manual mediante `workflow_dispatch`.
- Selección dinámica de Tags.
- Selección de ambiente.
- Instalación automática de dependencias.
- Ejecución de pruebas automatizadas.

    env:
    NODE_ENV: cert
    TAGS: ${{ inputs.TAGS }}

# Notas

- Las credenciales no se almacenan dentro de los archivos `.feature`.
- Los datos de prueba son administrados mediante `environment.conf`.
- Los escenarios utilizan Page Object Model.
- Los Tags permiten ejecutar grupos específicos de pruebas.
- Se pueden agregar nuevos ambientes sin modificar los escenarios.
- La automatización está preparada para ejecución local y CI/CD.
# Dat3-Frontend-Exam

## Question 1

### JS

1. What are higher-order functions in JavaScript? Give an example.

Higher-order functions er funktioner som enten tager andre funktioner som argumenter eller returnerer funktioner som deres resultater.

### REACT

2. What is a React component?

Et React component er et stykke genbrugeligt kode som kan bruges til at bygge en UI.

3. Explain the benefits of using components compared to how you would build a web application in vanilla javascript.

Det gode ved at gøre bruge af komponenter er, at man kan lave sin kode genandvendelig, nemmere at vedligeholde m.m. i forhold til at man har hele sin kode i en fil.

Komponenter gør man kan bryde komplekse UIs ned i mindre stykker, som er nemmere at forstå og vedligeholde.

### Security/Routing/Styling

4. Explain what React Router is and its purpose in a React application.

Eftersom React er lavet til SPA, så er der ikke nogen routing indbygget. React Router er et tredjeparts bibliotek som giver mulighed for at lave routing i React.

5. Show an example of how routing works in React

## Question 2

### JS

1. What is a callback function in JavaScript and when would you use one?

En Callback function er en funktion som er en parameter til en anden funktion. Callbacks bruges til at udføre kode efter en anden funktion er færdig med at køre.

### REACT

2. What is JSX? Provide an example.

JSX er en syntaks extension til JavaScript som bruges til at lave UI elementer. Det blev lavet af Facebook for React, men andre frameworks bruger det også.

3. How does JSX differ from HTML?

JSX ligner HTML, men forskellen ligger i at JSX tillader indlejret JavaScript.

### Security/Routing/Styling

4. Describe the purpose of flexbox and grid in css, and show some examples of what can be achieved by applying them.

Flexbox og Grid bruges til at lave responsive layouts.

Flexbox fokuserer på at lave layouts med en dimension (ex. row eller column), mens Grid fokuserer på at lave layouts med to dimensioner (ex. row & column).

## Question 3

### JS

1. What are the purposes and differences between the package.json and package-lock.json files?

#### package.json

Denne fil indeholder noget information omkring projektet, og de
versioner af modules som vi bruger, denne fil er ligesom en pom.xml som
vi bruger i Java

#### package-lock.json

Denne fil er en slags lås for de versioner som bruges af projektet, så
hvis man vil installere projektet og køre det hvor denne fil eksisterer,
så ved Node præcis hvilke versioner af alle modules den skal tage, denne
fil ændres kun hvis NPM ændre node_modules træet eller package.json.

### REACT

2. Describe the purpose of props in React.

Props er en måde at sende data fra en parent component til en child component.

3. Explain the role of state in a React component.

State er en måde at holde styr på data i en component. Når state ændres, så vil componenten blive re-rendered.

### Security/Routing/Styling

4. Describe conceptually how we deploy a React frontend application to a docker container on a virtual machine.

Vi skal starte med at have vores React Applikation ind på DockerHub, vi plejer at gøre det gennem GitHub actions, så hver gang vi pusher til GitHub, så bygger den vores frontend og pusher den til DockerHub, der bruger vi .github/workflows/workflow.yml.

Derefter skal vi ind på vores Virtuelle Maskine som kører via DigitalOcean, inde på vores VM skal vi have en `docker-compose.yml` fil, som vi bruger til at opsætte vor docker container, så den kan køre vores frontend.

Og til sidst skal vi køre `docker-compose up` for at starte docker containeren.

## Question 4

### JS

1. Explain the concept of promises in JavaScript. How do they differ from callbacks?

Promises er objekter som repræsenterer en success/fejl fra en asynkron operation, eftersom vi ikke ved hvordan en asynkron operation er færdig, kan vi ikke bare returnere en værdi, så vi bruger promises til at håndtere det.

Promises er nemmere at læse og vedligeholde end callbacks, og de kan også chaines sammen.

### REACT

2. Explain the following code:

```jsx
import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error, info) => {
      console.error("Error caught by error boundary:", error, info);
      setHasError(true);
    };

    window.addEventListener("error", handleError);
    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return children;
};

const MyComponent = () => {
  return (
    <ErrorBoundary>
      {/* The rest of the component tree goes here */}
    </ErrorBoundary>
  );
};
```

Koden viser en ErrorBoundary component som bruges til at fange fejl i React. ErrorBoundary componenten bruger useState og useEffect hooks til at holde styr på om der er sket en fejl, og hvis der er, så vil den vise en fejlbesked, i stedet for at programmet crasher.

### Security/Routing/Styling

3. Describe some important design principles when developing a website that should be working well on mobile, tablet, as well as desktop browsers.

Hvis man gør brug af media queries og fleksible grids/layouts så når man langt, eftersom man kan lave responsive layouts i form af tekststørrelse, billeder, m.m.

## Question 5

### JS

1. What is the difference between synchronous and asynchronous programming and how does async and await fit into this?

Synchronous programming er når en operation blokerer den efterfølgende kode, indtil den er færdig. Asynchronous programming er når en operation ikke blokerer den efterfølgende kode, indtil den er færdig.

Eftersom nogen operationer er designet til at være asynkrone, så kan vi ikke bare kalde dem og forvente at de returnerer en værdi, så vi bruger async og await til at håndtere det når vi vil bruge det synkront.

### REACT

2. Describe how conditional rendering is achieved in React.

Vi kan benytte os af ternary operator til at lave conditional rendering i React.

3. Provide an example of using the ternary operator for conditional rendering.

### Security/Routing/Styling

4. Describe conceptually the typical flow of using JWTs for user authentication in a React application.

Når en bruger logger ind, så gemmer vi tokenet i local storage, og så kan vi bruge det når vi skal hente data fra backend.

## Question 6

### JS

1.  What is the difference between localStorage and sessionStorage in JavaScript?

#### Local Storage

local storage er gemt på computeren, kan bruges over flere sessioner samtidig

#### Session Storage

session storage er gemt i sessionen, og clearet når browseren/tabben er lukket

### REACT

2. What is the purpose of the useEffect hook?

useEffect hooken bruges til at håndtere side effekter i React, man kan få dem til at kaldes når en state ændres, eller når componenten bliver mounted/unmounted.

3. Explain the need for the dependencies array in the useEffect hook.

Dependencies arrayet bruges til at fortælle useEffect hvilke state den skal lytte på, så hvis en af dem ændres, så vil useEffect blive kaldt, og hvis arrayet er tomt så vil useEffect kun blive kaldt når componenten bliver mounted/unmounted.

### Security/Routing/Styling

4. Explain how navigation works in React, and the difference from how it's done in a multipage application.

Eftersom React er en SPA, så er der ikke nogen routing indbygget. React Router er et tredjeparts bibliotek som giver mulighed for at lave routing i React.

5. Show an example of how navigation can be implemented in React

## Question 7

### JS

1. What is the purpose of the window object in JavaScript?

Window objektet er det globale objekt i browseren, og det indeholder alle de globale variabler, funktioner, m.m., som fx `document` og `localStorage`

### REACT

2. How are events handled in React compared to vanilla javascript?

Forskellen er at React bruger syntetiske events, som er en wrapper omkring de rigtige events, så React kan håndtere dem på tværs af forskellige browsere.

Derudover bruger React camelCase i stedet for lowercase, så `onclick` bliver til `onClick`.

3. Show examples of how to handle form submit events, and how to handle input change events.

### Security/Routing/Styling

4. Describe and show how we log in a user in React with JWT.

Når en bruger logger ind, så gemmer vi tokenet i local storage, og så kan vi bruge det når vi skal hente data fra backend.

### Question 8

### JS

1. Explain the concept of event bubbling in JavaScript.

Event bubbling er når et event bliver håndteret af et element, og så bliver det sendt videre til elements forælder, og så videre.

### REACT

2. What is the purpose of the key attribute in React lists?

Key attributten bruges til at identificere elementer i en liste, så React kan genbruge dem i stedet for at lave nye, det gør at React kan lave færre DOM operationer, og dermed gøre det hurtigere.

3. Explain how the map function is used for rendering lists in React.

Map funktionen bruges til at lave en liste af elementer, som kan bruges i JSX.

### Security/Routing/Styling

4. Describe conceptually what HTTPS is and how we got it working on our deployed websites.

HTTPS (Hypertext Transfer Protocol Secure) er en sikker version af HTTP, som bruger TLS (Transport Layer Security) til at kryptere dataen mellem klienten og serveren.

Den måde som vi bruger det på er gennem Traefik som håndterer vores HTTPS certifikater, og så bruger vi ACME (Automatic Certificate Management Environment) til at generere vores certifikater.

## Question 9

### JS

1. What is the scope of a variable in JavaScript? Explain the difference between global and local scope.

Forskellen på global og local scope er at global scope er tilgængeligt overalt i programmet, mens local scope kun er tilgængeligt i den funktion/block-scope hvor den er defineret.

### REACT

2. How are controlled components different from uncontrolled components in React forms?

Controlled components er når React håndterer form data, mens uncontrolled components er når DOM håndterer form data.

3. Explain the role of the onChange event in form handling and show examples.

onChange eventet bliver kaldt når en bruger ændrer en input, og så kan vi bruge det til at opdatere state, og dermed opdatere UI.

### Security/Routing/Styling

4. Explain how sub routing is working

Eftersom React er en SPA, så er der ikke nogen routing indbygget. React Router er et tredjeparts bibliotek som giver mulighed for at lave routing i React.

5. Show an example of using sub routing with the element.

## Question 10

### JS

1. What is the spread operator in JavaScript and how does it differ from the rest operator?

Spread Operatoren bruges til at sprede et array eller objekt ud i en anden array eller objekt, mens rest operatoren bruges til at samle resten af argumenterne i en funktion.

### REACT

2. What are React Hooks? Provide examples of at least two built-in hooks.

React Hooks er funktioner som giver mulighed for at bruge state, livscyklus metoder, m.m. i functional components.

To indbyggede hooks er useState og useEffect.

3. Explain the difference between useState and useEffect.

useState bruges til at holde styr på state af variabler

useEffect bruges til at håndtere side effekter i React.

4. Show example of how you handle errors in React.

### Security/Routing/Styling

5. Describe conceptually what Same Origin Policy and CORS is, and how we avoid getting CORS errors when fetching data from an API.

CORS (Cross-Origin Resource Sharing) er en mekanisme som tillader en web browser til at få adgang til ressourcer fra en anden origin end den origin som den blev serveret fra.

Same Origin Policy er en browser security feature som forhindrer en web browser i at få adgang til ressourcer fra en anden origin.

## Question 11

### JS

1. What is the difference between synchronous and asynchronous programming and how does async and await fit into this?

Synchronous programming er når en operation blokerer den efterfølgende kode, indtil den er færdig. Asynchronous programming er når en operation ikke blokerer den efterfølgende kode, indtil den er færdig.

Eftersom nogen operationer er designet til at være asynkrone, så kan vi ikke bare kalde dem og forvente at de returnerer en værdi, så vi bruger async og await til at håndtere det når vi vil bruge det synkront.

### REACT

2. What is the purpose of lifting state up in React?

Lifting State up er når to eller flere komponenter deler state, så skal vi flytte state op i deres fælles parent component, så de kan dele state.

3. Show how you would lift state up in a React application.

### Security/Routing/Styling

4. Show a few examples of responsive design.

## Question 12

### JS

1. Explain the concept of promises in JavaScript. How do they differ from callbacks?

Promises er objekter som repræsenterer en success/fejl fra en asynkron operation, eftersom vi ikke ved hvordan en asynkron operation er færdig, kan vi ikke bare returnere en værdi, så vi bruger promises til at håndtere det.

Promises er nemmere at læse og vedligeholde end callbacks, og de kan også chaines sammen.

### REACT

2. Describe how conditional rendering is achieved in React.

Vi kan benytte os af ternary operator til at lave conditional rendering i React.

3. Provide an example of using the ternary operator for conditional rendering.

### Security/Routing/Styling

4. Describe the purpose of flexbox and grid in css, and show some examples of what can be achieved by applying them.

Flexbox og Grid bruges til at lave responsive layouts.

Flexbox fokuserer på at lave layouts med en dimension (ex. row eller column), mens Grid fokuserer på at lave layouts med to dimensioner (ex. row & column).

## Question 13

### JS

1. What are higher-order functions in JavaScript? Give an example.

Higher-order functions er funktioner som enten tager andre funktioner som argumenter eller returnerer funktioner som deres resultater.

### REACT

2. Describe the purpose of props in React.

Props er en måde at sende data fra en parent component til en child component.

3. Explain the role of state in a React component.

State er en måde at holde styr på data i en component. Når state ændres, så vil componenten blive re-rendered.

### Security/Routing/Styling

4. Describe and show how we log in a user in React with JWT.

Når en bruger logger ind, så gemmer vi tokenet i local storage, og så kan vi bruge det når vi skal hente data fra backend.

## React

### 3a.

Props
https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/components/MyProfile/EditProfile.jsx#L7

State
https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/components/MyProfile/EditProfile.jsx#L8

### 3b.

useEffect
https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/components/MyProfile/EditProfile.jsx#L11

### 4

handling events
https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/components/MyProfile/EditProfile.jsx#L38

i react: onChange osv holder referencer til funktioner, så vi skal ikke kalde dem med `()`, ellers kaldes den med det samme

### 5

conditional rendering
https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/components/Header/Header.jsx#L34

### 6

lists and keys
https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/components/MyProfile/EditProfile.jsx#L42

hvis ingen key, then what?

### 7

forms - Controlled:
når et land bliver valgt, håndteres det af React
https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/components/MyProfile/EditProfile.jsx#L38

### 9

vise react router error handling

### 10

lifting state
charInfo er i App.jsx fordi den bruges i mange undersider
https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/App.jsx#L50
ex:
https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/App.jsx#L94
https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/App.jsx#L99

## React Router, security, styling and deployment

### 1

denne App.jsx

### 2

nav-bar
https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/components/Header/Header.jsx#L18

### 3

denne App.jsx
ex:
/react/x
/react/y
/react/z

### 4

en bruger logger ind med email og password
https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/pages/Login/Login.jsx#L21

så gemmer vi tokennet i storage, og så kan vi bruge det når vi skal hente data fra backend

### 5

https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/pages/Login/Login.jsx#L21
https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/util/api.mjs#L11
https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/util/api.mjs#L53

### 6

fra java, right??? not sure om vi har lavet det korrekt ahah

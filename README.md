# Dat3-Frontend-Exam

## Question 1

### JS

1. What are higher-order functions in JavaScript? Give an example.

Higher-order functions er funktioner som enten tager andre funktioner som argumenter eller returnerer funktioner som deres resultater.

### REACT

2. What is a React component?

Et React component er et stykke genbrugeligt kode som kan bruges til at bygge en UI.

Komponenter kan være både function components og class components, men vi har kun lært om function components, så det er dem vi bruger.

Hvert komponent kan have dets egen state, lifecycle metoder, og de kan tage imod input data (props) og returnere UI.

3. Explain the benefits of using components compared to how you would build a web application in vanilla javascript.

Der er mange forskellige fordele ved at bruge komponenter i forhold til hvordan man ville bygge en web applikation i vanilla JavaScript.

Foreksempel:

- Modulært: dvs. komponenter tillader os at opdele UI i små stykker, som er nemmere at forstå og vedligeholde.
- Genandvelig: Komponenter gør det muligt at genbruge samme komponent flere steder i koden, så hvis vi skal ændre noget i en komponent, så ændrer vi det kun ét sted.
- State management: Hvert komponent kan have deres egen state, så hvis en state ændres i et komponent, så vil kun det komponent blive re-rendered, og ikke hele applikationen.
- Component Lifecycle: Komponenter har deres egne livscyklus metoder, som gør det muligt at håndtere side effekter i React.

### Security/Routing/Styling

4. Explain what React Router is and its purpose in a React application.

Eftersom React er lavet til SPA, så er der ikke nogen routing indbygget.

React Router er et tredjeparts bibliotek som giver mulighed for at lave routing i React, det er essentielt hvis man vil efterligne en multipage applikation uden at skulle lave en ny request til serveren hver gang.

5. Show an example of how routing works in React

## Question 2

### JS

1. What is a callback function in JavaScript and when would you use one?

En Callback function er en funktion som er en parameter til en anden funktion, hvor den anden funktion så kalder callback funktionen.

### REACT

2. What is JSX? Provide an example.

JSX (JavaScript XML) er en syntaks extension til JavaScript som blev udviklet til React, men nu om dage er det ikke eksklusivt til React, andre frameworks bruge det også.

Det er en XML-lignende syntaks for at skrive nested HTML i JavaScript.

3. How does JSX differ from HTML?

Eftersom JSX er en i klasse/funktion i JavaScript, betyder det at vi kan bruge JavaScript i JSX så vi kan få en mere dynamisk UI.

JSX bruger også camelCase navngivning for HTML attributer.

### Security/Routing/Styling

4. Describe the purpose of flexbox and grid in css, and show some examples of what can be achieved by applying them.

Flexbox og Grid bruges til at lave responsive layouts, dvs. når en skærm ændre størrelse, så skal element ikke flytte sig over hinanden eller ud over skærmen, sammen med media queries så kan vi lave responsive layouts som tilpasser sig skærmstørrelsen.

Flexbox fokuserer på at lave layouts med en dimension (ex. row eller column), mens Grid fokuserer på at lave layouts med to dimensioner (ex. row & column).

Eksempel: Hvis man vil have nogen bokse, så på en computer må de gerne være flere på række, men på mobil vil det være alt for småt, så derfor skal de være på 1 række ned under hinanden.

## Question 3

### JS

1. What are the purposes and differences between the package.json and package-lock.json files?

#### package.json

Denne fil indeholder noget information omkring projektet, scripts, og de versioner af modules som vi bruger, denne fil er ligesom en pom.xml som vi bruger i Java

#### package-lock.json

Denne fil er en slags lås for de versioner som bruges af projektet, så hvis man vil installere projektet og køre det hvor denne fil eksisterer, så ved Node præcis hvilke versioner af alle modules den skal tage, denne fil ændres kun hvis NPM ændre node_modules træet eller package.json.

### REACT

2. Describe the purpose of props in React.

Props er en måde at sende data fra en parent component til en child component, dvs. de tillader komponenter til at være dynamiske og genandvendelige.

3. Explain the role of state in a React component.

State er en måde at holde styr på data i en component. Når state ændres, så vil componenten blive re-rendered.

### Security/Routing/Styling

4. Describe conceptually how we deploy a React frontend application to a docker container on a virtual machine.

Vi skal starte med at have vores React Applikation ind på DockerHub, vi plejer at gøre det gennem GitHub actions, så hver gang vi pusher til GitHub, så bygger den vores frontend og pusher den til DockerHub, der bruger vi .github/workflows/workflow.yml. Det kræver at vi har en Dockerfile i projektet som vi bruger til at bygge vores frontend.

Derefter skal vi ind på vores Virtuelle Maskine som kører via DigitalOcean, inde på vores VM skal vi have en `docker-compose.yml` fil, som vi bruger til at opsætte vor docker container, så den kan køre vores frontend.

Og til sidst skal vi køre `docker-compose up` for at starte docker containeren.

## Question 4

### JS

1. Explain the concept of promises in JavaScript. How do they differ from callbacks?

Promises er objekter som repræsenterer en pending/fulfilled/rejected fra en asynkron operation, eftersom vi ikke ved hvordan en asynkron operation er færdig, kan vi ikke bare returnere en værdi, så vi bruger promises til at håndtere det.

Promises kan chaines sammen, for eksempel vi kan bruge .then() og .catch() til at håndtere success og fejl. Det gør asynkron kode mere læseligt og vedligeholdbart.

Det er nemmere at lave error handling med promises, fordi vi kan bruge .catch() til at håndtere fejl, i stedet for at skulle bruge try/catch.

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

Komponent er designet til at være en wrapper omkring andre komponenter, og den tager imod children som props som repræsenterer det komponenttræ som den wrapper.

useEffect står for at sætte og ryde op den globale error listener, og når en error så sker, så kalder den handleError som sætter hasError til true, og så vil komponenten blive re-rendered, og så vil den returnere `<h1>Something went wrong.</h1>`.

### Security/Routing/Styling

3. Describe some important design principles when developing a website that should be working well on mobile, tablet, as well as desktop browsers.

- Responsive Design: Man skal design hjemmesider til at kunne håndtere flere forskellige skærmstørrelser, så grids og layouts skal være fleksible, så de kan tilpasse sig skærmstørrelsen.
- Mobile-First Approach: Det er en god ide at designe hjemmesider til mobil først, og så tilpasse den til større skærme, fordi det er nemmere at tilpasse den til større skærme end omvendt.
- Flexible Images: Det er vigtigt at billeder er fleksible, så de kan tilpasse sig skærmstørrelsen, så de ikke bliver for store eller små.
- Touch Friendly: Det er vigtigt at hjemmesiden er touch friendly, fordi mange brugere bruger touch skærme, så det er vigtigt at hjemmesiden er nem at bruge på touch skærme.
- Performance: Det er vigtigt at hjemmesiden er hurtig, fordi brugere forventer at hjemmesider er hurtige, og hvis den er langsom, så vil brugeren forlade hjemmesiden.
- Cross-Browser Testing: Det er vigtigt at teste hjemmesiden på forskellige browsere, fordi der kan være forskellige problemer på forskellige browsere.
- Consistent User Experience: Det er vigtigt at hjemmesiden har en konsistent brugeroplevelse på tværs af forskellige skærmstørrelser, så brugeren ikke bliver forvirret.

## Question 5

### JS

1. What is the difference between synchronous and asynchronous programming and how does async and await fit into this?

Synkron programmering er når en operation kører kodesekvens i rækkefølge, dvs. den blokerer den efterfølgende kode, indtil den er færdig. Asynkron programming er derimod hvor flere operationer kan køre parallelt, hvor en promise/callback håndterer resultatet af operationen.

Eftersom nogen operationer er designet til at være asynkrone, så kan vi ikke bare kalde dem og forvente at de returnerer en værdi, så vi bruger async og await til at håndtere det når vi vil bruge det synkront, hvor async betyder at funktionen er en asynkron metode og await bruges til pause eksekveringen af en asynkron metode indtil den er færdig, det gør det mere letlæseligt og giver koden en mere synkron-lignende struktur.

### REACT

2. Describe how conditional rendering is achieved in React.

Conditional rendering er når vi vil vise/skjule noget baseret på en condition, det er ofte brugt med et if-statement, men for at kunne gøre dette i JSX, skal man gøre brug af ternary operatoren.

3. Provide an example of using the ternary operator for conditional rendering.

### Security/Routing/Styling

4. Describe conceptually the typical flow of using JWTs for user authentication in a React application.

Når en bruger logger ind, så generer vores server en JWT.

Vi gemmer vores tokens i localStorage

Vi bruger tokenet fra localStorage til at kunne lave requests til vores API gennem headers.

Vores server verificerer tokenet, og hvis det er valid, så returnerer den dataen som vi har brug for.

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

Eftersom React er lavet til SPA, så betyder det at navigation ikke involverer et fuldt page reload, i stedet for involverer det at komponenter skifter dynamisk, dette er hurtigere end en traditionel MPA fordi man ikke skal hente et helt dokument fra serveren ved hver navigation, dog kan det godt være SPA er langsommere end MPA på første load fordi den skal hente større filer fordi den henter hele siden ned.

React Router lytter på URL'en, og når den så skifter, så vil den finde de rigtige komponenter som skal vises hvis URL'en matcher.

5. Show an example of how navigation can be implemented in React

## Question 7

### JS

1. What is the purpose of the window object in JavaScript?

Window objektet repræsenterer browserens window/tab, som indeholder broswer relaterede funktionaliter, en af dets primære funktioner er at interaktionen mellem JavaScript og browseren.

Window objektet indeholder properties og metoder relateret til browseren, såsom `document` som repræsenterer DOM'en, `location` som har information omkring URL, `console` for logging og meget andet funktionalitet som man kan bruge i JavaScript.

### REACT

2. How are events handled in React compared to vanilla javascript?

En stor forskel på hvordan events er håndteret i React i forhold til JavaScript er, at React bruger syntetiske events, som egentlig bare er en translator, fordi forskellige browsere giver forskellige respons på samme event, derfor har vi React til at give os samme respons selvom vi bruger forskellige browsere.

React gør brug af en declarative approach, hvor et eksempel på det er når vi bruger `onClick` attributten i JSX, så deklarerer vi at vi vil have noget kode til at eksekvere når noget bliver klikket på, så lader vi React om at binde eventet til det rigtige element, så vi fokusere på et high-level logic i stedet for low-level detaljer.

3. Show examples of how to handle form submit events, and how to handle input change events.

### Security/Routing/Styling

4. Describe and show how we log in a user in React with JWT.

Når en bruger logger ind, så generer vores server en JWT.

Vi gemmer vores tokens i localStorage

Vi bruger tokenet fra localStorage til at kunne lave requests til vores API gennem headers.

Vores server verificerer tokenet, og hvis det er valid, så returnerer den dataen som vi har brug for.

### Question 8

### JS

1. Explain the concept of event bubbling in JavaScript.

Event bubbling er når et event sker i et nested element, som f.eks. en knap i en div, så vil eventet blive sendt til div'en, og så videre til dens forælder, og så videre, indtil det når toppen af DOM træet, eller hvis det bliver stoppet af propogation.

### REACT

2. What is the purpose of the key attribute in React lists?

Key attributten bruges til at identificere elementer i en liste, så React kan genbruge dem i stedet for at lave nye, det gør at React kan lave færre DOM operationer, og dermed gøre det hurtigere, hvis man ikke selv specificerer en key så vil React bruge index.

Det er vigtigt at keys er unikke, og at de ikke ændrer sig, fordi man kan støde ind i bugs hvis man bruger `index`, eftersom React nogen gange kan have svært ved at vide hvilket element der er blevet ændret, og derfor kan det ende med at genbruge det forkerte element, derfor er det anbefalet at man bruger et unikt id, som for eksempel et id fra et objekt, man bruger en generator til at oprette unikke id'er, eller lignende.

3. Explain how the map function is used for rendering lists in React.

Vi kender til brugen af map funktionen, det er hvor vi har en liste, og vi vil mappe dem over til noget andet. I React bruger vi map funktionen til at mappe over en liste af data, og så returnere vi et React element for hvert element i listen, og så vil React tage sig af at lave en liste af dem.

### Security/Routing/Styling

4. Describe conceptually what HTTPS is and how we got it working on our deployed websites.

HTTPS (Hypertext Transfer Protocol Secure) er en sikker version af HTTP, eftersom den er Secure, vil det sige at alt kommunikation mellem klienten og serveren er krypteret.

Eftersom HTTPS er en sikker version af HTTP, kræver det et certifikat, som er en måde at verificere at en hjemmeside er sikker. Man kan få et SSL certifikat fra en Certificate Authority (CA), hvor at vi bruger Let's Encrypt. Vi benytter os af Traefik til at håndtere vores HTTPS certifikater, og så bruger vi ACME (Automatic Certificate Management Environment) til at generere vores certifikater.

## Question 9

### JS

1. What is the scope of a variable in JavaScript? Explain the difference between global and local scope.

Forskellen på global og local scope er at global scope er tilgængeligt overalt i programmet, mens local scope kun er tilgængeligt i den funktion/block-scope hvor den er defineret.

### REACT

2. How are controlled components different from uncontrolled components in React forms?

Controlled components er React komponenter som er fuldt kontrolleret af Reacts state, hvor den bruges til at styre og opdatere værdierne i form inputs, dette sikre at React kontroller formens opførsel og sikre at der er en enkelt sandhedskilde for formens data.

Uncontrolled components er når formens data er håndteret ude af Reacts kontrol, hvor de ikke er afhængige af Reacts state til at ændre dets værdier, to normale måder at gøre dette på er ved brug af `useRef()` eller ved at fåndterer form submits direkte.

3. Explain the role of the onChange event in form handling and show examples.

Hvis man gør brug af Controlled Components, så er onChange essentielt, eftersom det er det event som gør at vi kan opdatere state, og dermed opdatere UI.

### Security/Routing/Styling

4. Explain how sub routing / nested routing is working

Sub-routing er en teknik som involverer at man strukturerer applikationens rutehieraki, man får stor glæde af det hvis man har en kompleks applikation med mange routes. I stedet for at have alle routes i en flad struktur kan man lave subroutes på en mere hierarkisk måde, så det bliver en træstruktur.

Hvis man strukturerer sine routes på en ordenligt måde, så kommer man til at gruppere routes som har noget til fælles, og det gør det nemmere at vedligeholde og udvide applikationen.

5. Show an example of using sub routing / nested routing with the <Outlet/> element.

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

useEffect bruges til at håndtere side effekter i React, som for eksempel data fetching, manuel DOM manipulation, osv.

4. Show example of how you handle errors in React.

Der er mange forskellige måder at håndtere fejl på, eftersom der er mange forskellige slags fejl som kan ske på hjemmesider.

- try-catch
- if-else (ternary operator)
- promise.catch()
- Error Boundaries (Vise eksempel fra Spørgsmål 4)

### Security/Routing/Styling

5. Describe conceptually what Same Origin Policy and CORS is, and how we avoid getting CORS errors when fetching data from an API.

Same Origin Policy er en sikkerhedsmekanisme som forhindrer websider i at få adgang til ressourcer fra andre domæner end det domæne som de kommer fra.

CORS (Cross-Origin Resource Sharing) er en mekanisme som tillader eller begrænser resource en side har adgang til, baseret på siden den kommer fra.

SOP og CORS er til to tjener forskellige mål inden for web sikkerhed

SOP's use cases er at forhindre XSS (Cross-Site Scripting) og CSRF (Cross-Site Request Forgery), dette sker ved at den stopper eksekveringen af scripts fra andre domæner, og den stopper requests til andre domæner.

Hvorimod CORS' use cases er mere afslappede end SOP's fordi det tillader at man kan vælge hvilke slags requests er tilladt og fra hvilke domæner, så det gør det fleksibelt og essentielt når man f.eks. skal hente noget data fra en tredjeparts API.

Den måde som vi håndterer CORS fejl på er ved at vi sætter CORS headers på vores server, så den tillader requests fra vores frontend.

## Question 11

### JS

1. What is the difference between synchronous and asynchronous programming and how does async and await fit into this?

Synkron programmering er når en operation kører kodesekvens i rækkefølge, dvs. den blokerer den efterfølgende kode, indtil den er færdig. Asynkron programming er derimod hvor flere operationer kan køre parallelt, hvor en promise/callback håndterer resultatet af operationen.

Eftersom nogen operationer er designet til at være asynkrone, så kan vi ikke bare kalde dem og forvente at de returnerer en værdi, så vi bruger async og await til at håndtere det når vi vil bruge det synkront, hvor async betyder at funktionen er en asynkron metode og await bruges til pause eksekveringen af en asynkron metode indtil den er færdig, det gør det mere letlæseligt og giver koden en mere synkron-lignende struktur.

### REACT

2. What is the purpose of lifting state up in React?

Lifting State up er når to eller flere komponenter deler state, så skal vi flytte state op i deres fælles parent component, så de kan dele state.

Det sikrer at der er en enkelt sandhedskilde for state, og det gør det nemmere at vedligeholde og udvide applikationen.

3. Show how you would lift state up in a React application.

### Security/Routing/Styling

4. Show a few examples of responsive design.

## Question 12

### JS

1. Explain the concept of promises in JavaScript. How do they differ from callbacks?

Promises er objekter som repræsenterer en pending/fulfilled/rejected fra en asynkron operation, eftersom vi ikke ved hvordan en asynkron operation er færdig, kan vi ikke bare returnere en værdi, så vi bruger promises til at håndtere det.

Promises kan chaines sammen, for eksempel vi kan bruge .then() og .catch() til at håndtere success og fejl. Det gør asynkron kode mere læseligt og vedligeholdbart.

Det er nemmere at lave error handling med promises, fordi vi kan bruge .catch() til at håndtere fejl, i stedet for at skulle bruge try/catch.

### REACT

2. Describe how conditional rendering is achieved in React.

Conditional rendering er når vi vil vise/skjule noget baseret på en condition, det er ofte brugt med et if-statement, men for at kunne gøre dette i JSX, skal man gøre brug af ternary operatoren.

3. Provide an example of using the ternary operator for conditional rendering.

### Security/Routing/Styling

4. Describe the purpose of flexbox and grid in css, and show some examples of what can be achieved by applying them.

Flexbox og Grid bruges til at lave responsive layouts, dvs. når en skærm ændre størrelse, så skal element ikke flytte sig over hinanden eller ud over skærmen, sammen med media queries så kan vi lave responsive layouts som tilpasser sig skærmstørrelsen.

Flexbox fokuserer på at lave layouts med en dimension (ex. row eller column), mens Grid fokuserer på at lave layouts med to dimensioner (ex. row & column).

Eksempel: Hvis man vil have nogen bokse, så på en computer må de gerne være flere på række, men på mobil vil det være alt for småt, så derfor skal de være på 1 række ned under hinanden.

## Question 13

### JS

1. What are higher-order functions in JavaScript? Give an example.

Higher-order functions er funktioner som enten tager andre funktioner som argumenter eller returnerer funktioner som deres resultater.

### REACT

2. Describe the purpose of props in React.

Props er en måde at sende data fra en parent component til en child component, dvs. de tillader komponenter til at være dynamiske og genandvendelige.

3. Explain the role of state in a React component.

State er en måde at holde styr på data i en component. Når state ændres, så vil componenten blive re-rendered.

### Security/Routing/Styling

4. Describe and show how we log in a user in React with JWT.

Når en bruger logger ind, så generer vores server en JWT.

Vi gemmer vores tokens i localStorage

Vi bruger tokenet fra localStorage til at kunne lave requests til vores API gennem headers.

Vores server verificerer tokenet, og hvis det er valid, så returnerer den dataen som vi har brug for.

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

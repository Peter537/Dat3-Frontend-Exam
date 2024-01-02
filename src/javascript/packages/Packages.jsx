function Packages() {
  return (
    <div>
      <h1>Packages</h1>
      <h3>package.json</h3>
      <p>
        Denne fil indeholder noget information omkring projektet, og de
        versioner af modules som vi bruger, denne fil er ligesom en pom.xml som
        vi bruger i Java
      </p>
      <h3>package-lock.json</h3>
      <p>
        Denne fil er en slags lås for de versioner som bruges af projektet, så
        hvis man vil installere projektet og køre det hvor denne fil eksisterer,
        så ved Node præcis hvilke versioner af alle modules den skal tage, denne
        fil ændres kun hvis NPM ændre node_modules træet eller package.json.
      </p>
    </div>
  );
}

export default Packages;

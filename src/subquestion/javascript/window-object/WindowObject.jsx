function WindowObject() {
  return (
    <div>
      <h1>Window Object</h1>
      <p>
        The window object represents the brower window that contains the DOM, so
        we can use it to access the DOM.
      </p>
      <p>WindowInnerHeight: {window.innerHeight}</p>
      <p>WindowLocationHref: {window.location.href}</p>
    </div>
  );
}

export default WindowObject;

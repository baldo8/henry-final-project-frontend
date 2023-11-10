/*

  About:
    ...

  @param ...

*/
import "./Landing.scss";
import React, {useEffect, useCallback, useRef, useState} from "react";


function Landing() {
  /* --------------------------------------------------------------------------------*/
  /* States */
  /* --------------------------------------------------------------------------------*/
  const [isLoading, setLoading] = useState(false);
  const [hasFailed, setFailed] = useState(false);
  const [state, setState] = useState(0);

  /* --------------------------------------------------------------------------------*/
  /* Methods*/
  /* --------------------------------------------------------------------------------*/
  function function_name(argument) {
    // body...
  }

  /* --------------------------------------------------------------------------------*/
  /* Initialization */
  /* --------------------------------------------------------------------------------*/
  useEffect(() => {
    document.title = 'title';
  }, []);

  /* --------------------------------------------------------------------------------*/
  /* Fallbacks */
  /* --------------------------------------------------------------------------------*/
  if (isLoading) {
    return (
      <div>
        Cargando...
      </div>
    );
  }

  if (hasFailed) {
    return (
      <div>
        Ha ocurrido un error
      </div>
    );
  }

  /* --------------------------------------------------------------------------------*/
  /* Main */
  /* --------------------------------------------------------------------------------*/
  return (
    <div className="views-Landing">
      <header>
        <div className="logo">
          <img src="/svg/site-logo.svg"></img>
          HealthBooking
        </div>

        <nav>
          <a className="login-button">Login</a>
          <a className="signup-button">Signup</a>
        </nav>
      </header>

      <main>

      </main>

      <footer>

      </footer>

    </div>
  );
}

export default Landing;
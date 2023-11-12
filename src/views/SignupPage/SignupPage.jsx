/*

  About:
    ...

  @param ...

  Comments:
    ...

*/
import "./SignupPage.scss";
import React, {useEffect, useCallback, useRef, useState} from "react";


function SignupPage() {
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
    <div className="wrapper-SignupPage">
      <main>
        <header>
          <img src="/svg/full-logo-white.svg"></img>
        </header>

        <form>
          <header>
            <h1>
              Crear cuenta
            </h1>
          </header>

          <fieldset>
            <div className="field">
              <label>Correo electronico</label>
              <input
                type="text"
                name="name"
                placeholder="Ingresa aqui tu correo electronico"
              />
            </div>
            <div className="field">
              <label>Contraseña</label>
              <input
                type="text"
                name="image"
                placeholder="Ingresa aqui tu contrasena"
              />
            </div>
          </fieldset>

          <footer>
              <input
                class="send"
                value="Continuar"
                type="submit"
              />
          </footer>
        </form>

      </main>
    </div>
  );
}

export default SignupPage;
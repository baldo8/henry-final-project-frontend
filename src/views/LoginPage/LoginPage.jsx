/*

  About:
    ...

  @param ...

  Comments:
    ...

*/
import "./LoginPage.scss";
import React, {useEffect, useCallback, useRef, useState} from "react";


function LoginPage() {
  /* --------------------------------------------------------------------------------*/
  /* States */
  /* --------------------------------------------------------------------------------*/
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
    document.title = 'Inicia sesion';
  }, []);

  /* --------------------------------------------------------------------------------*/
  /* Main */
  /* --------------------------------------------------------------------------------*/
  return (
    <div className="wrapper-LoginPage">
      <main>
        <header>
          <img src="/svg/full-logo-white.svg"></img>
        </header>

        <form>
          <header>
            <h1>
              Iniciar sesion
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

export default LoginPage;
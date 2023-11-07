/*

  About:
    ...

  @param ...

*/
import "./Patients.scss";
import React, {useEffect, useCallback, useRef, useState} from "react";


function Patients() {
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
    <div className="views-Patients">
      <main>
        <article>
        </article>
      </main>
    </div>
  );
}

export default Patients;
/*

  About:
    ...

  @param ...

*/
import "./PatientsDashboard.scss";
import React, {useEffect, useCallback, useRef, useState} from "react";


function PatientsDashboard() {
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
    <div className="wrapper-PatientsDashboard">
      <main>
        <article>
        </article>
      </main>
    </div>
  );
}

export default PatientsDashboard;
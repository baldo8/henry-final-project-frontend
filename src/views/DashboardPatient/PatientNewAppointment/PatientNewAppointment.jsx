/*

  About:
    ...

  @param ...

  Comments:
    ...

*/
import "./PatientNewAppointment.scss";
import React, {useEffect, useCallback, useRef, useState} from "react";


function PatientNewAppointment() {
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
    <div className="wrapper-PatientNewAppointment">
      <aside className="navigation-menu">
        <img className="site-logo" src="/svg/full-logo-black.svg"></img>

        <nav className="navigation-bar">
          <a href="/patient">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M9.15722 21.2705V18.13C9.1572 17.3313 9.79312 16.6822 10.581 16.6768H13.4671C14.2587 16.6768 14.9005 17.3275 14.9005 18.13V18.13V21.2802C14.9003 21.9584 15.4343 22.5127 16.103 22.5286H18.0271C19.9451 22.5286 21.5 20.9523 21.5 19.0078V19.0078V10.0741C21.4898 9.30913 21.1355 8.59079 20.538 8.12351L13.9577 2.74963C12.8049 1.81393 11.1662 1.81393 10.0134 2.74963L3.46203 8.13326C2.86226 8.59865 2.50739 9.31818 2.5 10.0838V19.0078C2.5 20.9523 4.05488 22.5286 5.97291 22.5286H7.89696C8.58236 22.5286 9.13798 21.9653 9.13798 21.2705V21.2705" stroke="#352E5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Home
          </a>

          <a href="/patient/edit_profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><g clip-path="url(#clip0_257_4809)"><path d="M8 7.57715C8 8.63801 8.42143 9.65543 9.17157 10.4056C9.92172 11.1557 10.9391 11.5771 12 11.5771C13.0609 11.5771 14.0783 11.1557 14.8284 10.4056C15.5786 9.65543 16 8.63801 16 7.57715C16 6.51628 15.5786 5.49887 14.8284 4.74872C14.0783 3.99858 13.0609 3.57715 12 3.57715C10.9391 3.57715 9.92172 3.99858 9.17157 4.74872C8.42143 5.49887 8 6.51628 8 7.57715Z" stroke="#A5A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 21.5771V19.5771C6 18.5163 6.42143 17.4989 7.17157 16.7487C7.92172 15.9986 8.93913 15.5771 10 15.5771H14C15.0609 15.5771 16.0783 15.9986 16.8284 16.7487C17.5786 17.4989 18 18.5163 18 19.5771V21.5771" stroke="#A5A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_257_4809"><rect width="24" height="24" fill="white" transform="translate(0 0.577148)"/></clipPath></defs></svg>
            Editar perfil
          </a>

          <a href="/patient/new_appointment">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none"><g clip-path="url(#clip0_257_4803)"><path d="M8.25 11.5771H13.75" stroke="#A5A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 8.82715V14.3271" stroke="#A5A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.75 5.16048C2.75 4.67425 2.94315 4.20794 3.28697 3.86412C3.63079 3.5203 4.0971 3.32715 4.58333 3.32715H17.4167C17.9029 3.32715 18.3692 3.5203 18.713 3.86412C19.0568 4.20794 19.25 4.67425 19.25 5.16048V17.9938C19.25 18.48 19.0568 18.9464 18.713 19.2902C18.3692 19.634 17.9029 19.8271 17.4167 19.8271H4.58333C4.0971 19.8271 3.63079 19.634 3.28697 19.2902C2.94315 18.9464 2.75 18.48 2.75 17.9938V5.16048Z" stroke="#A5A2B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_257_4803"><rect width="22" height="22" fill="white" transform="translate(0 0.577148)"/></clipPath></defs></svg>
            Agendar Cita
          </a>
        </nav>
      </aside>

      <aside className="user-menu">
      </aside>

      <main>
        <header>
          Dashboard &#62; Agendar Cita
        </header>

        <form onSubmit={()=>{/* validar y procesar la info */}}>
          <header>
            Agendar cita
          </header>

          <fieldset className="select-doctor">
            <label>Seleccione el doctor de su preferencia:</label>
            <article>

              <header>
                {/* barra de Tabs del mosaico, cada button cambia el actual tab */}
                <ul className="tabs-group">
                  <li className="tab">Pediatria</li>
                  <li className="tab">Pediatria</li>
                  <li className="tab">Pediatria</li>
                  <li className="tab">Pediatria</li>
                  <li className="tab">Pediatria</li>
                  <li className="tab">Pediatria</li>
                </ul>

                {/* barra de filtros del mosaico, creo deberia filtrar solo los elementos del actual tab, ustedes deciden */}
                <div className="filters-group">
                  {/* opciones de ordenado ascendientemente y descendientemente por nombre*/}
                  <div className="options">
                    {/* boton de reset */}
                    <div onClick={(e)=>{e.preventDefault(); /* reset orders */}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><g clip-path="url(#clip0_127_89)"><path d="M2.25 6.75L5.25 3.75M5.25 3.75L8.25 6.75M5.25 3.75V10.5758M5.25 13.1471V13.7419V14.264" stroke="#686868" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.75 11.25L12.75 14.25M12.75 14.25L9.75 11.25M12.75 14.25V8.12343M12.75 5.55213V4" stroke="#686868" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 4L2 14" stroke="#686868" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_127_89"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>
                    </div>

                    {/* select del order */}
                    <form>
                      <label for="order">
                        Order:
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><g clip-path="url(#clip0_6_4055)"><path d="M2.25 6.75L5.25 3.75M5.25 3.75L8.25 6.75M5.25 3.75V14.25" stroke="#686868" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.75 11.25L12.75 14.25M12.75 14.25L9.75 11.25M12.75 14.25V3.75" stroke="#686868" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_6_4055"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>
                      </label>

                      <select id="order" onChange={(event)=>{e.preventDefault(); /* apply orders */}}>
                        <option value="unordered"></option>
                        <optgroup label="Por Nombre">
                          <option value='descendent'>Descendiente</option>
                          <option value='ascendent'>Ascendiente</option>
                        </optgroup>
                      </select>
                    </form>
                  </div>

                  {/* barra de busqueda, creo que deberia buscar dentro del tab en el que estamos, ustedes deciden */}
                  <form className="search-bar" onSubmit={(e)=>{e.preventDefault(); /* manejar la busqueda */}}>
                    <input type="text" name="name" placeholder="Buscar"></input>
                    <div type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_5_3866)"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.958 7.40981C17.2466 9.8063 17.1591 13.6043 14.7626 15.8928C12.3661 18.1814 8.56816 18.0939 6.2796 15.6974C3.99103 13.301 4.07852 9.50298 6.475 7.21441C8.87148 4.92585 12.6695 5.01333 14.958 7.40981ZM16.8244 16.6039C19.3385 13.5225 19.222 8.97893 16.4044 6.02854C13.353 2.83323 8.28904 2.71659 5.09373 5.76801C1.89842 8.81943 1.78177 13.8834 4.83319 17.0787C7.65072 20.0291 12.1841 20.3547 15.378 17.9851L17.4926 20.1995C17.874 20.5989 18.507 20.6135 18.9064 20.2321C19.3059 19.8506 19.3204 19.2176 18.939 18.8182L16.8244 16.6039Z" fill="#B2B2B2"/></g><defs><clipPath id="clip0_5_3866"><rect width="24" height="24" fill="white"/></clipPath></defs></svg></div>
                  </form>

                  {/* opciones de filtrado, filtra ascendientemente y descendientemente por nombre*/}
                  <div className="options">
                    <div onClick={(e)=>{e.preventDefault(); /* abrir modald e filtrado */}}>
                      Filter:
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><g clip-path="url(#clip0_6_4065)"><path d="M3 3H15V4.629C14.9999 5.02679 14.8418 5.40826 14.5605 5.6895L11.25 9V14.25L6.75 15.75V9.375L3.39 5.679C3.13909 5.40294 3.00004 5.0433 3 4.67025V3Z" stroke="#686868" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_6_4065"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>
                    </div>
                    <div onClick={()=>{/* reset filters */}} >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><g clip-path="url(#clip0_127_85)"><path d="M5.5 3H15V4.629C14.9999 5.02679 14.8418 5.40826 14.5605 5.6895L11.625 8.625M11.25 11.25V14.25L6.75 15.75V9.375L3.39 5.679C3.13909 5.40294 3.00004 5.0433 3 4.67025V3" stroke="#686868" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 1.5L15.75 15.75" stroke="#686868" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_127_85"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>
                    </div>
                  </div>
                </div>
              </header>

              {/*
                <section className="cards-grid">
                  {currentPageData.map((item, index) => (
                    <article className="tile">
                      <section className="card-picture">
                        <img src={link-to-image}></img>
                      </section>
                      
                      <section className="card-description">
                        <h1>{item.name}</h1>
                        <p className="specialization">{item.specialization}</p>
                        <p className="licence">{item.licence}</p>
                      </section>
                    </article>
                  ))}
                </section>
              */}
              {/* Mosaico de cards al hacer click en uno deberia abrirse el modal con los details*/}
              <section className="cards-grid">
                <article className="tile" onClick={()=>{/* abrir modal*/}}>
                  <section className="card-picture">
                    <img src="/img/sana.jpeg"></img>
                  </section>

                  <section className="card-description">
                    <h1>Minatozaki Sana</h1>
                    <p className="specialization">Pediatria</p>
                    <p className="licence">*licencia*</p>
                  </section>
                </article>
              </section>

              <footer>
                <nav aria-label="Navegación por páginas">
                  <ul className="pagination">
                    {/* Botón prev */}
                    <li className="page-item">
                      <a href="#" className="prev" onClick={()=>{/*handlePrevClick()*/}}>
                        prev
                      </a>
                    </li>

                    {/* Números de página */}
                    <li key="1" className="page-item" >
                      <a href="#" onClick={() => {/*handleNumberClick(1)*/}}>
                        1
                      </a>
                    </li>
                    <li key="1" className="page-item" >
                      <a href="#" onClick={() => {/*handleNumberClick(2)*/}}>
                        2
                      </a>
                    </li>
                    <li key="1" className="page-item" >
                      <a href="#" onClick={() => {/*handleNumberClick(3)*/}}>
                        3
                      </a>
                    </li>
                    <li key="1" className="page-item" >
                      <a href="#" onClick={() => {/*handleNumberClick(4)*/}}>
                        4
                      </a>
                    </li>

                    {/* Botón next */}
                    <li className="prev">
                      <a href="#" className="next" onClick={()=>{/*handleNextClick()*/}}>
                        next
                      </a>
                    </li>
                  </ul>
                </nav>
              </footer>
            </article>
          </fieldset>

          <hr></hr>

          <fieldset className="select-date">
            <label>Seleccione el horario de su preferencia:</label>
            <div>
              {/*
                Aqui se implementa un datepicker como "https://mui.com/x/react-date-pickers/date-picker/" o "https://reactdatepicker.com/" 
                los estilos deben ser los que de la libreria, no se pueden maquetar a mano,
                los estilos de figman quedan descartados, pero no importa normalmente las librerias se ven bien
              */}
            </div>
          </fieldset>

          <footer>
            <input class="send" value="Enviar" type="submit" />
          </footer>
        </form>
      </main>
    </div>
  );
}

export default PatientNewAppointment;
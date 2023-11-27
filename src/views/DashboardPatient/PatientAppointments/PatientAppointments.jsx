/*

  About:
    ...

  @param ...

  Comments:
    ...

*/
import "./PatientAppointments.css";
import React, { useEffect, useCallback, useRef, useState } from "react";

function PatientAppointments() {
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
    document.title = "title";
  }, []);

  /* --------------------------------------------------------------------------------*/
  /* Fallbacks */
  /* --------------------------------------------------------------------------------*/
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (hasFailed) {
    return <div>Ha ocurrido un error</div>;
  }

  /* --------------------------------------------------------------------------------*/
  /* Main */
  /* --------------------------------------------------------------------------------*/
  return (
    <div class="main-container">
      <div class="sub-container">
        <div class="header-section">
          <div class="logo-section">
            <svg
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.98"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.5097 7.07813C15.7253 6.2956 20.1375 7.72353 23.7456 11.362C28.5266 6.92251 33.9644 6.00454 40.0597 8.60808C45.066 12.7561 46.2972 17.8557 43.7535 23.9076C38.8506 31.0255 32.8994 37.1453 25.9003 42.2669C24.6691 42.6751 23.4378 42.6751 22.2066 42.2669C15.1355 37.0731 9.08195 30.8511 4.04564 23.6016C1.4804 16.0791 3.63508 10.5713 10.5097 7.07813Z"
                fill="#42B8C3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.5984 16.6603C30.5984 16.6603 31.1371 17.2009 31.5 17.7454C32.25 18.8704 33.75 21.1204 33.75 21.1204C33.75 21.1204 38.625 21.1204 41.6797 20.9441C41.6797 21.7599 41.625 21.8046 41.625 22.6204C38.625 22.4741 36 22.6204 33 22.6204C32.6485 21.8829 32.0238 20.7256 31.5547 20.0353C31.6112 20.1054 31.4725 19.7912 31.2141 20.6381C30.4892 23.0142 29.715 25.3743 28.7516 27.6759C27.9309 26.4519 27.1253 25.3842 26.3047 24.1603C25.095 27.3156 24.2581 30.4237 23.8266 33.7957C23.1032 33.9297 22.4876 33.7259 21.9797 33.1837C21.055 29.1043 19.4266 25.2237 17.9266 21.5518C17.1766 23.6573 16.7406 25.2844 16.125 27.1204C13.838 27.0732 11.2913 27.0639 9 27.0639C9 26.2482 9.05157 26.0438 9.05157 25.228C11.25 25.2996 12.9186 25.2525 15 25.228C15.4297 23.4103 16.6156 21.1594 17.25 18.1204C17.625 18.4954 17.9983 18.6175 18.375 19.2454C20.625 22.9954 22.9031 29.5118 22.9031 29.5118C22.9031 29.5118 24.8047 23.7853 25.125 21.1746C26.2891 21.9103 28.4438 24.616 28.4438 24.616L30.5984 16.6603Z"
                fill="#E4F8F3"
              />
            </svg>
            <h2 class="logo-text">HealthBooking</h2>
          </div>
          <div class="info-section">
            <div class="info-row">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.370361"
                  width="24"
                  height="24"
                  rx="5"
                  fill="#42B8C3"
                />
                <circle cx="19" cy="14.3704" r="2" fill="#33363F" />
                <circle cx="9" cy="13.3704" r="2" fill="#33363F" />
                <path
                  d="M19 14.3704V16.3704C19 19.1318 16.7614 21.3704 14 21.3704H12C9.5 21.3704 9 19.7704 9 13.3704"
                  stroke="#33363F"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M9 12.3704C12.9588 12.3704 13.9791 9.43186 13.9997 6.46309C14.0001 6.40627 13.9679 6.35431 13.9171 6.3289L12 5.37036"
                  stroke="#33363F"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M9 12.3704C5.04121 12.3704 4.02093 9.43186 4.00032 6.46309C3.99993 6.40627 4.0321 6.35431 4.08292 6.3289L6 5.37036"
                  stroke="#33363F"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <label class="info-label">Especialidad</label>
              <div class="info-value">Otorrinolaringología</div>
            </div>
            <div class="info-row">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.370361"
                  width="24"
                  height="24"
                  rx="5"
                  fill="#42B8C3"
                />
                <path
                  d="M19.6515 19.7757C20.2043 19.6605 20.5336 19.0821 20.2589 18.5887C19.6533 17.501 18.6993 16.5453 17.4788 15.8169C15.907 14.8788 13.9812 14.3704 12 14.3704C10.0188 14.3704 8.09292 14.8788 6.52112 15.8169C5.30069 16.5453 4.34666 17.501 3.74108 18.5887C3.46638 19.0821 3.79562 19.6605 4.34843 19.7757V19.7757C9.39524 20.8275 14.6047 20.8275 19.6515 19.7757V19.7757Z"
                  fill="#222222"
                />
                <circle cx="12" cy="8.37036" r="5" fill="#222222" />
              </svg>
              <label class="info-label">Medico</label>
              <div class="info-value">Samuel</div>
            </div>
            <div class="info-row">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.370361"
                  width="24"
                  height="24"
                  rx="5"
                  fill="#42B8C3"
                />
                <rect
                  x="3"
                  y="6.37036"
                  width="18"
                  height="12"
                  rx="2"
                  stroke="#33363F"
                  stroke-width="2"
                />
                <path
                  d="M6 9.37036H8"
                  stroke="#33363F"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M16 15.3704H18"
                  stroke="#33363F"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <circle
                  cx="12"
                  cy="12.3704"
                  r="2"
                  stroke="#33363F"
                  stroke-width="2"
                />
              </svg>
              <label class="info-label">Valor</label>
              <div class="info-value">180</div>
            </div>
            <div class="info-row">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.370361"
                  width="24"
                  height="24"
                  rx="5"
                  fill="#42B8C3"
                />
                <circle
                  cx="17"
                  cy="16.3704"
                  r="2.5"
                  stroke="#222222"
                  stroke-width="2"
                />
                <path
                  d="M19 18.3704L21 20.3704"
                  stroke="#222222"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 10.5704C2 8.05013 2 6.79001 2.49047 5.8274C2.9219 4.98067 3.61031 4.29226 4.45704 3.86083C5.41965 3.37036 6.67976 3.37036 9.2 3.37036H14.8C17.3202 3.37036 18.5804 3.37036 19.543 3.86083C20.3897 4.29226 21.0781 4.98067 21.5095 5.8274C22 6.79001 22 8.05013 22 10.5704V14.0759C21.1304 12.184 19.2186 10.8704 17 10.8704C13.9624 10.8704 11.5 13.3328 11.5 16.3704C11.5 18.589 12.8136 20.5008 14.7055 21.3704H5.2C4.0799 21.3704 3.51984 21.3704 3.09202 21.1524C2.71569 20.9606 2.40973 20.6547 2.21799 20.2783C2 19.8505 2 19.2905 2 18.1704V10.5704ZM6 10.3704C6 9.81808 6.44772 9.37036 7 9.37036H13C13.5523 9.37036 14 9.81808 14 10.3704C14 10.9226 13.5523 11.3704 13 11.3704H7C6.44772 11.3704 6 10.9226 6 10.3704ZM6 14.3704C6 13.8181 6.44772 13.3704 7 13.3704H10C10.5523 13.3704 11 13.8181 11 14.3704C11 14.9226 10.5523 15.3704 10 15.3704H7C6.44772 15.3704 6 14.9226 6 14.3704Z"
                  fill="#222222"
                />
              </svg>
              <label class="info-label">Estado</label>
              <div class="info-value">Pendiente</div>
            </div>
            <div class="info-row">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.370361"
                  width="24"
                  height="24"
                  rx="5"
                  fill="#42B8C3"
                />
                <rect
                  x="3"
                  y="6.37036"
                  width="18"
                  height="15"
                  rx="2"
                  stroke="#33363F"
                  stroke-width="2"
                />
                <path
                  d="M3 10.3704C3 8.48474 3 7.54193 3.58579 6.95615C4.17157 6.37036 5.11438 6.37036 7 6.37036H17C18.8856 6.37036 19.8284 6.37036 20.4142 6.95615C21 7.54193 21 8.48474 21 10.3704V10.3704H3V10.3704Z"
                  fill="#33363F"
                />
                <path
                  d="M7 3.37036L7 6.37036"
                  stroke="#33363F"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M17 3.37036L17 6.37036"
                  stroke="#33363F"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <rect
                  x="7"
                  y="12.3704"
                  width="4"
                  height="2"
                  rx="0.5"
                  fill="#33363F"
                />
                <rect
                  x="7"
                  y="16.3704"
                  width="4"
                  height="2"
                  rx="0.5"
                  fill="#33363F"
                />
                <rect
                  x="13"
                  y="12.3704"
                  width="4"
                  height="2"
                  rx="0.5"
                  fill="#33363F"
                />
                <rect
                  x="13"
                  y="16.3704"
                  width="4"
                  height="2"
                  rx="0.5"
                  fill="#33363F"
                />
              </svg>
              <label class="info-label">Fecha</label>
              <div class="info-value">5/20/2023</div>
            </div>
            <div class="info-row">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.370361"
                  width="24"
                  height="24"
                  rx="5"
                  fill="#42B8C3"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.58579 4.95615C5 5.54193 5 6.48474 5 8.37036V17.3704C5 19.256 5 20.1988 5.58579 20.7846C6.17157 21.3704 7.11438 21.3704 9 21.3704H15C16.8856 21.3704 17.8284 21.3704 18.4142 20.7846C19 20.1988 19 19.256 19 17.3704V8.37036C19 6.48474 19 5.54193 18.4142 4.95615C17.8284 4.37036 16.8856 4.37036 15 4.37036H9C7.11438 4.37036 6.17157 4.37036 5.58579 4.95615ZM9 8.37036C8.44772 8.37036 8 8.81808 8 9.37036C8 9.92265 8.44772 10.3704 9 10.3704H15C15.5523 10.3704 16 9.92265 16 9.37036C16 8.81808 15.5523 8.37036 15 8.37036H9ZM9 12.3704C8.44772 12.3704 8 12.8181 8 13.3704C8 13.9226 8.44772 14.3704 9 14.3704H15C15.5523 14.3704 16 13.9226 16 13.3704C16 12.8181 15.5523 12.3704 15 12.3704H9ZM9 16.3704C8.44772 16.3704 8 16.8181 8 17.3704C8 17.9226 8.44772 18.3704 9 18.3704H13C13.5523 18.3704 14 17.9226 14 17.3704C14 16.8181 13.5523 16.3704 13 16.3704H9Z"
                  fill="#222222"
                />
              </svg>
              <label class="info-label">IdDeCita</label>
              <a class="info-value">IdDeCita</a>
            </div>
          </div>
        </div>
        <div class="button-section">
          <button class="back-button">
            <p class="button-text"> Regresa </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PatientAppointments;
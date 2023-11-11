/*

  About:
    Renders the landing page of the web app.

*/

import "./LandingPage.scss";
import React, {useEffect, useCallback, useRef, useState} from "react";


function LandingPage() {
  /* --------------------------------------------------------------------------------*/
  /* Initialization */
  /* --------------------------------------------------------------------------------*/
  useEffect(() => {
    document.title = 'HealthBooking'; // tab title
  }, []);

  /* --------------------------------------------------------------------------------*/
  /* Main */
  /* --------------------------------------------------------------------------------*/
  return (
    <div className="wrapper-LandingPage">
      <header>
        <div className="logo">
          <img src="/svg/site-full-logo.svg"></img>
        </div>

        <nav className="actions">
          <a href="/login" className="login-button">ingresar</a>
          <a href="/signup" className="signup-button">
            UNETE<img src="/svg/white-arrow-right.svg"></img>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-description">
            <div class="description">
              <span className="slogan">Conecta con tu salud</span>

              <span className="title">
                <strong>HealthBooking</strong> es la web que te facilita la salud
              </span>

              <span className="comment">Regístrate ya y conecta con tu salud</span>
            </div>

            <div className="actions">
              <a href="/login" className="login-button">ingresar</a>
              <a href="/signup" className="signup-button">UNETE<img src="/svg/white-arrow-right.svg"></img></a>
            </div>
          </div>

          <img src="/img/hero-cover.png"></img>
        </section>

      </main>

      <footer>

      </footer>

    </div>
  );
}

export default LandingPage;
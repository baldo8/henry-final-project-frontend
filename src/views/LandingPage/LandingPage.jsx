/*

  About:
    Renders the landing page of the web app.

*/

import "./LandingPage.scss";
import React, {useEffect, useCallback, useRef, useState} from "react";
import { useAuth0 } from "@auth0/auth0-react"

function LandingPage() {
  /* --------------------------------------------------------------------------------*/
  /* States */
  /* --------------------------------------------------------------------------------*/
  const {loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  /* --------------------------------------------------------------------------------*/
  /* Initialization */
  /* --------------------------------------------------------------------------------*/
  useEffect(() => {
    document.title = 'HealthBooking'; // tab title

    console.log(
      isAuthenticated ? (
        console.log(user)
      ): (
        console.log("no user")
      )
    );
  }, []);

  /* --------------------------------------------------------------------------------*/
  /* Main */
  /* --------------------------------------------------------------------------------*/
  return (
    <div className="wrapper-LandingPage">
      <header>
        <div className="logo">
          <img src="/svg/full-logo-white.svg"></img>
        </div>
        <nav className="actions">

        {isAuthenticated ?
          <a onClick={() => logout({ returnTo: window.location.origin })}>
            Cerrar sesión
          </a>
          
          :
          <a onClick={() => loginWithRedirect()}>Iniciar sesión</a>
        }
          <a href="/signup">
            UNETE<img src="/svg/util/white-arrow-right.svg"></img>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-desc">
            <div className="description">
              <span className="slogan">Conecta con tu salud</span>
              <span className="title">
                HealthBooking es la web que te facilita la salud
              </span>
              <span className="comment">Regístrate ya y conecta con tu salud</span>
            </div>

            <div className="actions">
              <a href="/patient" className="login">ingresar</a>
              <a href="/patient" className="signup">UNETE</a>

              {/*<a href="/login" className="login">ingresar</a>*/}
              {/*<a href="/signup" className="signup">UNETE</a>*/}
            </div>
          </div>
          <img className="hero-logo" src="/img/hero-cover.png"></img>
        </section>
      </main>

      <footer>
        <div className="menu">
          <div className="banner">
            <img src="/svg/full-logo-black.svg"></img>
            <span><strong>HealthBooking</strong> es un proyecto desarrollado por estudiantes del bootcamp Henry, una academia online que forma desarrolladores web full stack. </span>
          </div>

          <div className="links-group about">
            <h1>Sobre este proyecto</h1>
            <nav>
              <a href="#"><img src="/svg/util/link-clip.svg"></img>Codigo fuente (frontend)</a>
              <a href="#"><img src="/svg/util/link-clip.svg"></img>Codigo fuente (backend)</a>
              <a href="#"><img src="/svg/util/link-clip.svg"></img>Henry Bootcamp</a>
            </nav>             
          </div>

          <div className="links-group contact">
            <h1>Integrantes</h1>
            <nav>
              <a href="https://www.linkedin.com/in/rtlsalazar"><img src="/svg/brands/linkedin.svg"></img>Moises Salazar<img src="/svg/util/link-clip.svg"></img></a>
              <a href="#"><img src="/svg/brands/linkedin.svg"></img>Nombre Apellido<img src="/svg/util/link-clip.svg"></img></a>
              <a href="#"><img src="/svg/brands/linkedin.svg"></img>Nombre Apellido<img src="/svg/util/link-clip.svg"></img></a>
              <a href="#"><img src="/svg/brands/linkedin.svg"></img>Nombre Apellido<img src="/svg/util/link-clip.svg"></img></a>
              <a href="#"><img src="/svg/brands/linkedin.svg"></img>Nombre Apellido<img src="/svg/util/link-clip.svg"></img></a>
              <a href="#"><img src="/svg/brands/linkedin.svg"></img>Nombre Apellido<img src="/svg/util/link-clip.svg"></img></a>
              <a href="#"><img src="/svg/brands/linkedin.svg"></img>Nombre Apellido<img src="/svg/util/link-clip.svg"></img></a>
              <a href="#"><img src="/svg/brands/linkedin.svg"></img>Nombre Apellido<img src="/svg/util/link-clip.svg"></img></a>
            </nav>              
          </div>
        </div>

        <div className="copyright">
          ©2023 <strong>HealthBooking.</strong> Henry Bootcamp
        </div>
      </footer>

    </div>
  );
}

export default LandingPage;
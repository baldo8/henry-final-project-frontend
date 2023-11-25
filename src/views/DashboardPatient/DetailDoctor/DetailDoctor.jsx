import "./DetailDoctor.css"
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios"
//import Data from "./doctorDetail.json"

const DetailDoctor = () => {

  const { id } = useParams();
  const [doctor, setDoctors] = useState([]);  
  
  //let filt = Data.doctors.filter((doc)=>doc.license === id)

  //console.log(filt[0].name);

  useEffect(() => {
    if (doctor.length === 0) {
      axios.get(`http://localhost:3001/doctors/${id}`)
      .then(({data}) => {
        if (data) setDoctors(data);
        //console.log(data);
      }) 
      return setDoctors({});
    }
  },[id]);

  let sure = doctor?.Sures?.map((sur)=> sur.name);
  let specialty = doctor.Specialty;

  return (
    <div class="container">
    <div class="inner-container">
      <div class="profile-section">
        <div class="name-section">
          <div class="name">Minatozaki Sana</div>
        </div>
        <img class="profile-image" src="https://via.placeholder.com/141x127" />
        <div class="details-section">
          <div class="detail-row">
            <div class="detail-label">Especialidad</div>
            <div class="detail-value">Pediatria</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Sure</div>
            <div class="detail-value">Pediatria</div>
          </div>
          <div class="license-section">
            <div class="license-label">Licencia</div>
            <div class="data-value">Datos</div>
          </div>
          <div class="phone-section">
            <div class="phone-label">Telefono</div>
            <div class="data-value">Datos</div>
          </div>
          <div class="email-section">
            <div class="email-label">Email</div>
            <div class="data-value">Datos</div>
          </div>
        </div>
      </div>
      <div class="button-section">
        <div class="back-button">
          <div class="button-text">Regresa</div>
        </div>
        <div class="select-button">
          <div class="button-text">Seleccionar</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DetailDoctor;
/*  <div className="div-user-information">
      <img className="mask-group" alt="Mask group" src={doctor?.profilePicture} />
      <div className="frame">
        <h1 className="text-wrapper">{doctor?.name}</h1>
      </div>
      <div className="datos">
        <div className="group">
          <label className="div">Informacion</label>
        </div>
        <div className="frame-2">
          <label className="text-wrapper-2">Especialidad</label>
          <label className="text-wrapper-3">{specialty?.name}</label>
        </div>
        <hr />
        <div className="group-2">
          <label className="text-wrapper-4">Licencia</label>
          <p className="text-wrapper-5">{doctor?.id}</p>
        </div>
        <hr />
        <div className="group-2">
          <label className="text-wrapper-6">Telefono</label>
          <label className="text-wrapper-5">{doctor?.phone}</label>
        </div>
        <hr />
        <div className="group-2">
          <div className="text-wrapper-7">email</div>
          <label className="text-wrapper-5">{doctor?.email}</label>
        </div>
        <hr />
        <div className="group-2">
          <div className="text-wrapper-7">Sure</div>
          <label className="text-wrapper-5">{sure?.join(', ')}</label>
        </div>
      </div>

      <div className="Footer" style={{position: "relative", top: 46, borderRadius: 20, width: 430, height: 60, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, background: '#f8f7ffbb', borderTop: '1px #E6E6E6 solid', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
        <div className="Frame53" style={{paddingLeft: 16, paddingRight: 16, paddingTop: 2, paddingBottom: 2, background: 'white', borderRadius: 4, overflow: 'hidden', border: '1px #E6E6E6 solid', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
          <NavLink to={"/patient/new_appointment"}>
            <button className="Cancel" style={{width: 88, height: 29, textAlign: 'center', color: 'black', fontSize: 13, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word'}}>Cancelar</button>
          </NavLink>
        </div>
        <div className="Frame52" style={{paddingLeft: 16, paddingRight: 16, paddingTop: 2, paddingBottom: 2, background: '#42A7C3', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)', borderRadius: 4, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
        <button className="Seleccionar" style={{width: 88, height: 29, textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word'}}>Seleccionar</button>
        </div>
     </div>

    </div> */




    /*  <div style={{width: '100%', height: '100%', paddingTop: 275, paddingBottom: 274.26, paddingLeft: 497, paddingRight: 497, background: '#DAEFEC', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', background: 'white', borderRadius: 8, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5, display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', height: 391.74, paddingLeft: 48, paddingRight: 48, paddingTop: 24, paddingBottom: 24, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{width: 333, height: 16, paddingLeft: 64, paddingRight: 64, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                <div style={{color: '#352E5B', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '700', wordWrap: 'break-word'}}>Minatozaki Sana</div>
            </div>
            <img style={{width: 141, height: 127, borderRadius: 43.63}} src="https://via.placeholder.com/141x127" />
            <div style={{width: 350, height: 171, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
                <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{color: '#C0BBE0', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '500', wordWrap: 'break-word'}}>Especialidad</div>
                    <div style={{color: 'rgba(52.87, 46.45, 91.37, 0.80)', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '500', letterSpacing: 0.32, wordWrap: 'break-word'}}>Pediatria</div>
                </div>
                <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{color: '#C0BBE0', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '500', wordWrap: 'break-word'}}>Sure</div>
                    <div style={{color: 'rgba(52.87, 46.45, 91.37, 0.80)', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '500', letterSpacing: 0.32, wordWrap: 'break-word'}}>Pediatria</div>
                </div>
                <div style={{height: 21, position: 'relative'}}>
                    <div style={{width: 83.23, left: 0, top: 0, position: 'absolute', color: '#C0BBE0', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '500', wordWrap: 'break-word'}}>Licencia</div>
                    <div style={{width: 59.61, left: 290.39, top: 0, position: 'absolute', color: 'rgba(52.87, 46.45, 91.37, 0.80)', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '500', letterSpacing: 0.64, wordWrap: 'break-word'}}>Datos</div>
                </div>
                <div style={{height: 21, position: 'relative'}}>
                    <div style={{width: 129.10, left: 0, top: 0, position: 'absolute', color: '#C0BBE0', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '500', wordWrap: 'break-word'}}>Telefono</div>
                    <div style={{width: 59.61, left: 290.39, top: 0, position: 'absolute', color: 'rgba(52.87, 46.45, 91.37, 0.80)', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '500', letterSpacing: 0.64, wordWrap: 'break-word'}}>Datos</div>
                </div>
                <div style={{width: 350, height: 21, position: 'relative'}}>
                    <div style={{width: 204.17, left: 0, top: 0, position: 'absolute', color: '#C0BBE0', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '500', wordWrap: 'break-word'}}>Email</div>
                    <div style={{width: 59.61, left: 290.39, top: 0, position: 'absolute', color: 'rgba(52.87, 46.45, 91.37, 0.80)', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '500', letterSpacing: 0.64, wordWrap: 'break-word'}}>Datos</div>
                </div>
            </div>
        </div>
        <div style={{width: 434, height: 78, paddingLeft: 24, paddingRight: 24, background: 'white', borderRadius: 10, overflow: 'hidden', borderTop: '1px #E6E6E6 solid', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{height: 49, paddingLeft: 32, paddingRight: 32, paddingTop: 18, paddingBottom: 18, background: '#42B8C3', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                <div style={{width: 82, height: 13, color: 'white', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word'}}>Regresa</div>
            </div>
            <div style={{width: 146, height: 47, paddingTop: 18, paddingBottom: 18, paddingLeft: 32, paddingRight: 14, background: '#42B8C3', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                <div style={{color: 'white', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word'}}>Selecionar</div>
            </div>
        </div>
    </div>
</div> */
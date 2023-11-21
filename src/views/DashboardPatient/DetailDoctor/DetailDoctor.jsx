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
      <div className="div-user-information">
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

    </div>
  )
}

export default DetailDoctor;
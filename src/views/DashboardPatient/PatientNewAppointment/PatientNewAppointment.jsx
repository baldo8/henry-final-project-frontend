/*

  About:
    ...

  @param ...

  Comments:
    ...

*/
import "./PatientNewAppointment.scss";
import React, {useEffect, useCallback, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import  {StaticDateTimePicker} from '@mui/x-date-pickers';


const especialidades = [
  { id: 1, name: 'Neurología' },
  { id: 2, name: 'Radiología e Imágenes Médicas' },
  { id: 3, name: 'Neumonología' },
  { id: 4, name: 'Endocrinología y Nutrición' },
  { id: 5, name: 'Psiquiatría' },
  { id: 6, name: 'Ginecología y Obstetricia' },
  { id: 7, name: 'Cardiología' },
  {
    id: 8,
    name: 'Cirugía Ortopédica y Traumatología'
  },
  { id: 9, name: 'Oftalmología' },
  { id: 10, name: 'Dermatología' }
]

const doctors = [
  {
    id: '33326',
    name: 'Alejandro Cruz',
    specialty: { id: 2 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189494/doctors/men/jdcch5dshqe6cupwdubx.jpg',
    arraySure: []
  },
  {
    id: '73640',
    name: 'Carlos García',
    specialty: { id: 3 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189494/doctors/men/uiddrwmboauusqh8hdaq.jpg',
    arraySure: [ { id: 2 } ]
  },
  {
    id: '40981',
    name: 'Carlos López',
    specialty: { id: 2 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189495/doctors/men/fiox2awavxyrmgljijgy.jpg',
    arraySure: [ { id: 4 } ]
  },
  {
    id: '82147',
    name: 'Diego Ramos',
    specialty: { id: 9 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189494/doctors/men/qkzjxs7740l6zu5fxnfc.jpg',
    arraySure: [ { id: 2 }, { id: 5 } ]
  },
  {
    id: '45289',
    name: 'Diego Rojas',
    specialty: { id: 4 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189495/doctors/men/zgxq5hnchjd6whytswy4.jpg',
    arraySure: [ { id: 1 }, { id: 2 }, { id: 3 } ]
  },
  {
    id: '6270',
    name: 'Eduardo Ramírez',
    specialty: { id: 10 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189495/doctors/men/bqipe6jtu0pwludsmhep.jpg',
    arraySure: [ { id: 4 } ]
  },
  {
    id: '70219',
    name: 'Gustavo Martínez',
    specialty: { id: 7 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189495/doctors/men/uymntobwmr6vrffegg3h.jpg',
    arraySure: [ { id: 2 }, { id: 4 } ]
  },
  {
    id: '37401',
    name: 'Hernán Reyes',
    specialty: { id: 1 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189494/doctors/men/x48ibmgp9zcugsrelr45.jpg',
    arraySure: [ { id: 1 }, { id: 5 } ]
  },
  {
    id: '73513',
    name: 'Javier Hernández',
    specialty: { id: 8 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189494/doctors/men/juxkpxyyoq4sikugllfc.jpg',
    arraySure: [ { id: 3 } ]
  },
  {
    id: '98501',
    name: 'Jorge Santos',
    specialty: { id: 1 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189495/doctors/men/g7wm3wubscwtmtac1ww1.jpg',
    arraySure: [ { id: 2 }, { id: 4 }, { id: 5 } ]
  },
  {
    id: '20457',
    name: 'Juan Martinez',
    specialty: { id: 7 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189495/doctors/men/tv7jwqgm69wrpyxgeh41.jpg',
    arraySure: [ { id: 2 } ]
  },
  {
    id: '50743',
    name: 'Lucas Silva',
    specialty: { id: 7 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189495/doctors/men/rvtcfmu40e8zyv6ofrsi.jpg',
    arraySure: [ { id: 3 }, { id: 4 } ]
  },
  {
    id: '19864',
    name: 'Luis Torres',
    specialty: { id: 7 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189496/doctors/men/eih5pujfveeajwnym5as.jpg',
    arraySure: []
  },
  {
    id: '15432',
    name: 'Martín Díaz',
    specialty: { id: 7 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189496/doctors/men/qvxzwyjdfzodssjsorcm.jpg',
    arraySure: [ { id: 2 }, { id: 3 } ]
  },
  {
    id: '15472',
    name: 'Miguel Martínez',
    specialty: { id: 1 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189496/doctors/men/f8ftcngt9joz8ighqnub.jpg',
    arraySure: [ { id: 5 } ]
  },
  {
    id: '63926',
    name: 'Pablo Mendoza',
    specialty: { id: 9 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189496/doctors/men/ajnqiwfe0tli6qjtqnxs.jpg',
    arraySure: [ { id: 2 }, { id: 3 }, { id: 4 } ]
  },
  {
    id: '36492',
    name: 'Pedro Gómez',
    specialty: { id: 7 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189496/doctors/men/dvbplc4qtaiauffive4y.jpg',
    arraySure: [ { id: 1 }, { id: 4 } ]
  },
  {
    id: '39825',
    name: 'Ricardo Rojas',
    specialty: { id: 3 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189496/doctors/men/u02jgg0rsj4pgujq0bvl.jpg',
    arraySure: [ { id: 1 }, { id: 3 }, { id: 5 } ]
  },
  {
    id: '39218',
    name: 'Ricardo Torres',
    specialty: { id: 7 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189496/doctors/men/ordjka639kweeo7dbncc.jpg',
    arraySure: [ { id: 5 } ]
  },
  {
    id: '37935',
    name: 'Roberto Torres',
    specialty: { id: 9 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189496/doctors/men/zzxnrzp7tgo9ikwcd1ju.jpg',
    arraySure: [ { id: 1 }, { id: 2 } ]
  },
  {
    id: '85781',
    name: 'Sebastián Díaz',
    specialty: { id: 6 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189496/doctors/men/f9ugyqjbhzz2ybg1g7v5.jpg',
    arraySure: [ { id: 4 }, { id: 5 } ]
  },
  {
    id: '28076',
    name: 'Adriana Navarro',
    specialty: { id: 6 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189767/doctors/women/vkc7qw9313n3oppah4nh.jpg',
    arraySure: [ { id: 1 }, { id: 2 }, { id: 4 } ]
  },
  {
    id: '26783',
    name: 'Ana Gutiérrez',
    specialty: { id: 6 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189767/doctors/women/szi8yr1s2qfzhnp5uvyj.jpg',
    arraySure: [ { id: 2 } ]
  },
  {
    id: '27349',
    name: 'Ana Rodríguez',
    specialty: { id: 10 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189767/doctors/women/f0jvs1orwqu74epkk4zt.jpg',
    arraySure: [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 } ]
  },
  {
    id: '32507',
    name: 'Andrea Soto',
    specialty: { id: 10 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189768/doctors/women/pn959480kk3hclyaqo8l.jpg',
    arraySure: [ { id: 3 }, { id: 5 } ]
  },
  {
    id: '92734',
    name: 'Antonella Nieva',
    specialty: { id: 6 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189768/doctors/women/id231fv4ulkvxlbcy440.jpg',
    arraySure: [ { id: 1 }, { id: 2 }, { id: 5 } ]
  },
  {
    id: '52852',
    name: 'Camila Ruiz',
    specialty: { id: 4 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189768/doctors/women/xfkixq1inlgahozvapjj.jpg',
    arraySure: [ { id: 1 }, { id: 2 }, { id: 4 }, { id: 5 } ]
  },
  {
    id: '96140',
    name: 'Carmen López',
    specialty: { id: 8 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189768/doctors/women/kdy6xd8tctnn340zp2uv.jpg',
    arraySure: [ { id: 1 }, { id: 3 }, { id: 4 }, { id: 5 } ]
  },
  {
    id: '28143',
    name: 'Carolina Ramírez',
    specialty: { id: 6 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189768/doctors/women/dqtdzdkz5rcuf5ouogzl.jpg',
    arraySure: [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 } ]
  },
  {
    id: '30987',
    name: 'Elena Hernández',
    specialty: { id: 5 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700190229/doctors/women/xlyqcvlfeahg7bghx0di.jpg',
    arraySure: [ { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 } ]
  },
  {
    id: '54607',
    name: 'Florencia Sánchez',
    specialty: { id: 3 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189768/doctors/women/yzz96ougt7nlbgdmx2ir.jpg',
    arraySure: [ { id: 3 }, { id: 5 } ]
  },
  {
    id: '765982',
    name: 'Gabriela Ortega',
    specialty: { id: 9 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189769/doctors/women/eazbqmd9uwbynjgknqld.jpg',
    arraySure: [ { id: 2 }, { id: 5 } ]
  },
  {
    id: '57836',
    name: 'Julieta Godoy',
    specialty: { id: 4 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189769/doctors/women/iggyfil7fpazdeyttezd.jpg',
    arraySure: [ { id: 2 }, { id: 3 }, { id: 5 } ]
  },
  {
    id: '51472',
    name: 'Laura Fernández',
    specialty: { id: 7 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189769/doctors/women/whgme8zkratrwllcujco.jpg',
    arraySure: [ { id: 1 }, { id: 3 } ]
  },
  {
    id: '95814',
    name: 'Maria Lopez',
    specialty: { id: 2 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189769/doctors/women/rsoizdrefk0s3x75nygs.jpg',
    arraySure: [ { id: 2 }, { id: 4 }, { id: 5 } ]
  },
  {
    id: '79562',
    name: 'Marina González',
    specialty: { id: 3 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189769/doctors/women/nlou2jn30rnjdetbisqj.jpg',
    arraySure: [ { id: 2 }, { id: 4 } ]
  },
  {
    id: '52654',
    name: 'Natalia Molina',
    specialty: { id: 10 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189769/doctors/women/btrtzsapqelisa8c8hp4.jpg',
    arraySure: [ { id: 3 }, { id: 4 } ]
  },
  {
    id: '92737',
    name: 'Silvia Luna',
    specialty: { id: 8 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189769/doctors/women/ldiyhysm5tuxuxpldcfb.jpg',
    arraySure: [ { id: 3 } ]
  },
  {
    id: '41389',
    name: 'Sofía García',
    specialty: { id: 10 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700192307/doctors/women/toppvsxbyy9zcmb3i4iq.jpg',
    arraySure: [ { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 } ]
  },
  {
    id: '14865',
    name: 'Valeria Pérez',
    specialty: { id: 10 },
    profilePicture: 'https://res.cloudinary.com/dvpo44a4q/image/upload/v1700189770/doctors/women/r0z9ptldvmiprxcofron.jpg',
    arraySure: [ { id: 1 }, { id: 2 }, { id: 5 } ]
  }
]

const obra_social = [
  { "id":1, "name":"OSDE" },
  { "id":2, "name":"Swiss Medical" },
  { "id":3, "name":"Medifé" },
  { "id":4, "name":"Galeno" },
  { "id":5, "name":"Sancor Salud"}
]
const cardsPerPage = 8;


function PatientNewAppointment() {
  /* --------------------------------------------------------------------------------*/
  /* States */
  /* --------------------------------------------------------------------------------*/
  const [isLoading, setLoading] = useState(false);
  const [hasFailed, setFailed] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const [order, setOrder] = useState(""); // ascendent / descendent
  const [filter, setFilter] = useState(''); // contiene un arreglo con los seguros medicos selecionados
  const [search, setSearch] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('');

  const [specialtys, setSpecialtys] = useState([]);
  const [allDoctors, setAllDoctors] = useState([]);
  const [obraSocial, setObraSocial] = useState([]);

  const [maxPage, setMaxPage] = useState(5);
  const [actualPage, setActualPage] = useState(1);

  const navigate = useNavigate();
  
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
    setObraSocial(obra_social.reduce((ac,el)=>[...ac,el.name],['noHave']))
    setSpecialtys(especialidades.reduce((ac,el)=>[...ac,el.name],['noHave']));
    setAllDoctors(doctors.map(el=>{return {...el,arraySure:el.arraySure.map(ell=>ell.id)}}));
  }, []);

  console.log(allDoctors.specialty)


  const filterDoctors = ()=>{
    let aux = [...allDoctors];
    //filtro por especialidad
    if(specialtyFilter) {aux = [...aux].filter(el=>el.specialty.id==specialtyFilter)}
     //filtro por obra social
     if(filter) {aux = [...aux].filter(el=>el.arraySure.includes(+filter))}
    //filtro por input 
    aux = [...aux].filter(el=>el.name.toLowerCase().includes(search))
    //ordenamiento
    if(order) {aux = [...aux].sort((a,b)=>order === 'ascendent' 
      ? a.name.localeCompare(b.name) 
      : b.name.localeCompare(a.name)
    )}

    let mxPage = Math.ceil(aux.length/cardsPerPage);
    if(maxPage != mxPage)setMaxPage(mxPage)
    return aux;
  }

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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M9.15722 21.2705V18.13C9.1572 17.3313 9.79312 16.6822 10.581 16.6768H13.4671C14.2587 16.6768 14.9005 17.3275 14.9005 18.13V18.13V21.2802C14.9003 21.9584 15.4343 22.5127 16.103 22.5286H18.0271C19.9451 22.5286 21.5 20.9523 21.5 19.0078V19.0078V10.0741C21.4898 9.30913 21.1355 8.59079 20.538 8.12351L13.9577 2.74963C12.8049 1.81393 11.1662 1.81393 10.0134 2.74963L3.46203 8.13326C2.86226 8.59865 2.50739 9.31818 2.5 10.0838V19.0078C2.5 20.9523 4.05488 22.5286 5.97291 22.5286H7.89696C8.58236 22.5286 9.13798 21.9653 9.13798 21.2705V21.2705" stroke="#352E5B" strokeWidth="1.5" strokeLinecap="round" strokelinejoin="round"/></svg>
            Home
          </a>

          <a href="/patient/edit_profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><g clipPath="url(#clip0_257_4809)"><path d="M8 7.57715C8 8.63801 8.42143 9.65543 9.17157 10.4056C9.92172 11.1557 10.9391 11.5771 12 11.5771C13.0609 11.5771 14.0783 11.1557 14.8284 10.4056C15.5786 9.65543 16 8.63801 16 7.57715C16 6.51628 15.5786 5.49887 14.8284 4.74872C14.0783 3.99858 13.0609 3.57715 12 3.57715C10.9391 3.57715 9.92172 3.99858 9.17157 4.74872C8.42143 5.49887 8 6.51628 8 7.57715Z" stroke="#A5A2B8" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/><path d="M6 21.5771V19.5771C6 18.5163 6.42143 17.4989 7.17157 16.7487C7.92172 15.9986 8.93913 15.5771 10 15.5771H14C15.0609 15.5771 16.0783 15.9986 16.8284 16.7487C17.5786 17.4989 18 18.5163 18 19.5771V21.5771" stroke="#A5A2B8" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_257_4809"><rect width="24" height="24" fill="white" transform="translate(0 0.577148)"/></clipPath></defs></svg>
            Editar perfil
          </a>

          <a href="/patient/new_appointment">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none"><g clipPath="url(#clip0_257_4803)"><path d="M8.25 11.5771H13.75" stroke="#A5A2B8" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/><path d="M11 8.82715V14.3271" stroke="#A5A2B8" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/><path d="M2.75 5.16048C2.75 4.67425 2.94315 4.20794 3.28697 3.86412C3.63079 3.5203 4.0971 3.32715 4.58333 3.32715H17.4167C17.9029 3.32715 18.3692 3.5203 18.713 3.86412C19.0568 4.20794 19.25 4.67425 19.25 5.16048V17.9938C19.25 18.48 19.0568 18.9464 18.713 19.2902C18.3692 19.634 17.9029 19.8271 17.4167 19.8271H4.58333C4.0971 19.8271 3.63079 19.634 3.28697 19.2902C2.94315 18.9464 2.75 18.48 2.75 17.9938V5.16048Z" stroke="#A5A2B8" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_257_4803"><rect width="22" height="22" fill="white" transform="translate(0 0.577148)"/></clipPath></defs></svg>
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

        <article className="forms-wrapper">
          <header>
            Agendar cita
          </header>

          <section className="select-doctor">
            <header>
              <h1>Seleccione el doctor de su preferencia:</h1>

              {/* barra de Tabs del mosaico, cada button cambia el actual tab */}
              
                <ul className="tabs-group">
                {specialtys.slice(1).map((el,ix)=><li key={'li_spe'+ix} className="tab" value={ix+1} onClick={(e)=>{
                  if(e.target.value == specialtyFilter){
                    setSpecialtyFilter('')
                  }else{
                    setSpecialtyFilter(e.target.value)
                  }
                }}>{el}</li>)}
                </ul>
              
              {/* barra de filtros del mosaico, creo deberia filtrar solo los elementos del actual tab, ustedes deciden */}
              <div className="filters-group">
                {/* opciones de ordenado ascendientemente y descendientemente por nombre*/}
                <div className="options">
                  {/* boton de reset */}
                  <div onClick={(e)=>{e.preventDefault();setOrder('')}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><g clipPath="url(#clip0_127_89)"><path d="M2.25 6.75L5.25 3.75M5.25 3.75L8.25 6.75M5.25 3.75V10.5758M5.25 13.1471V13.7419V14.264" stroke="#686868" strokeLinecap="round" stroke-linejoin="round"/><path d="M15.75 11.25L12.75 14.25M12.75 14.25L9.75 11.25M12.75 14.25V8.12343M12.75 5.55213V4" stroke="#686868" strokeLinecap="round" stroke-linejoin="round"/><path d="M17 4L2 14" stroke="#686868" strokeLinecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_127_89"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>
                  </div>

                  {/* select del order */}
                  <form>
                  <label htmlFor="order" >
                      Order:
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><g clipPath="url(#clip0_6_4055)"><path d="M2.25 6.75L5.25 3.75M5.25 3.75L8.25 6.75M5.25 3.75V14.25" stroke="#686868" strokeLinecap="round" stroke-linejoin="round"/><path d="M15.75 11.25L12.75 14.25M12.75 14.25L9.75 11.25M12.75 14.25V3.75" stroke="#686868" strokeLinecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_6_4055"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>
                    </label>

                    <select id="order" value={order} onChange={(e)=>{e.preventDefault(); setOrder(e.target.value)}}>
                      <option value="unordered"></option>
                      <optgroup label="Por Nombre">
                        <option value='descendent'>Descendiente</option>
                        <option value='ascendent'>Ascendiente</option>
                      </optgroup>
                    </select>

                  </form>
                </div>

                {/* barra de busqueda, creo que deberia buscar dentro del tab en el que estamos, ustedes deciden */}
                <form id="searh-in-grid" className="search-bar" onSubmit={(e)=>{e.preventDefault(); alert("2")/* manejar la busqueda */}}>
                  <input type="text" name="name" placeholder="Buscar" value={search} onChange={(e)=>{e.preventDefault;setSearch(e.target.value)}}></input>
                  <div type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clipPath="url(#clip0_5_3866)"><path fillRule="evenodd" clip-rule="evenodd" d="M14.958 7.40981C17.2466 9.8063 17.1591 13.6043 14.7626 15.8928C12.3661 18.1814 8.56816 18.0939 6.2796 15.6974C3.99103 13.301 4.07852 9.50298 6.475 7.21441C8.87148 4.92585 12.6695 5.01333 14.958 7.40981ZM16.8244 16.6039C19.3385 13.5225 19.222 8.97893 16.4044 6.02854C13.353 2.83323 8.28904 2.71659 5.09373 5.76801C1.89842 8.81943 1.78177 13.8834 4.83319 17.0787C7.65072 20.0291 12.1841 20.3547 15.378 17.9851L17.4926 20.1995C17.874 20.5989 18.507 20.6135 18.9064 20.2321C19.3059 19.8506 19.3204 19.2176 18.939 18.8182L16.8244 16.6039Z" fill="#B2B2B2"/></g><defs><clipPath id="clip0_5_3866"><rect width="24" height="24" fill="white"/></clipPath></defs></svg></div>
                </form>

                {/* opciones de filtrado, filtra ascendientemente y descendientemente por nombre*/}
                <div className="options">
                  {/* select del filter */}
                  <form>
                    <label htmlFor="order">
                      Filter:
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><g clipPath="url(#clip0_6_4055)"><path d="M2.25 6.75L5.25 3.75M5.25 3.75L8.25 6.75M5.25 3.75V14.25" stroke="#686868" strokeLinecap="round" stroke-linejoin="round"/><path d="M15.75 11.25L12.75 14.25M12.75 14.25L9.75 11.25M12.75 14.25V3.75" stroke="#686868" strokeLinecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_6_4055"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>
                    </label>

                    <select id="order" onChange={(e)=>{e.preventDefault(); setFilter(e.target.value)/* apply orders */}}>
                      <option value="0"></option>
                      <optgroup label="Por obra social">
                        {
                          obraSocial.slice(1).map((el,ix)=>{
                            return(
                              <option key={'obraSocial'+ix} value={ix+1}>{el}</option>
                            )
                          })
                        }
                      </optgroup>
                    </select>
                  </form>

                  
                  <div onClick={(e)=>{e.preventDefault();setFilter(0)}} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><g clipPath="url(#clip0_127_85)"><path d="M5.5 3H15V4.629C14.9999 5.02679 14.8418 5.40826 14.5605 5.6895L11.625 8.625M11.25 11.25V14.25L6.75 15.75V9.375L3.39 5.679C3.13909 5.40294 3.00004 5.0433 3 4.67025V3" stroke="#686868" strokeLinecap="round" stroke-linejoin="round"/><path d="M2.5 1.5L15.75 15.75" stroke="#686868" strokeLinecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_127_85"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>
                  </div>
                </div>
              </div>
            </header>

            <form id="select-doctor" onSubmit={()=>{/* validar y procesar la info */}}>
              <fieldset className="select-doctor">
                <section className="cards-grid">

                  {
                    filterDoctors().slice((actualPage-1)*cardsPerPage,actualPage*cardsPerPage).map(el=>{
                      return(
                        <article key={'doc_card'+el.id} data-id={el.id} className="tile" onClick={(e)=>{navigate('/patient/new_appointment/DetailDoctor/'+e.currentTarget.getAttribute('data-id'))}}>
                          <img value={el.id} src={el.profilePicture}></img>
                          <section className="card-description">
                          <h1>{el.name}</h1>
                          <p className="specialization">{specialtys[el.specialty.id]}</p>
                            <p className="licence">{el.id}</p>
                          </section>
                        </article>
                      )
                    })
                  }

                  
                </section>
              </fieldset>
            </form>

            <footer>
              <nav aria-label="Navegación por páginas">
                <ul className="pagination">
                  {/* Botón prev */}
                  <li className="page-item">
                    <a href="#" className="prev" onClick={()=>{
                      if(actualPage-1>0){setActualPage(actualPage-1)}
                      }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none"><g clipPath="url(#clip0_318_8370)"><path d="M11.75 4.5L7.25 9L11.75 13.5" stroke="#747474" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_318_8370"><rect width="18" height="18" fill="white" transform="translate(0.5)"/></clipPath></defs></svg>
                      Anterior
                    </a>
                  </li>

                  {/* Números de página */}
                  <p>{actualPage} de {maxPage}</p>


                  

                  {/* Botón next */}
                  <li className="page-item">
                    <a href="#" className="next" onClick={()=>{
                      if(actualPage+1<=maxPage){setActualPage(actualPage+1)}
                    }}>
                      Siguiente
                      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none"><g clipPath="url(#clip0_318_8378)"><path d="M7.25 4.5L11.75 9L7.25 13.5" stroke="#747474" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_318_8378"><rect width="18" height="18" fill="white" transform="translate(0.5)"/></clipPath></defs></svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </footer>
          </section>

          <hr></hr>

          {/* estudiar logica de: https://mui.com/x/react-date-pickers/date-time-picker/ */}
          <section className="select-date">
            <h1>Seleccione el horario de su preferencia:</h1>
            <form id="select-date" onSubmit={()=>{/* validar y procesar la info */}}>
              <fieldset className="select-date">
                {/* estudiar logica de: https://mui.com/x/react-date-pickers/date-time-picker/ */}
                <StaticDateTimePicker  />
              </fieldset>
            </form>
          </section>

          <hr></hr>

          <footer>
            <button className="send-formulary" onClick={()=>{/* finalizar el envio del formulario */}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_317_5149)"><path d="M5 12L10 17L20 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_317_5149"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
              Enviar
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default PatientNewAppointment;

function cardDoctor(){
  
}
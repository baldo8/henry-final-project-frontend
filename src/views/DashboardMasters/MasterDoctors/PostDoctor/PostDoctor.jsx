import "./PostDoctor.css"
import validation from "./validations"
import axios from "axios"
import { useState } from "react"
import data from "./data.json"
import { NavLink } from "react-router-dom";

const PostDoctor = () => {
  const [foto, setFoto] = useState("");
  const [aux, setAux] = useState([]);
  const [aux1, setAux1] = useState([]);
  const [errors, setErrors] = useState({});
  const [seguros, setSeguros] = useState([]);
  const [doctor, setDoctor] = useState({
    name: "",
    specialty: "",
    profilePicture: "",
    id: "",
    phone: "",
    email: "",
    sure: [],
  });

  const indicativos = ["+1", "+54", "+57", "+51", "+52"];
  let especialidad = [...new Set(data.doctors.map((esp) => esp.specialty))];
  let seguro = [
    ...new Set(
      data.doctors.flatMap((sur) => sur.arraySure.map((sure) => sure))
    ),
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDoctor({ ...doctor, [name]: value });
    setErrors(validation({ ...doctor, [name]: value }));
  };

  // const handlePhone = (event) => {
  //   const { name, value } = event.target;
  //   setAux(value)
  //   setAux1(value)
  //   setDoctor({ ...doctor, [name]: aux + aux1 });
  //   setErrors(validation({ ...doctor, [name]: value }));
  // };

  console.log(doctor);

  const handleSure = (event) => {
    const values = event.target.value;
    if (!seguros.includes(values)) {
      setSeguros([...seguros, values]);
      setDoctor({ ...doctor, sure: [...doctor.sure, values] });
    }
  };

  //const { name, id, email, phone, profilePicture, sure, specialty } = newDoc

  const changeUploadImage = async (event) => {
    const file = event.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "postDoctorPf");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dvpo44a4q/upload",
        data
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      throw error;
    }
  };

  const mostrarVistaPrevia = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => setFoto(reader.result);
    if (file) reader.readAsDataURL(file);

    const imageUrl = await changeUploadImage(event);
    setDoctor({ ...doctor, profilePicture: imageUrl });
  };

  //console.log(doctor);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      const { data } = await axios.post("http://localhost:3001/doctor", doctor);

      setDoctor({
        name: "",
        specialty: "",
        profilePicture: "",
        id: "",
        phone: "",
        email: "",
        sure: [],
      });

      window.alert("Registro Exitoso!");

      console.log(doctor);
    } catch (error) {
      window.alert(error.response.data.error);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingLeft: 158,
        paddingRight: 158,
        paddingTop: 31,
        paddingBottom: 31,
        background: "white",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        display: "inline-flex",
      }}
    >
      <div
        style={{
          width: 1124,
          height: 873,
          position: "relative",
          background: "#DAEFEC",
          borderRadius: 35,
          overflow: "hidden",
          border: "1px white solid",
        }}
      >
        <div
          style={{
            width: 205,
            height: 166,
            left: 459,
            top: 33,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 205,
              height: 166,
              left: 0,
              top: 0,
              position: "absolute",
              background: "#42B8C3",
            }}
          />
          <div
            style={{
              width: 175,
              height: 135,
              left: 15,
              top: 14,
              position: "absolute",
              background: "#E4F8F3",
            }}
          />
        </div>
        <div
          style={{
            width: 184,
            paddingTop: 12,
            paddingBottom: 12,
            left: 676,
            top: 153,
            position: "absolute",
            background: "#42B8C3",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 22, height: 22, position: "relative" }}>
            <div
              style={{
                width: 22,
                height: 22,
                left: 0,
                top: 0,
                position: "absolute",
              }}
            ></div>
            <div
              style={{
                width: 5.5,
                height: 0,
                left: 8.25,
                top: 11,
                position: "absolute",
                border: "2px white solid",
              }}
            ></div>
            <div
              style={{
                width: 0,
                height: 5.5,
                left: 11,
                top: 8.25,
                position: "absolute",
                border: "2px white solid",
              }}
            ></div>
            <div
              style={{
                width: 16.5,
                height: 16.5,
                left: 2.75,
                top: 2.75,
                position: "absolute",
                border: "2px white solid",
              }}
            ></div>
          </div>
          <div
            style={{
              color: "white",
              fontSize: 14,
              fontFamily: "DM Sans",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Agendar Foto
          </div>
        </div>
        <div
          style={{
            paddingLeft: 35,
            paddingRight: 35,
            paddingTop: 15,
            paddingBottom: 15,
            left: 413.5,
            top: 795,
            position: "absolute",
            background: "#E4F8F3",
            borderRadius: 30,
            overflow: "hidden",
            border: "3px #42B8C3 solid",
            justifyContent: "center",
            alignItems: "center",
            gap: 55,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              background: "#42B8C3",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "inline-flex",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: 48,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 4,
                paddingBottom: 4,
                background: "#42B8C3",
                borderRadius: 6,
                overflow: "hidden",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 18,
                    fontFamily: "IBM Plex Sans",
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  Cancel
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "inline-flex",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: 48,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 4,
                paddingBottom: 4,
                background: "#42B8C3",
                borderRadius: 6,
                overflow: "hidden",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 18,
                    fontFamily: "IBM Plex Sans",
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  Enviar
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: 804,
            height: 568,
            padding: 40,
            left: 145,
            top: 215,
            position: "absolute",
            background: "white",
            borderRadius: 35,
            border: "1px #D7DEDD solid",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              color: "black",
              fontSize: 24,
              fontFamily: "Outfit",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            Formulario
          </div>
          <div
            style={{
              height: 472,
              borderRadius: 16,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 8,
              display: "flex",
            }}
          >
            <div
              style={{
                width: 493,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 105,
                  height: 40,
                  padding: 8,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    color: "#42A7C3",
                    fontSize: 24,
                    fontFamily: "Outfit",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Nombre
                </div>
              </div>
              <div
                style={{
                  width: 392,
                  paddingLeft: 1,
                  paddingRight: 1,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 72,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 4,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 4,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        flex: "1 1 0",
                        height: 40,
                        padding: 8,
                        background:
                          "linear-gradient(0deg, #EDF5F4 0%, #EDF5F4 100%), linear-gradient(0deg,  0%,  100%)",
                        boxShadow: "0px -1px 0px #484747 inset",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 8,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          flex: "1 1 0",
                          color: "black",
                          fontSize: 14,
                          fontFamily: "Outfit",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}
                      >
                        Jack Sullivan
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: 485,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 19,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 83,
                  height: 40,
                  padding: 8,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: 110,
                    color: "#42A7C3",
                    fontSize: 24,
                    fontFamily: "Outfit",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Licencia
                </div>
              </div>
              <div
                style={{
                  width: 393,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 72,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 4,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 4,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        flex: "1 1 0",
                        height: 40,
                        padding: 8,
                        background:
                          "linear-gradient(0deg, #EDF5F4 0%, #EDF5F4 100%), linear-gradient(0deg,  0%,  100%)",
                        boxShadow: "0px -1px 0px #484747 inset",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 8,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          flex: "1 1 0",
                          color: "black",
                          fontSize: 14,
                          fontFamily: "Outfit",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}
                      >
                        jack.s@email.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: 491,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 19,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 85,
                  height: 40,
                  padding: 8,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: 97,
                    color: "#42A7C3",
                    fontSize: 24,
                    fontFamily: "Outfit",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Telefono
                </div>
              </div>
              <div
                style={{
                  width: 393,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 72,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 4,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 4,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        padding: 8,
                        background:
                          "linear-gradient(0deg, #EDF5F4 0%, #EDF5F4 100%), linear-gradient(0deg,  0%,  100%)",
                        boxShadow: "0px -1px 0px #484747 inset",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 8,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          flex: "1 1 0",
                          color: "black",
                          fontSize: 14,
                          fontFamily: "Outfit",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}
                      >
                        +91
                      </div>
                    </div>
                    <div
                      style={{
                        flex: "1 1 0",
                        height: 40,
                        padding: 8,
                        background:
                          "linear-gradient(0deg, #EDF5F4 0%, #EDF5F4 100%), linear-gradient(0deg,  0%,  100%)",
                        boxShadow: "0px -1px 0px #484747 inset",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 8,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          flex: "1 1 0",
                          color: "black",
                          fontSize: 14,
                          fontFamily: "Outfit",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}
                      >
                        9876543210
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: 492,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 103,
                  height: 40,
                  padding: 8,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    color: "#42A7C3",
                    fontSize: 24,
                    fontFamily: "Outfit",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Email
                </div>
              </div>
              <div
                style={{
                  width: 395,
                  paddingLeft: 1,
                  paddingRight: 1,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 72,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 4,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 4,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        flex: "1 1 0",
                        height: 40,
                        padding: 8,
                        background:
                          "linear-gradient(0deg, #EDF5F4 0%, #EDF5F4 100%), linear-gradient(0deg,  0%,  100%)",
                        boxShadow: "0px -1px 0px #484747 inset",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 8,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          flex: "1 1 0",
                          color: "black",
                          fontSize: 14,
                          fontFamily: "Outfit",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}
                      >
                        403001
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: 484,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 14,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 85,
                  height: 40,
                  padding: 8,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    color: "#42A7C3",
                    fontSize: 24,
                    fontFamily: "Outfit",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Seguro
                </div>
              </div>
              <div
                style={{
                  width: 390,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 72,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 4,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 4,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        flex: "1 1 0",
                        height: 40,
                        padding: 8,
                        background:
                          "linear-gradient(0deg, #EDF5F4 0%, #EDF5F4 100%), linear-gradient(0deg,  0%,  100%)",
                        boxShadow: "0px -1px 0px #484747 inset",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 8,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          flex: "1 1 0",
                          color: "black",
                          fontSize: 14,
                          fontFamily: "Outfit",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}
                      >
                        Goa
                      </div>
                      <div
                        style={{ width: 16, height: 16, position: "relative" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 103,
                  height: 40,
                  padding: 8,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    color: "#42B8C3",
                    fontSize: 24,
                    fontFamily: "Outfit",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Price
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 72,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 4,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 4,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        flex: "1 1 0",
                        height: 40,
                        padding: 8,
                        background:
                          "linear-gradient(0deg, #EDF5F4 0%, #EDF5F4 100%), linear-gradient(0deg,  0%,  100%)",
                        boxShadow: "0px -1px 0px #484747 inset",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 8,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          flex: "1 1 0",
                          color: "black",
                          fontSize: 14,
                          fontFamily: "Outfit",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}
                      >
                        403001
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: 0,
              border: "1px #D7DEDD solid",
            }}
          ></div>
        </div>
        <div
          style={{
            width: 353,
            height: 103,
            paddingTop: 10,
            paddingBottom: 10,
            left: 0,
            top: 0,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 48, height: 48, position: "relative" }}>
            <div
              style={{
                width: 42.04,
                height: 35.7,
                left: 3,
                top: 6,
                position: "absolute",
                opacity: 0.98,
                background: "#42B8C3",
              }}
            ></div>
            <div
              style={{
                width: 32.68,
                height: 17.18,
                left: 9,
                top: 15.79,
                position: "absolute",
                background: "#E4F8F3",
              }}
            ></div>
          </div>
          <div
            style={{
              color: "black",
              fontSize: 22,
              fontFamily: "Montserrat",
              fontWeight: "800",
              lineHeight: 32,
              letterSpacing: 0.1,
              wordWrap: "break-word",
            }}
          >
            HealthBooking
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDoctor;
{
  /* <form onSubmit={handleSubmit}>
  <div className="formulario">
      <div>
      <input className="subirFoto" type="file" accept=".jpg, .jpeg, .png" values={doctor.profilePicture}onChange={mostrarVistaPrevia} />
      {foto && <img src={foto} alt="Not Found" className="foto" />}
    </div>
    <p className="fotoError">{errors.profilePicture}</p>

    <div class="cuadrado"></div>

      <div className="frame">
        <input type="text" className="Nombre" placeholder="Ingresa nombre" name="name" value={doctor.name} onChange={handleChange}></input>
      </div>
      <p className="NombreError">{errors.name}</p>
      <div className="datos">
        <div className="group">
          <label className="div">Formulario</label>
        </div>
        <div className="frame-2">
          <label className="text-wrapper-2">Especialidad</label>
          <select  name="specialty" className="Especialidad" value={doctor.specialty} onChange={handleChange}> 
            <option value="">Seleccionar</option>
            {especialidad?.map((esp, index)=>(
              <option key={index}>
                {esp}
              </option> 
            ))}
          </select>
        </div>
          <p className="EspecialidadError">{errors.specialty}</p>
        <hr />

        <div className="group-2">
          <label className="text-wrapper-4">Licencia</label>
          <input type="number" name="id" className="licencia" placeholder="Ej. 12345" value={doctor.id} onChange={handleChange} ></input>
        </div>
          <p className="licenciaError">{errors.id}</p>
        <hr />

        <div className="group-2">
          <label className="text-wrapper-6">Telefono</label>
          <select className="indicativo" >
            {indicativos.map((ind, index)=>(
              <option key={index}>{ind}</option>
            ))}
          </select>
          <input type="number" name="phone" className="licencia" placeholder="Ej. 1234567890" value={doctor.phone} onChange={handleChange}></input>
        </div>
          <p className="TelefonoError">{errors.phone}</p>
        <hr />

        <div className="group-2">
          <div  className="text-wrapper-7">email</div>
          <input type="email" name="email" className="licencia"  placeholder="Ej. ejemp@mail.com" value={doctor.email} onChange={handleChange}></input>
        </div>
          <p className="CorreoError" >{errors.email}</p>
        <hr />

        <div className="group-2">
          <div className="text-wrapper-7">Seguro</div>
            <select name="sure" className="licencia" value={doctor.sure} onChange={handleSure}>
              <option value="">Seleccionar</option>
              {seguro?.map((sure, index)=>(
                <option key={index} value={sure}>
                {sure}
                </option> 
              ))}
            </select>
            <p className="seleccionados">
              {seguros.map((seg)=>(
              <button className="butonDeletSure" value={seg} onClick={(event)=> {setSeguros(seguros.filter((e)=> e !== event.target.value));setDoctor({...doctor, sure: doctor.sure.length ? doctor.sure.filter((e)=> e !== event.target.value) : ""} )}}>{seg} </button> 
                ))}
            </p> 
          </div>
          {!seguros.length && <p className="SeguroError" name="Seguro">{errors.sure}</p>}
        </div>

        <div className="Footer" style={{position: "relative", top: 60, borderRadius: 20, width: 430, height: 60, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, background: '#f8f7ffbb', borderTop: '1px #E6E6E6 solid', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
        <div className="Frame53" style={{paddingLeft: 16, paddingRight: 16, paddingTop: 2, paddingBottom: 2, background: 'white', borderRadius: 4, overflow: 'hidden', border: '1px #E6E6E6 solid', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
          <NavLink to={"/patient/new_appointment"}>
            <button className="Cancel" style={{width: 88, height: 29, textAlign: 'center', color: 'black', fontSize: 13, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word'}}>Cancelar</button>
          </NavLink>
        </div>
        <div className="Frame52" style={{paddingLeft: 16, paddingRight: 16, paddingTop: 2, paddingBottom: 2, background: '#42A7C3', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)', borderRadius: 4, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
        <button type="submit" className="enviar" style={{width: 88, height: 29, textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word'}}>Enviar</button>
        </div>
      </div>
    </div>
  </form> */
}
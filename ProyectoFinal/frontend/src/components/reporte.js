import React, {useState, useEffect} from 'react';
import '../css/administrador.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Reportes = () => {
    const [imagen, setImagen] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWiYNM1A0gP6qy76cM_kChvvUOoq8Nv5Qi1A&usqp=CAU')
    const salir = (e) => {
        e.preventDefault();
        console.log("Listo")
        window.open("/admin","_self")
    }

    const validar = (data) =>{
        console.log(data)
        setImagen(data.imagen.Imagenbase64)
    }

    const reporteGrafo = async(e) => {
        e.preventDefault();
        fetch('http://localhost:3001/reporte-grafo',{
        })
        .then(response => response.json())
        .then(data => validar(data));
    }

    const reporteArbol = async(e) => {
        e.preventDefault();
        fetch('http://localhost:3001/reporte-arbol',{
        })
        .then(response => response.json())
        .then(data => validar(data));
    }

    const reporteBlockchain = async(e) => {
        e.preventDefault();
        fetch('http://localhost:3001/reporte-bloque',{
        })
        .then(response => response.json())
        .then(data => validar(data));
    }

    return(
        <div className="form-signin1">
            <div className="text-center">
                  <form className="card card-body">
                    <h1 className="h3 mb-3 fw-normal">Reportes Administrador</h1>
                    <br/>
                    <center><button className="btn btn-success" onClick={reporteGrafo}>Grafo</button></center>
                    <br/>
                    <center><button className="btn btn-success" onClick={reporteArbol}>Arbol AVL</button></center>
                    <br/>
                    <center><button className="btn btn-success" onClick={reporteBlockchain}>Facturas</button></center>
                    <br/>
                    <center><button className="btn btn-danger" onClick={salir}>Salir</button></center>
                    <br/>
                    <center><img src={imagen} width="350" height="350" alt='some value' /></center>
                    <br/>
                
                    <br/>
                  </form>
            </div>
          </div>
    );
}
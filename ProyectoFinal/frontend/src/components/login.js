import React, {useState} from 'react';
import '../css/login.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Login = () => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user + " " + pass)
        fetch('http://localhost:3001/login',{
            method: 'POST',
            body: JSON.stringify({
                Username: user,
                Password: pass
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => validar(data))
    }

    const validar = (data) => {
        if(data.status == "400"){
            window.open("/admin","_self")
        }else if(data.status == "200"){
            localStorage.setItem("empleado", user)
            window.open("/empleado","_self")
        }else{
            console.log("ME dio ansiedad")
        }
    }


    return(
        <div class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
           
                  <form onSubmit={handleSubmit} className="card card-body">



                    
                    <label  className="form-label">Usuario</label>
                    <input type="text" id="userI" className="form-control" placeholder="Nombre Usuario" required
                    onChange={e => setUser(e.target.value)} 
                    value={user}  
                    autoFocus/>
                    <br/>
                    <label  className="form-label">Contraseña</label>
                    <label htmlFor="inputPassword" className="visually-hidden">Password</label>
                    <input type="password" id="passI" className="form-control" placeholder="Password" aria-describedby="passwordHelpInline" //required 
                     onChange={e => setPass(e.target.value)}
                     value={pass} 
                     autoFocus/>
                    <br />
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Iniciar Sesion</button>
                  
                    <br/>
                  </form>
            
        </div>
    );
}






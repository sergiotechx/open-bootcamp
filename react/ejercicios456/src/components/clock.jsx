import React, { useState, useEffect } from 'react';

 const Clock = () => {
    //Usuario inicial*
    const initialUser = {
         fecha: new Date(),
         nombre: 'Martín',
         apellidos: 'San José',
         edad: 0,
    };
    
    //data de constante manipulación con manejo de estados
    const [user,setUser] = useState(initialUser);

    //Sin la variable de parada queda en un loop
    useEffect(() => {
        const userAge =  setInterval(() => { //definición de intervalo de 1 segundo e incremento de la  edad
                        tick();
                    }, 1000);
        return () => {
          clearInterval(userAge);
        };
    });
    const  tick = () => {
        return setUser({
          ...user,
          edad: user.edad + 1,
        });
      };
      
    
        return (
           <div>
           <h2>
           Hora Actual:
           {user.fecha.toLocaleTimeString()}
           </h2>
           <h3>{user.nombre} {user.apellidos}</h3>
           <h1>Edad: {user.edad}</h1>
           </div>
        )
     }


export default Clock;
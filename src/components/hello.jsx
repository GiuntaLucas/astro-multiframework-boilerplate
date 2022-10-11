
import React, { useEffect, useState } from "react";
import {helloSubject} from '../stores/hello.store';

export function ReactHello() {
    const [yoFrom, setYoFrom] = useState('');
  
    useEffect(() => {
        helloSubject.subscribe(x => setYoFrom(x))
    });

    function yo() {
        helloSubject.next('Yo from React');
    }
  
    return (
        <>
            <h1 style={{color: 'blue'}}>Hello React</h1>
            <button onClick={yo}>Yo</button>
            <p>{yoFrom}</p>
        </>
    );

    
  }


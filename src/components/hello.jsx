
import React, { useEffect, useState } from "react";
import {helloSubject} from '../stores/hello.store';

export function ReactHello() {
    const [yoFrom, setYoFrom] = useState('');
    const title = 'React';
    useEffect(() => {
        helloSubject.subscribe(x => setYoFrom(x))
    });

    function yo() {
        helloSubject.next('Yo from React');
    }
  
    return (
        <>
            <h1 className="text-blue-500">Hello {title}</h1>
            <button onClick={yo}>Yo</button>
            <p>{yoFrom}</p>
        </>
    );

    
  }


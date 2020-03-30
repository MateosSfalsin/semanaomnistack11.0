import React from 'react';

export default function Header({ children }) { // Props são as propriedades chamadas qunado for usada
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}
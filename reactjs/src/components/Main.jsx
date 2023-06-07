import React from 'react';
import "../index.css"
const MainC = () => {
    return (
        <div className='bgM'>
            <h1 className='titP'>Articulos</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Coca-Cola</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Coca-Cola</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Coca-Cola</td>
                        <td>$100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MainC;

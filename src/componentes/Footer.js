import React from "react";
import Insta from '../imagen/instalogo.png'
import Ina from '../imagen/inacaplogo.png'

function Footer() {
    return (
        <footer class="abajo">
            <div class="redes">
                <a href="https://www.inacap.cl" target="_blank"><img src={Ina} width="60"/></a>
                <a href="https://www.instagram.com/j.vierr_r/" target="_blank"><img src={Insta} width="30"/></a>
                <br />
            </div>
            <p>&copy; 2024 Regostore. Todos los derechos reservados.</p>
        </footer>
    )
}

export default Footer
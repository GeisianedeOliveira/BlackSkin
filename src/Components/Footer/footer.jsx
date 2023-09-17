import React from "react";
import './footer.css'

export function Footer(){
    return(
        <footer class="footer">
            <div class="logo_footer">
                <a><img src="Logo.png" alt="Logo"></img></a>
            </div>
            <ul class="menu_footer">
                <li><a href=""><img src="linkedin.png" alt="" /></a></li>
                <li><a href=""><img src="whatsapp.png" alt="" /></a></li>
                <li><a href=""><img src="instagram.png" alt="" /></a></li>
                <li><a href=""><img src="twitter.png" alt="" /></a></li>
                <li><a href=""><img src="telegram.png" alt="" /></a></li>
            </ul>
        </footer>
    );
}

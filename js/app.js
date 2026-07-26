/* =========================================
   VELOR — MAIN JAVASCRIPT
   Wear Your Identity.
========================================= */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");

    // Keep loader visible briefly for the brand reveal
    window.addEventListener("load", () => {

        setTimeout(() => {

            if (!loader) return;

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

            setTimeout(() => {
                loader.style.display = "none";
            }, 700);

        }, 900);

    });

});

// ==UserScript==
// @name         PWA-like UserScript for Jut.su
// @description  Adds PWA features to jut.su for a more app-like experience
// @author       emp0ry
// @version      0.0.1
// @match        https://jut.su/*
// @grant        none
// @inject-into  content
// ==/UserScript==

(function () {
    'use strict';

    // Add meta tag for enabling full-screen mode (WebApp capable)
    const metaCapable = document.createElement('meta');
    metaCapable.name = "apple-mobile-web-app-capable";
    metaCapable.content = "yes";
    document.head.appendChild(metaCapable);

    // Add meta tag to control status bar style (black-translucent is a common choice)
    const metaStatusBar = document.createElement('meta');
    metaStatusBar.name = "apple-mobile-web-app-status-bar-style";
    metaStatusBar.content = "black-translucent";
    document.head.appendChild(metaStatusBar);

    // Set the home screen name (title of the web app)
    document.title = "Jut.su";  // This is the name that will appear on the home screen

    // Add a splash screen (a background color or image when opening the app)
    const metaSplash = document.createElement('meta');
    metaSplash.name = "apple-mobile-web-app-status-bar-style";
    metaSplash.content = "black-translucent";
    document.head.appendChild(metaSplash);

    // Hide the address bar when the page is loaded
    window.addEventListener('load', function () {
        setTimeout(function () {
            window.scrollTo(0, 1);
        }, 0);
    });
})();

---
layout: "../../layouts/BlogPost.astro"
title: "Ubuntu Setup"
description: "Lorem ipsum dolor sit amet"
pubDate: "6 Noviembre 2022"
heroImage: "https://i.ibb.co/LzXW7Q4/Ubuntu-Nord.png"
---
<br>

Ubuntu es una de las mejores distribuciones de Linux para iniciarse en el mundo del desarrollo, gracias qué es una de las más utilizadas, por lo que cuenta con una amplia comunidad en foros, lo cual ayuda en momentos en los que hay inconvenientes. Si embargo, por si solo, Ubuntu no cuenta con una personalización variada. Es por ello, que este post, veremos como personalizar nuestro Ubuntu. En mi caso, esta personalización, se hizo en **Ubuntu 22.04 LTS**.

<br>

Primeramente, necesitamos descargas los siguientes programas para poder realizar nuestra personalización.  

<br>

## <span style="color:#3E6D9C;">**1. Manage extension** </span> 
Se puede descargar directamente en la tienda de Ubuntu. Esta aplicación nos permites administrar los Plugins qué instalaremos. 


<p align="center">
    <img src="https://i.ibb.co/PWFD82g/Manage-Extension.png" alt="Manage Extension]">
    </a>
</p>


<br>

## <span style="color:#3E6D9C;">**2. Pluggins**</span> 
En la sección de Buscar, descargaremos los siguientes Plugins: 

<br>
  - Arc Menu: coloca un menú al estilo de Arch Linux en la parte superior. 
  <br>
  - Blur my schell: la barra superior y la sección de actividades con un efecto transparente. El efecto blur qué se ve en la imagen principal, es gracias a este efecto y al wallpaper qué tiene colores en la parte alta. <a style="color:#3E6D9C;" target="_blank" href="https://github.com/midnitefox/Nord-Theme-Ports-and-Assets/blob/main/Wallpapers/nord-swatch-bar-top.png">Wallpaper</a>
  <br>
  - Friperry Aplication Menu: ménu minimalista en la parte superior. 
  <br>
  - Fiperry move clock: mueve el reloj a la parte derecha de la barra superior. 
  <br>
  - Remove app menu: elimina el simbolo del programa que tengamos abierto en el momento 

  <br>
  - User theme: nos permitirá usar diferentes temas. Es muy importante tenerla activada. 

<br>
<br>

## <span style="color:#3E6D9C;">**3. Tweaks** </span> 

Tweaks es una aplicación qué nos permites personalizar a mayor medida nuestro Ubuntu, pudiendo cambiar los temas, iconos, fuentes, ventanas y más. Para ello, abrimos nuestro terminal y ejecutamos los siguientes comandos. 

<br>

```sh
  sudo apt-add repository universe
  sudo apt-get install gnome-tweaks
  sudo apt update
```

<br>


## <span style="color:#3E6D9C;">**4. Temas** </span>

Primero, crearemos en el directorio Home, una carpeta llamada **.themes**. Y en la carpeta de *local/share*, crearemos una carpeta llamada **.icons**.

<br>

Para descargar los temas, nos dirigimos a la siguiente página <a style="color:#63d3ff;" target="_blank" href="https://www.gnome-look.org/browse?cat=134"><u>Gnome Shell Theme</u></a>.

<br>

<p align="center">
    <img src="https://i.ibb.co/P9dbdbV/gnomeshelltheme.png" alt="Themes" width="1024">
    </a>
</p>

<br>

Personalmente, a mi me gustan estos temas: 

  <br>
  - Nordic-darket: este es el tema que utilizo.
  <br>
  - Orchis-dark
  <br>
  - WhiteSur-dark
  
<br>
<br>

Una vez descargados los temas, lo descomprimimos y lo movemos a la carpeta qué creamos llamada **.themes**. De igual forma será para los iconos. 
A mí me gustan estos iconos: 

<br>

### <span style="color:#3E6D9C;">**4.1 Iconos**</span>
  <br>
  - Colloid & light
  <br>
  - hicolor
  <br>
  - Tela

<br>
<br>

Lo siguiente hacer, es abrir la aplicación Tweaks y en apartado de *Apariencia* cambiamos el apartado de themes, icons & shell por nuestro tema qué más nos guste. Aquí mismo, podemos cambiar el wallpaper. Les dejo unos repositorios de wallpaper del tema Nord en GitHub.

<a style="color:#63d3ff;" target="_blank" href="https://github.com/linuxdotexe/nordic-wallpapers/blob/master/wallpaper-preview.md"><u>Wallpapers 1</u></a> &
<a style="color:#63d3ff;" target="_blank" href="https://github.com/midnitefox/Nord-Theme-Ports-and-Assets"><u>Wallpapers 2</u></a>

<p align="center">
    <img src="https://i.ibb.co/jws4tqF/configs.png" alt="configs" width="750">
    </a>
</p>

<br>

Si queremos qué los iconos de cerrar, minimizar y redimensionar de las ventanas estén en el lado izquierdo, en la sección de windows titlebar, colocamos la opción de izquierda. Y para cambiar la sección del dock, nos dirigimos a la configuración de Ubuntu, en paraciencia, colocamos qué el dock este abajo. Si queremos qué se oculte automáticamente, activamos esta opción. 

<p align="center">
    <img src="https://i.ibb.co/SVWkTKB/bar.png" alt="bottom bar" width="750">
    </a>
</p>

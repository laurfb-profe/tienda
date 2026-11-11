# Tienda Demo

Aplicación web estática de ejemplo para la práctica de despliegue de aplicaciones web de 2.º DAW.

## Estructura

```text
tienda/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    └── logo.svg
```

## Características

- Catálogo de seis productos ficticios.
- Filtros por categoría.
- Búsqueda de productos.
- Carrito de demostración (no procesa pagos ni guarda pedidos).
- Diseño adaptable a móviles y escritorio.
- HTML, CSS y JavaScript sin dependencias de servidor.

## Probar localmente

Abre `index.html` en un navegador. Para que las fuentes externas se carguen, necesitarás conexión a Internet; la web también funciona sin ellas usando las fuentes alternativas del sistema.

## Despliegue en Ubuntu Server con Apache

Ejemplo suponiendo que el Virtual Host `tienda.local` utiliza `/var/www/tienda` como `DocumentRoot`.

```bash
sudo mkdir -p /var/www/tienda
sudo chown -R $USER:www-data /var/www/tienda
git clone https://github.com/USUARIO/REPOSITORIO.git /var/www/tienda
sudo find /var/www/tienda -type d -exec chmod 755 {} \;
sudo find /var/www/tienda -type f -exec chmod 644 {} \;
sudo apache2ctl configtest
sudo systemctl reload apache2
```

Sustituye `USUARIO/REPOSITORIO` por la dirección real de tu repositorio. Si `/var/www/tienda` ya contiene archivos, clona el repositorio en un directorio temporal o utiliza un directorio vacío.

## Actualizar la web

Después de subir cambios al repositorio remoto:

```bash
cd /var/www/tienda
git pull
```

`git clone` se utiliza para obtener una copia inicial del repositorio y `git pull` para integrar cambios remotos en una copia ya clonada.

## Importante

Esta tienda es una maqueta educativa. No incluye backend, autenticación, inventario real, pagos ni tratamiento de datos personales.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formProveedores');
    const tablaCuerpo = document.querySelector('#tablaProveedores tbody');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        
        if (validarFormulario()) {
            agregarProveedorATabla();
            form.reset(); 
            eliminarClasesValidacion();
        }
    });

    /**
     
     * @returns {boolean} 
     */
    function validarFormulario() {
        let esValido = true;

        
        const nombre = document.getElementById('nombreEmpresa');
        const errNombre = document.getElementById('errNombre');
        if (nombre.value.trim() === '') {
            mostrarError(nombre, errNombre, 'El nombre de la empresa es obligatorio.');
            esValido = false;
        } else if (nombre.value.trim().length < 3) {
            mostrarError(nombre, errNombre, 'Debe contener al menos 3 caracteres.');
            esValido = false;
        } else {
            mostrarExito(nombre, errNombre);
        }

     
        const nit = document.getElementById('nit');
        const errNit = document.getElementById('errNit');
        const regexNit = /^\d{9}-\d{1}$/; 
        if (!regexNit.test(nit.value.trim())) {
            mostrarError(nit, errNit, 'Ingrese un NIT válido con formato (9 dígitos, guion, 1 dígito).');
            esValido = false;
        } else {
            mostrarExito(nit, errNit);
        }

       
        const email = document.getElementById('email');
        const errEmail = document.getElementById('errEmail');
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email.value.trim())) {
            mostrarError(email, errEmail, 'Ingrese un formato de correo electrónico válido.');
            esValido = false;
        } else {
            mostrarExito(email, errEmail);
        }

        
        const tipo = document.getElementById('tipoProveedor');
        const errTipo = document.getElementById('errTipo');
        if (tipo.value === '') {
            mostrarError(tipo, errTipo, 'Debe seleccionar un tipo de proveedor de la lista.');
            esValido = false;
        } else {
            mostrarExito(tipo, errTipo);
        }

       
        const docPDF = document.getElementById('docPDF');
        const errPdf = document.getElementById('errPdf');
        if (docPDF.files.length === 0) {
            mostrarError(docPDF, errPdf, 'Debe adjuntar el documento obligatorio.');
            esValido = false;
        } else {
            const archivo = docPDF.files[0];
            if (archivo.type !== 'application/pdf') {
                mostrarError(docPDF, errPdf, 'Formato no permitido. Solo se aceptan archivos .pdf');
                esValido = false;
            } else {
                mostrarExito(docPDF, errPdf);
            }
        }

       
        const logo = document.getElementById('logoEmpresa');
        const errLogo = document.getElementById('errLogo');
        if (logo.files.length === 0) {
            mostrarError(logo, errLogo, 'Debe cargar el logotipo o fotografía de la empresa.');
            esValido = false;
        } else {
            const archivoLogo = logo.files[0];
            const extensionesValidas = ['image/jpeg', 'image/jpg', 'image/png'];
            if (!extensionesValidas.includes(archivoLogo.type)) {
                mostrarError(logo, errLogo, 'Formato inválido. Use únicamente JPG o PNG.');
                esValido = false;
            } else {
                mostrarExito(logo, errLogo);
            }
        }

       

        return esValido;
    }

    
    function mostrarError(elemento, contenedorErr, mensaje) {
        elemento.classList.remove('is-valid');
        elemento.classList.add('is-invalid');
        contenedorErr.textContent = mensaje;
    }

    
    function mostrarExito(elemento, contenedorErr) {
        elemento.classList.remove('is-invalid');
        elemento.classList.add('is-valid');
        contenedorErr.textContent = '';
    }

    
    function agregarProveedorATabla() {
        const nombre = document.getElementById('nombreEmpresa').value;
        const nit = document.getElementById('nit').value;
        const representante = document.getElementById('representante').value;
        const email = document.getElementById('email').value;
        const ciudad = document.getElementById('ciudad').value;
        const tipo = document.getElementById('tipoProveedor').value;
        const nombrePdf = document.getElementById('docPDF').files[0].name;
        const nombreLogo = document.getElementById('logoEmpresa').files[0].name;

        const nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `
            <td class="fw-bold">${nombre}</td>
            <td>${nit}</td>
            <td>${representante}</td>
            <td>${email}</td>
            <td>${ciudad}</td>
            <td><span class="badge bg-secondary">${tipo}</span></td>
            <td>
                <small class="d-block text-truncate" style="max-width: 180px;">📄 ${nombrePdf}</small>
                <small class="d-block text-truncate text-muted" style="max-width: 180px;">🖼️ ${nombreLogo}</small>
            </td>
        `;

        tablaCuerpo.appendChild(nuevaFila);
    }

    
    function eliminarClasesValidacion() {
        const elementos = form.querySelectorAll('.form-control, .form-select');
        elementos.forEach(el => {
            el.classList.remove('is-valid', 'is-invalid');
        });
    }
});
const msj = document.querySelector('.text_error');

function validatePhone(phone) {
    if ((/^\d{10}$/.test(phone))) {
        // msj.innerHTML ='';
        return true;
    }
    else {
        // msj.innerHTML ='Número de teléfono NO VÁLIDO';
        return false;
    }
}
function toggleButton() {
    const name = document.getElementById('txt_nombre').value;
    const email = document.getElementById('txt_correo').value;
    const phone = document.getElementById('txt_celular').value;
    // const phone = document.querySelector('#txt_celular').value;
    if (name && email && validatePhone(phone)) {
        document.getElementById('btn_send_contacto_desktop').disabled = false;
        document.getElementById('btn_send_contacto_mobile').disabled = false;
    } else {
        document.getElementById('btn_send_contacto_desktop').disabled = true;
        document.getElementById('btn_send_contacto_mobile').disabled = true;
    }
}
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
function validateEmail(mail) {
    if ((/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(mail))) {
        return true;
    }
    else {
        return false;
    }
}
function toggleButton() {
    const name = document.getElementById('txt_nombre').value;
    const email = document.getElementById('txt_correo').value;
    const phone = document.getElementById('txt_celular').value;
    // const phone = document.querySelector('#txt_celular').value;
    if (name && email && validatePhone(phone) && validateEmail(email)) {
        document.getElementById('btn_send_contacto_desktop').disabled = false;
        // document.getElementById('btn_send_contacto_mobile').disabled = false;
    } else {
        document.getElementById('btn_send_contacto_desktop').disabled = true;
        // document.getElementById('btn_send_contacto_mobile').disabled = true;
    }
}
const button = document.getElementById('btn_send_contacto_desktop');
console.log(button);
const modal = document.querySelector('.container-modal');
console.log(modal);
button.addEventListener('click', () => {
    modal.classList.add('modal--show')
});
modal.addEventListener('click', () => {
    document.getElementById('txt_nombre').value = '';
    document.getElementById('txt_correo').value = '';
    document.getElementById('txt_celular').value = '';
    document.getElementById('txt_comentarios').value = '';
    document.getElementById('btn_send_contacto_desktop').disabled = true;
    modal.classList.remove('modal--show')
}
);


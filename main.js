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
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if ((emailRegex.test(mail))) {
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
    if (name && validateEmail(email) && validatePhone(phone)) {
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

// document.getElementById('txt_correo').addEventListener('input', function(e) {
//     campo = e.target;
//     emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
//     if (emailRegex.test(campo.value)) {
//         // document.getElementById('btn_send_contacto_desktop').disabled = false;
//         return true;
//     } else {
//         document.getElementById('btn_send_contacto_desktop').disabled = true;
//     }
// });
// const prueba = document.getElementById('txt_celular').addEventListener('input', function(e) {
//     campo = e.target;
//     return (/^\d{10}$/.test(campo))
// });



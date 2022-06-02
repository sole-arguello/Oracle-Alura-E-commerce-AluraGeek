
//capturo el boton enviar y le envio la funcion 
const btnEnviar = document.querySelector('#btnEnviarLogin');
btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    loginUsuario();
});
//validacion de ususario y password
const loginUsuario = () =>{

    const correoIgresado = document.querySelector('[data-input-email]').value;
    const contraseniaIngresada = document.querySelector('[data-input-pass]').value;

    console.log(correoIgresado);
    console.log(contraseniaIngresada);
    
    const usuario = "adm@alura.com";
    const contrasenia = "alurageek1234";

    if( correoIgresado === usuario && contraseniaIngresada === contrasenia){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login Exitoso',
            showConfirmButton: false,
            timer: 1500
        })
      
        setTimeout(function(){
            window.location.href = "../screens/todos-productos-editables.html";
        }, 2000);
          
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...Datos incorrectos ',
            text: 'USUARIO: adm@alura.com - PASS: alurageek1234',
        });
    }
    correoIgresado.reset();
    contraseniaIngresada.reset();
}

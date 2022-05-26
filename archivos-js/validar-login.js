

const loginUsuario = () =>{

    const correoIgresado = document.querySelector('[]').value;
    const contraseniaIngresada = document.querySelector('[]').value;

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
        });
      
        setTimeout(function(){
            window.location.href = "../screens/todos-productos-editables.html";
        }, 2000);
          
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Datos incorrectos',
        });
    }
}
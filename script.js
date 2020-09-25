
		window.onload = function () {
			document.formularioContacto.nombre.focus();
			document.formularioContacto.addEventListener('submit', validarFormulario);
		}

		function validarFormulario(evObject) {
			evObject.preventDefault();
			var todoCorrecto = true;
			var formulario = document.formularioContacto;

				if (formulario[0].value.length > 15) {
					
					  alert('El nombre no puede superar los 15 caracteres')
					todoCorrecto=false
				}	
				if (formulario[1].value.length > 30) {
					alert('El apellido no puede ser mayor a 30 caracteres')
					todoCorrecto=false
				}

				if (formulario[2].value.length > 35) {
					alert('El correo no puede superar los 35 caracteres')
				}

				if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formulario[2].value) == false) {
					alert('Email invalido')
					todoCorrecto = false
				}


			for (var i=0; i<formulario.length; i++) {

				if(formulario[i].type =='text') {
				 	
				 	if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)){
					 		alert (formulario[i].name+ ' no puede estar vacío o contener sólo espacios en blanco');
					 	todoCorrecto=false;
					}

				}
			}




				if (todoCorrecto ==true) {
					alert('Seguro que quieres enviar este formulario?');
					formulario.submit();
				}
		}




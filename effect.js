$(window).load(function () {

	$('.loading').fadeOut('fast');

	$('.container').fadeIn('fast');

});


$('document').ready(function () {


	var vw;


	/* =====================================================
	   POSICIÓN DE LOS GLOBOS
	====================================================== */

	$(window).resize(function () {

		vw = $(window).width() / 2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();

		$('#b11').animate({
			top: 240,
			left: vw - 350
		}, 500);

		$('#b22').animate({
			top: 240,
			left: vw - 250
		}, 500);

		$('#b33').animate({
			top: 240,
			left: vw - 150
		}, 500);

		$('#b44').animate({
			top: 240,
			left: vw - 50
		}, 500);

		$('#b55').animate({
			top: 240,
			left: vw + 50
		}, 500);

		$('#b66').animate({
			top: 240,
			left: vw + 150
		}, 500);

		$('#b77').animate({
			top: 240,
			left: vw + 250
		}, 500);

		$('#b88').animate({
			top: 240,
			left: vw + 350
		}, 500);

	});


	/* =====================================================
	   ENCENDER LUCES
	====================================================== */

	$('#turn_on').click(function () {

		$('#bulb_yellow').addClass('bulb-glow-yellow');

		$('#bulb_red').addClass('bulb-glow-red');

		$('#bulb_blue').addClass('bulb-glow-blue');

		$('#bulb_green').addClass('bulb-glow-green');

		$('#bulb_pink').addClass('bulb-glow-pink');

		$('#bulb_orange').addClass('bulb-glow-orange');

		$('body').addClass('peach');


		$(this)
			.fadeOut('slow')
			.delay(5000)
			.promise()
			.done(function () {

				$('#play').fadeIn('slow');

			});

	});


	/* =====================================================
	   MÚSICA
	====================================================== */

	$('#play').click(function () {

		var audio = $('.song')[0];

		audio.play();


		$('#bulb_yellow')
			.addClass('bulb-glow-yellow-after');

		$('#bulb_red')
			.addClass('bulb-glow-red-after');

		$('#bulb_blue')
			.addClass('bulb-glow-blue-after');

		$('#bulb_green')
			.addClass('bulb-glow-green-after');

		$('#bulb_pink')
			.addClass('bulb-glow-pink-after');

		$('#bulb_orange')
			.addClass('bulb-glow-orange-after');


		$('body').css(
			'background-color',
			'#FFF'
		);


		$('body').addClass('peach-after');


		$(this)
			.fadeOut('slow')
			.delay(6000)
			.promise()
			.done(function () {

				$('#bannar_coming').fadeIn('slow');

			});

	});


	/* =====================================================
	   BANNER
	====================================================== */

	$('#bannar_coming').click(function () {

		$('.bannar').addClass('bannar-come');


		$(this)
			.fadeOut('slow')
			.delay(6000)
			.promise()
			.done(function () {

				$('#balloons_flying').fadeIn('slow');

			});

	});


	/* =====================================================
	   MOVIMIENTO GLOBO 1
	====================================================== */

	function loopOne() {

		var randleft = 1000 * Math.random();

		var randtop = 500 * Math.random();


		$('#b1').animate(
			{
				left: randleft,
				bottom: randtop
			},
			10000,
			function () {

				loopOne();

			}
		);

	}


	/* =====================================================
	   MOVIMIENTO GLOBO 2
	====================================================== */

	function loopTwo() {

		var randleft = 1000 * Math.random();

		var randtop = 500 * Math.random();


		$('#b2').animate(
			{
				left: randleft,
				bottom: randtop
			},
			10000,
			function () {

				loopTwo();

			}
		);

	}


	/* =====================================================
	   MOVIMIENTO GLOBO 3
	====================================================== */

	function loopThree() {

		var randleft = 1000 * Math.random();

		var randtop = 500 * Math.random();


		$('#b3').animate(
			{
				left: randleft,
				bottom: randtop
			},
			10000,
			function () {

				loopThree();

			}
		);

	}


	/* =====================================================
	   MOVIMIENTO GLOBO 4
	====================================================== */

	function loopFour() {

		var randleft = 1000 * Math.random();

		var randtop = 500 * Math.random();


		$('#b4').animate(
			{
				left: randleft,
				bottom: randtop
			},
			10000,
			function () {

				loopFour();

			}
		);

	}


	/* =====================================================
	   MOVIMIENTO GLOBO 5
	====================================================== */

	function loopFive() {

		var randleft = 1000 * Math.random();

		var randtop = 500 * Math.random();


		$('#b5').animate(
			{
				left: randleft,
				bottom: randtop
			},
			10000,
			function () {

				loopFive();

			}
		);

	}


	/* =====================================================
	   MOVIMIENTO GLOBO 6
	====================================================== */

	function loopSix() {

		var randleft = 1000 * Math.random();

		var randtop = 500 * Math.random();


		$('#b6').animate(
			{
				left: randleft,
				bottom: randtop
			},
			10000,
			function () {

				loopSix();

			}
		);

	}


	/* =====================================================
	   MOVIMIENTO GLOBO 7
	====================================================== */

	function loopSeven() {

		var randleft = 1000 * Math.random();

		var randtop = 500 * Math.random();


		$('#b7').animate(
			{
				left: randleft,
				bottom: randtop
			},
			10000,
			function () {

				loopSeven();

			}
		);

	}


	/* =====================================================
	   MOVIMIENTO GLOBO 8
	====================================================== */

	function loopEight() {

		var randleft = 1000 * Math.random();

		var randtop = 500 * Math.random();


		$('#b8').animate(
			{
				left: randleft,
				bottom: randtop
			},
			10000,
			function () {

				loopEight();

			}
		);

	}


	/* =====================================================
	   GLOBOS VOLANDO
	====================================================== */

	$('#balloons_flying').click(function () {

		$('.balloon-border').animate(
			{
				top: -500
			},
			8000
		);


		$('#b1,#b4,#b5,#b7')
			.addClass(
				'balloons-rotate-behaviour-one'
			);


		$('#b2,#b3,#b6,#b8')
			.addClass(
				'balloons-rotate-behaviour-two'
			);


		loopOne();

		loopTwo();

		loopThree();

		loopFour();

		loopFive();

		loopSix();

		loopSeven();

		loopEight();


		$(this)
			.fadeOut('slow')
			.delay(5000)
			.promise()
			.done(function () {

				$('#cake_fadein')
					.fadeIn('slow');

			});

	});


	/* =====================================================
	   MOSTRAR PASTEL
	====================================================== */

	$('#cake_fadein').click(function () {

		$('.cake').fadeIn('slow');


		$(this)
			.fadeOut('slow')
			.delay(3000)
			.promise()
			.done(function () {

				$('#light_candle')
					.fadeIn('slow');

			});

	});


	/* =====================================================
	   ENCENDER VELA
	====================================================== */

	$('#light_candle').click(function () {

		$('.fuego').fadeIn('slow');


		$(this)
			.fadeOut('slow')
			.promise()
			.done(function () {

				$('#wish_message')
					.fadeIn('slow');

			});

	});


	/* =====================================================
	   FELIZ CUMPLEAÑOS
	====================================================== */

	$('#wish_message').click(function () {

		vw = $(window).width() / 2;


		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8')
			.stop();


		$('#b1').attr('id', 'b11');

		$('#b2').attr('id', 'b22');

		$('#b3').attr('id', 'b33');

		$('#b4').attr('id', 'b44');

		$('#b5').attr('id', 'b55');

		$('#b6').attr('id', 'b66');

		$('#b7').attr('id', 'b77');

		$('#b8').attr('id', 'b88');


		$('#b11').animate({
			top: 240,
			left: vw - 350
		}, 500);


		$('#b22').animate({
			top: 240,
			left: vw - 250
		}, 500);


		$('#b33').animate({
			top: 240,
			left: vw - 150
		}, 500);


		$('#b44').animate({
			top: 240,
			left: vw - 50
		}, 500);


		$('#b55').animate({
			top: 240,
			left: vw + 50
		}, 500);


		$('#b66').animate({
			top: 240,
			left: vw + 150
		}, 500);


		$('#b77').animate({
			top: 240,
			left: vw + 250
		}, 500);


		$('#b88').animate({
			top: 240,
			left: vw + 350
		}, 500);


		$('.balloons')
			.css(
				'opacity',
				'0.9'
			);


		$('.balloons h2')
			.fadeIn(3000);


		$(this)
			.fadeOut('slow')
			.delay(3000)
			.promise()
			.done(function () {

				$('#story')
					.fadeIn('slow');

			});

	});


	/* =====================================================
   MENSAJE + FOTOS SINCRONIZADAS
====================================================== */

	$('#story').click(function () {

		$(this).fadeOut('slow');

		$('.cake')
			.fadeOut('fast')
			.promise()
			.done(function () {

				$('.message').fadeIn('slow');

				/* ==========================================
				   FOTOS
				=========================================== */

				var fotos = [
					'imagenes/zuri.jpeg',
					'imagenes/zuri2.jpeg',
					'imagenes/zuri3.jpeg',
					'imagenes/zuri4.jpeg',
					'imagenes/zuri5.jpeg',
					'imagenes/zuri6.jpeg',
					'imagenes/zuri7.jpeg',
					'imagenes/zuri8.jpeg',
					'imagenes/zuri9.jpeg',
					'imagenes/zuri10.jpeg',
					'imagenes/zuri11.jpeg',
					'imagenes/zuri12.jpeg',
					'imagenes/zuri13.jpeg',
					'imagenes/zuri14.jpeg',
					'imagenes/zuri15.jpeg',
					'imagenes/zuri16.jpeg',
					'imagenes/zuri17.jpeg',
					'imagenes/zuri18.jpeg',
					'imagenes/zuri19.jpeg',
					'imagenes/zuri20.jpeg',
					'imagenes/zuri21.jpeg',
					'imagenes/zuri22.jpeg',
					'imagenes/zuri23.jpeg',
					'imagenes/zuri24.jpeg',
					'imagenes/zuri25.jpeg',
					'imagenes/zuri26.jpg'
				];

				/* ==========================================
				   MENSAJES
				=========================================== */

				var mensajes = $('.texto-mensaje p');

				var foto = $('#fotoMensaje');

				var i = 0;

				/* ==========================================
				   PRE-CARGAR LAS IMÁGENES
				=========================================== */

				fotos.forEach(function (ruta) {

					var imagen = new Image();

					imagen.src = ruta;

				});

				/* ==========================================
				   MOSTRAR MENSAJE Y FOTO
				=========================================== */

				function mostrarMensaje() {

					if (i >= mensajes.length || i >= fotos.length) {

						foto.removeClass('mostrar');

						foto.hide();

						$('.cake').fadeIn('fast');

						return;
					}

					/* Ocultar todos los mensajes */

					mensajes.hide();

					/* Mostrar el mensaje correspondiente */

					$(mensajes[i]).show();

					/* Cambiar la imagen */

					foto.attr('src', fotos[i]);

					/* Mostrar la imagen */

					foto.show();

					foto.addClass('mostrar');

					/* ======================================
					   ESPERAR EXACTAMENTE 2 SEGUNDOS
					====================================== */

					setTimeout(function () {

						/* Ocultar imagen */

						foto.removeClass('mostrar');

						/* Ocultar mensaje */

						$(mensajes[i]).hide();

						/* Siguiente */

						i++;

						mostrarMensaje();

					}, 2000);

				}

				/* ==========================================
				   COMENZAR
				=========================================== */

				mostrarMensaje();

			});

	});


});
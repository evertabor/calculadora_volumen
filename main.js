$(document).ready(function () {
  $("#calV2").click(function (e) {
    e.preventDefault();
    $("#bie").css("display", "none");
    $("#contenidoV2").fadeIn();
    $("#contenidoV1").fadeOut();
    $("#contenidoC1").fadeOut();
    $("#contenidoC2").fadeOut();
    //Andiendo y quitando clases
    $(this).addClass('activo');
    $("#calC1").removeClass('activo')
    $("#calC2").removeClass('activo')
    $("#calV1").removeClass('activo')
  });
  $("#calV1").click(function (e) {
    e.preventDefault();
    $("#bie").css("display", "none");
    $("#contenidoV1").fadeIn();
    $("#contenidoV2").fadeOut();
    $("#contenidoC1").fadeOut();
    $("#contenidoC2").fadeOut();

    //Anadiendo clases
    $(this).addClass('activo');
    $("#calV2").removeClass('activo')
    $("#calC1").removeClass('activo')
    $("#calC2").removeClass('activo')
  });
  $("#calC1").click(function (e) {
    e.preventDefault();
    $("#bie").css("display", "none");
    $("#contenidoV1").fadeOut();
    $("#contenidoV2").fadeOut();
    $("#contenidoC1").fadeIn();
    $("#contenidoC2").fadeOut();

     //Anadiendo clases
    $(this).addClass('activo');
    $("#calV2").removeClass('activo')
    $("#calC2").removeClass('activo')
    $("#calV1").removeClass('activo')
  });
  $("#calC2").click(function (e) {
    e.preventDefault();
    $("#bie").css("display", "none");
    $("#contenidoV1").fadeOut();
    $("#contenidoV2").fadeOut();
    $("#contenidoC1").fadeOut();
    $("#contenidoC2").fadeIn();
    
     //Anadiendo clases
    $(this).addClass('activo');
    $("#calV2").removeClass('activo')
    $("#calC1").removeClass('activo')
    $("#calV1").removeClass('activo')
  });
  function varificarCamposC1() {
    if (
      $(".v2Calc1").val() == "" ||
      $(".v1Calc1").val() == "" ||
      $(".c2Calc1").val() == ""
    ) {
      alert("Debe llenar todos los campos");
      return false;
    } else {
      return true;
    }
  }
  function varificarCamposC2() {
    if (
      $(".v2Calc2").val() == "" ||
      $(".v1Calc2").val() == "" ||
      $(".c1Calc2").val() == ""
    ) {
      alert("Debe llenar todos los campos");
      return false;
    } else {
      return true;
    }
  }


  function varificarCamposV2() {
    if (
      $(".c1Calv2").val() == "" ||
      $(".v1Calv2").val() == "" ||
      $(".c2Calv2").val() == ""
    ) {
      alert("Debe llenar todos los campos");
      return false;
    } else {
      return true;
    }
  }
  function varificarCamposV1() {
    if (
      $(".c1Calv1").val() == "" ||
      $(".v2Calv1").val() == "" ||
      $(".c2Calv1").val() == ""
    ) {
      alert("Debe llenar todos los campos");
      return false;
    } else {
      return true;
    }
  }
  $(".calC1").click(function (e) {
    e.preventDefault();
    let validar = varificarCamposC1();

    if (validar) {
      var v1 = parseInt($(".v1Calc1").val());
      var v2 = parseInt($(".v2Calc1").val());
      var c2 = parseInt($(".c2Calc1").val());
      var resultado = (c2 * v2) / v1;
      $(".rtCalc1").val(resultado);
    }
  });
  $(".calC2").click(function (e) {
    e.preventDefault();
    let validar = varificarCamposC2();

    if (validar) {
      var v1 = parseInt($(".v1Calc2").val());
      var v2 = parseInt($(".v2Calc2").val());
      var c1 = parseInt($(".c1Calc2").val());
      var resultado = (c1 * v1) / v2;
      $(".rtCalc2").val(resultado);
    }
  });


  $(".calV1").click(function (e) {
    e.preventDefault();
    let validar = varificarCamposV1();

    if (validar) {
      var c1 = parseInt($(".c1Calv1").val());
      var v2 = parseInt($(".v2Calv1").val());
      var c2 = parseInt($(".c2Calv1").val());
      var resultado = (c2 * v2) / c1;
      $(".rtCalv1").val(resultado);
    }
  });

  $(".calV2").click(function (e) {
    e.preventDefault();
    let validar = varificarCamposV2();

    if (validar) {
      var c1 = parseInt($(".c1Calv2").val());
      var v1 = parseInt($(".v1Calv2").val());
      var c2 = parseInt($(".c2Calv2").val());
      var resultado = (c1 * v1) / c2;
      $(".rtCalv2").val(resultado);
    }
  });

  $(".limpiarRv2").click(function (e) {
    $(".v1Calv2").val("");
    $(".c2Calv2").val("");
    $(".c1Calv2").val("");
    $(".rtCalv2").val("");
  });

  $(".limpiarRc1").click(function (e) {
    $(".c2Calc1").val("");
    $(".rtCalc1").val("");
    $(".v1Calc1").val("");
    $(".v2Calc1").val("");
  });
  $(".limpiarRc2").click(function (e) {
    $(".c1Calc2").val("");
    $(".rtCalc2").val("");
    $(".v1Calc2").val("");
    $(".v2Calc2").val("");
  });
  $(".limpiarRv1").click(function (e) {
    $(".v2Calv1").val("");
    $(".c2Calv1").val("");
    $(".c1Calv1").val("");
    $(".rtCalv1").val("");
  });
});

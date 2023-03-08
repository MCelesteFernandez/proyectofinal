
let formaciones=[
    {
        titulo:"Bachiller en Ciencias Naturales",
        estado:"Finalizado",
        institucion:"Escuela Normal Tte. Gral. Julio A. Roca",
        lugar:"Monteros, Tucumán, Argentina"
    },
    {
        titulo:"Profesorado de Lengua y Literatura",
        estado:"En Curso",
        institucion:"CEDSa",
        lugar:"Monteros, Tucumán, Argentina"
    },
    {
        titulo:"Farmacia",
        estado:"En Curso",
        institucion:"FBQF - UNT",
        lugar:"San Miguel de Tucumán, Tucumán, Argentina"
    }
]

let experiencias=[
    {
        titulo:"Auxiliar Docente Cátedra Matemática 2",
        empresa:"FBQF - UNT",
        inicio:2022,
        fin:"En Curso"
    },
    {
        titulo:"Atención al cliente",
        empresa:"Vivero San Antonio",
        inicio:2015,
        fin:2022
    },
    {
        titulo:"Venta de Artículos Electónicos",
        empresa:"Emprendimiento propio",
        inicio:2018,
        fin:2020
    }
]
function renderFormacion(){
    let articuloContenedor=document.getElementById('formacion');

    for (let item of formaciones){
        let itemFormacion=document.createElement('div');
        itemFormacion.setAttribute('name',item.titulo);
        itemFormacion.innerHTML='<h3>'+item.titulo+'</h3>'+
                                '<p class="subP">'+item.estado+'</p>'+
                                '<p class="subP">'+item.institucion+'</p>'+
                                '<p class="subP">'+item.lugar+'</p>'
        articuloContenedor.appendChild(itemFormacion);
    }
}

function renderExperiencia(){

    let articuloExperiencia=document.getElementById('experiencia');
    for (let exp of experiencias){

        let itemExperiencia=document.createElement('div');
        itemExperiencia.setAttribute('name',exp.titulo);
        itemExperiencia.innerHTML='<h3>'+exp.titulo+'</h3>'+
                                  '<p class="subP">'+exp.empresa+'</p>'+
                                  '<p class="subP">'+exp.inicio+' - '+exp.fin+'</p>'                                  
        articuloExperiencia.appendChild(itemExperiencia);
    }
}


/*

                            <h2>Formación</h2>
                            <h3>Bachiller en Ciencias Naturales - (Finalizado)</h3>
                            <p>Escuela Normal Tte.Gral. Julio A. Roca, Monteros</p>
                            <h3>Farmacéutico (En curso) </h3>
                            <p>Facultad de Bioquímica, Química y Farmacia, San Miguel de Tucumán</p>
                            <h3>Profesorado de Lengua y Literatura - (En curso)</h3>
                            <p>Cedsa (Centro de estudios a distancia Salta), Salta /
                                Los primeros años en esta carrera me permitieron el abordaje de algunas materias 
                                pedagógicas con la finalidad de facilitar un vínculo para comprender el proceso de enseñanza
                                -aprendizaje.
                            </p>

*/
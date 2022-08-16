const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

fetch(url)
.then(response => response.json())
.then(data => {

    const contenedor = document.getElementById("contenedor")

        contenedor.innerHTML = `
            <div class="tarjetas">
                <h1>${data[0].casa.nombre}</h1>
                <p> Compra: $${data[0].casa.compra}</p>
                <p> Venta: $${data[0].casa.venta}</p>
                <p> Variacion: $${data[0].casa.variacion}</p>
            </div>

            <div class="tarjetas">
                <h1>${data[1].casa.nombre}</h1>
                <p> Compra: $${data[1].casa.compra}</p>
                <p> Venta: $${data[1].casa.venta}</p>
                <p> Variacion: $${data[1].casa.variacion}</p>
            </div>

            <div class="tarjetas">
                <h1>${data[2].casa.nombre}</h1>
                <p> Compra: $${data[2].casa.compra}</p>
                <p> Venta: $${data[2].casa.venta}</p>
                <p> Variacion: $${data[2].casa.variacion}</p>
            </div>

            <div class="tarjetas">
                <h1>${data[3].casa.nombre}</h1>
                <p> Compra: $${data[3].casa.compra}</p>
                <p> Venta: $${data[3].casa.venta}</p>
                <p> Variacion: $${data[3].casa.variacion}</p>
            </div>

            <div class="tarjetas">
                <h1>${data[4].casa.nombre}</h1>
                <p> Compra: $${data[4].casa.compra}</p>
                <p> Venta: $${data[4].casa.venta}</p>
                <p> Variacion: $${data[4].casa.variacion}</p>
            </div>

            <div class="tarjetas">
                <h1>${data[5].casa.nombre}</h1>
                <p> Compra: $${data[5].casa.compra}</p>
                <p> Venta: $${data[5].casa.venta}</p>
                <p> Variacion: $${data[5].casa.variacion}</p>
            </div>

            <div class="tarjetas">
                <h1>${data[6].casa.nombre}</h1>
                <p> Compra: $${data[6].casa.compra}</p>
                <p> Venta: $${data[6].casa.venta}</p>
                <p> Variacion: $${data[6].casa.variacion}</p>
            </div>

            `

    console.log(data)
})



/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const baseUrl = "https://platzi-avo.vercel.app"
const appNode = document.querySelector('#app')

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat(
        'en-En',
        {
            style: 'currency',
            currency: 'USD',
        }
    ).format(price)
    return newPrice
}

window
    .fetch(baseUrl + '/api/avo')
    .then(respuesta => respuesta.json())
    .then(responseJson => {
        const todosLosItems = []
        responseJson.data.forEach(item => {

            const imagen = document.createElement('img')
            imagen.src = baseUrl + item.image

            const title = document.createElement('h2')
            title.textContent = item.name
            title.className = "text-2xl font-semibold"

            const price = document.createElement('div')
            price.className = "text-indigo-600 font-semibold"
            price.textContent = formatPrice(item.price)

            const container = document.createElement('div')
            container.className = "bg-sky-300 m-2"
            container.append(imagen, title, price)

            todosLosItems.push(container)

        });
        appNode.className = "grid gap-4 grid-cols-3 m-1 bg-emerald-100"
        appNode.append(...todosLosItems)
    })

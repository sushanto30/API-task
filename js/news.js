const btnDiv = document.getElementById('btn-task');



const loadCategorie = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`)
    const result = await res.json()
    // console.log(result.data.news_category)
    const mans = result.data.news_category
    mans.forEach(element => {
        
        const btnCatagori = document.createElement("button")

        btnCatagori.innerHTML = ` <button onclick="loadNews('${element.category_id}')" class="btn btn-primary">${element.category_name}</button>`
        btnDiv.appendChild(btnCatagori)


    });
}

const loadNews = async (items) => {
   
    const loadingBar = document.getElementById('loading-bar')
    loadingBar.classList.remove('hidden')

    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${items}`)
    const result = await res.json()
    // console.log(result.data)
    const newsDivCreat = document.getElementById('news-portal-re')
    newsDivCreat.innerText = ''
    result.data.forEach(item => {
        console.log(item)
        const divNewsPortal = document.createElement('div')
        divNewsPortal.classList.add('mt-5')
        divNewsPortal.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl">
            <figure><img class="w-64 h-72" src="${item.image_url}" alt="Movie" />
            </figure>
            <div class="card-body">
                <h2 class="card-title"> ${item.title}</h2>
                <p> ${item.details.slice(0, 200)}</p>
                <div class="card-actions justify-between">
                    <div class="flex flex-row gap-x-4">
                        <div class="avatar online placeholder">
                            <div class="bg-neutral text-neutral-content rounded-full w-16">
                                <img src="${item.author.img}" alt="">
                            </div>
                        </div>
                       <div>
                        <p>${item.author.name}</p>
                        <p> ${item.author.published_date}</p>
                       </div>
                       <div class="ml-20">
                        <p>${item.total_view}</p>
                       </div>
                    </div>
                    <button class="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
        `
        newsDivCreat.appendChild(divNewsPortal)
        loadingBar.classList.add('hidden')

    })
}





loadCategorie()

loadNews("01")



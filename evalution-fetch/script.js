let cont = document.getElementById("root")
let tbody = document.getElementById("tbody")
let Bprev = document.getElementById("prev")
let Bnext = document.getElementById("next")
let dept = document.getElementById("dept")
let gender = document.getElementById("gen")
let price = document.getElementById("price")

async function fetchData(link){
    try {
        let res = await fetch(link)
        let data = await res.json()
        console.log(data.data)
        let Details = data.data
        showData(Details)
    } catch (error) {
        console.log(error)
    }
}

function showData(data){
    tbody.innerHTML=""
    data.forEach((ele,i)=>{


            let trow = document.createElement("tr")

            let tdata1 = document.createElement("td")
            tdata1.innerHTML=i+1

            let tdata2 = document.createElement("td")
            tdata2.innerHTML=ele.name

            let tdata3 = document.createElement("td")
            tdata3.innerHTML=ele.gender

            let tdata4 = document.createElement("td")
            tdata4.innerHTML=ele.department

            let tdata5 = document.createElement("td")
            tdata5.innerHTML=ele.salary

            trow.append(tdata1, tdata2, tdata3, tdata4, tdata5)
            tbody.append(trow)

      
    })
}



var pageCnt = 1;
function prev(){
    pageCnt -=1

    if (pageCnt >0){
        Bprev.disabled=false
        Bnext.disabled=false
    }else{
        Bprev.disabled=true
    }
    if (pageCnt<=1){
        let pageCnt = 1
        let link = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pageCnt}&limit=10`
        fetchData(link)
    }
}

function next(){
    pageCnt +=1

    if (pageCnt <=9){
        Bprev.disabled=false
        Bnext.disabled=false
    }else{
        Bnext.disabled=true
    }
    if (pageCnt<=10){
        let link = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pageCnt}&limit=10`
        fetchData(link)
    }
}



dept.addEventListener("change", function(e){
    let value = e.target.value
    let link = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=department&filterValue=${value}`
    fetchData(link)
})


gender.addEventListener("change", function (e){
    let value = e.target.value
    let link = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=gender&filterValue=${value}`
    fetchData(link)
})

price.addEventListener("change", function (e){
    let value = e.target.value
    let link = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=gender&filterValue=female&sort=salary&order=${value}`
    fetchData(link)
})

fetchData("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10")




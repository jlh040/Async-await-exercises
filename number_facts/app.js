const baseURL = 'http://numbersapi.com'

async function makeRequest() {
    let resp = await axios.get(`${baseURL}/1..26?json`)
    return resp.data
}

function createLi(fact) {
    return $(`
    <li class="list-group-item list-group-item-warning">
        ${fact}
    </li>`)
}

async function putFactsOnPage(dataObj) {
    let data = await dataObj;

    for (let num in data) {
        $('.list-group').append(createLi(data[num]))
    }
}

putFactsOnPage(makeRequest())

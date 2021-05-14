const baseURL = 'http://numbersapi.com'

async function makeRequest() {
    let resp = await axios.get(`${baseURL}/1?json`)
    return resp.data
}

function createLi(fact) {
    return $(`
    <li class="list-group-item list-group-item-warning">
        ${fact}
    </li>`)
}

async function putFactsOnPage(numObj) {
    let data = await numObj;

    $('.list-group').append(createLi(data['text']))
}

function makeFourCalls() {
    for (let i = 0; i < 4; i++) {
        putFactsOnPage(makeRequest());
    }
}

makeFourCalls();

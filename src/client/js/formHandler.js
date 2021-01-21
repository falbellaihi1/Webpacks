import {isValiInput} from "./validateForm";

function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText);
    console.log("::: Form Submitted :::");
    if (isValiInput(formText)) {
        postData('/add', {"formText": formText});
    }

}

const updateUI = async () => {
    const request = await fetch('http://localhost:8081/results')
    try {
        const data = await request.json()
        console.log('data agg --> ', data.results.agreement);
        console.log('data conf --> ', data.results.confidence);
        console.log('data score --> ', data.results.score_tag);
        console.log('data score --> ', data.results.irony);
        console.log('data score --> ', data.results.subjectivity);
        const results = document.getElementById('results');
        let resultsJson = data.results
        let resultArray = [`Subjectivity:${resultsJson.subjectivity}`,`Irony: ${resultsJson.irony}`, `Score Tag: ${resultsJson.score_tag}`, `Confidence :  ${resultsJson.confidence}`, `Agreement ${resultsJson.agreement}`]
        let ul = document.createElement('ul')
        results.appendChild(ul);


        for(let i = 0; i <resultArray.length; i++){
            let li = document.createElement('li');
            li.innerHTML = resultArray[i];
           ul.appendChild(li);
        }



    } catch (e) {
        console.log(e);

    }

}
const postData = async (url = '', data = {}) => {

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        await response.json();
        updateUI();

    } catch (error) {
        console.log("error", error);
    }
};
export {handleSubmit}

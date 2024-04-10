const form = document.querySelector("form");
// const btn = document.querySelector("#btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const result = document.querySelector("#results");

    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `invalid height`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `invalid weight`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // show result
        
        if (bmi < 18.6) {
            result.innerHTML = `Under weight : <span>${bmi}</span>`;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `Normal : <span>${bmi}</span>`;
        } else {
            result.innerHTML = `Over weight : <span>${bmi}</span>`;
        }
    }
})


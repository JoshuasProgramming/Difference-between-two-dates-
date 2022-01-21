//Grabbing the elements
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const container_ = document.getElementById('container_');
const output = document.getElementById('output');
const submit = document.getElementById('submit').addEventListener("click", (e)=>{
    output.innerText = "";

    let start = new Date(startDate.value);
    let end = new Date (endDate.value);

    let diff = ((end-start) / (1000 * 3600 * 24));

    //create output element
    if(diff == 1){
        output.innerText = "Result: " + diff + " day";
        container_.append(output);
        document.body.append(container_);
    } else {
        output.innerText = "Result: " + diff + " days";
        container_.append(output);
        document.body.append(container_);
    }
})




import {getDataFromFile} from './file-parser'



document.getElementById('cli').onclick = ({ targt }) => {

    let url = document.getElementById('url').value;
    getDataFromFile(url).then((data) => {
        console.log(data);
    }, errHandle); // Hello, world!
};

let errHandle = (err) => console.log(err);








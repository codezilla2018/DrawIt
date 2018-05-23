import {csv, tsv, json} from 'd3-fetch';

////////////////////////////////////////////////////
/**
 * getDataFromFile 
 * find the matching function to read data from file
 * @param  string   filepath   Path to file on hard drive
 * @return promise       
 */
export function getDataFromFile(filename){
    let ext = getFileExtension(filename);
    let resp  = new Object();
    switch (ext){
        case "csv": {
            resp  = csv(filename, (data)=>{
                data["count"] = +data["count"];
                return data;
            });
            break;
        }
        case "tsv": {
            resp = tsv(filename, (data)=>{
                data["count"] = +data["count"];
                return data;
            });
            break;
        }
        case "json": {
            resp = json(filename);
            break;
        }
        default: {
            resp =  new Promise((resolve, reject) => { 
                reject({msg: "incompatible file type"});
            
            });
        }
       
    }
    return resp;
}
////////////////////////////////////////////////////

////////////////////////////////////////////////////
/**
 * getFileExtension 
 * extract the file extension from given filename
 * @param  string   filepath   Path to file on hard drive
 * @return string              String with file extension
 */
function getFileExtension(filename){
    let ext = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
    return ext ? ext: "";
}
////////////////////////////////////////////////////

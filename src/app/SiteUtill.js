export function DevAlertPopUp(values){
    return process.env.NODE_ENV==='development'?alert(JSON.stringify(values, null, 2)):"";
}

export function DevConsoleLog(key,value){
    return process.env.NODE_ENV==='development'?console.log(key,value):"";
}

export function shortName(name){
    let sh_name=name?name.substr(0, 1).toUpperCase():"";
    return sh_name;
}
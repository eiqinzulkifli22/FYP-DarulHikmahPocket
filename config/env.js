const environment = {
    LARAVEL_HOST: 'http://172.20.10.14:8000', // Nasn's
    //LARAVEL_HOST: 'http://172.20.10.3:8000', //Eiqin's
    //LARAVEL_HOST: 'http://192.168.1.3:8000',//Eiqin's house
};

export function env(key) {
    return environment[key];  
}

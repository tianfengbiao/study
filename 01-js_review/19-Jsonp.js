

// jsonp
const jsonp = ({url, params, callbakcName}) => {
    const getUrl = () => {
        const paramUrl = '';
        for(let key in params) {
            if(params.hasOwnProperty(params[key])) {
                paramUrl += `${key}=${params[key]}&`
            }
        }
        paramUrl = paramUrl + `callback=${callbakcName}`
        return `${url}?${paramUrl}`;
    }

    return new Promise((resolve) => {
        const srcE = document.createElement('script');
        srcE.src = getUrl();
        document.body.appendChild(srcE);
        window[callbakcName] = function(data) {
            resolve(data);
            document.removeChild(srcE);
        }
    })
}

// ajax

const getJson = (url, method, params) => {
    const body = new FormData();
    for(let key in params) {
        body.append(key, params[key])
    }
    
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, false);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.timeout = 3600;
        xhr.send(body);

        xhr.onreadystatechange = function() {
            if(xhr.readyState !== 4) {
                return;
            }
            if(xhr.status === 200 || xhr.status === 304) {
                resolve(xhr.responseText);
            } else {
                reject(new Error(xhr.responseText));
            }
        }
        xhr.onerror = function(err) {
            reject(err)
        }
    })
}

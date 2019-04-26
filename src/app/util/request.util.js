/**
 * get请求
 * @param url
 * @param params
 */
const get = (url, params) => {
    // 当参数为空的时候就过滤掉，不传递给接口
    const urlParams = [];
    if (params) {
        for (const field of Object.keys(params)) {
            if (params[field] === '' || params[field] === null) {
                delete params[field];
            } else {
                urlParams.push(field + '=' + params[field]);
            }
        }
    }

    // 添加urlParams
    if (urlParams.length) {
        url = url + '?' + urlParams.join('&');
    }

    return requestMethod(url, 'get');
};

/**
 * post请求
 * @param url
 * @param params
 */
const post = (url, params) => requestMethod(url, 'post', params);

/**
 * 处理请求实体
 * @param url
 * @param method
 * @param params
 * @returns {Promise<any>}
 */
const requestMethod = (url, method, params) => {
    // 当参数为空的时候就过滤掉，不传递给接口
    if (params) {
        for (const field of Object.keys(params)) {
            if (params[field] === '' || params[field] === null) {
                delete params[field];
            }
        }
    }

    let isOk;
    return new Promise((resolve, reject) => {
        fetch(url, {
            method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(params)
        })
            .then((response) => {
                // TODO 根据后端rest-api可扩展共通处理
                isOk = !!response.ok;
                return response.json();
            })
            .then((responseData) => {
                // TODO 根据后端rest-api可扩展共通处理
                if (isOk) {
                    resolve(responseData);
                } else {
                    reject(responseData);
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
};

// 导出
const requestUtil = {
    get,
    post,
};

export default requestUtil;

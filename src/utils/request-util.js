/**
 *
 * Copyright 2015-present reading
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

const get = (url, params) => requestMethod(url, 'get', params);

const post = (url, params) => requestMethod(url, 'post', params);

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
                if (response.ok) {
                    isOk = true;
                } else {
                    isOk = false;
                }
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

const requestUtil = {
    get,
    post,
};

export default requestUtil;

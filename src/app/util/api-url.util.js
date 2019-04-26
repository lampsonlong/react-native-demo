import {environment} from '../../environment/environment';

const BASE_API_URL = environment.config.apiUrl;
const REST_API = {
    authentication: {
        login: {
            url: '/spot/user/dictionary/marketList',
            params: {
                username: '用户名',
                password: '密码',
            }
        }
    }
};

for (const i of Object.keys(REST_API)) {
    for (const j of Object.keys(REST_API[i])) {
        REST_API[i][j].url = BASE_API_URL + REST_API[i][j].url;
    }
}

export default REST_API;

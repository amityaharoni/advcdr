import { API_ACTION, API_METHOD_GET } from './constants'
import _ from 'lodash'
import axios from 'axios'

const apiMiddleware = store => next => action => {
    if (action.type === API_ACTION) {
        const { method = API_METHOD_GET, url, data, params, onSuccess = _.noop, onError = _.noop } = action.payload;

        axios({
            method,
            url,
            data,
            params
        }).then(onSuccess).catch(onError);
    }
    else {
        next(action);
    }
};

export default apiMiddleware;
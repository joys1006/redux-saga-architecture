// Project Sources
import _axios from 'services/Axios/InitializedAxios';


const UserService = {
    postLoginInfo (payload) {
        /**
         * @author Has
         * @reg_date 2018-11-06
         * @description 로그인
         */
        return _axios.post('/login',payload);
    },
};

export default UserService;
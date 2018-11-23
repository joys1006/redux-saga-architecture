// Project Sources
import _axios from '../Axios/InitializedAxios';


const SampleService = {
    SampleTableData (params) {
        return _axios.get(`?results=${params.results}&page=${params.page}&sortField=${params.sortField}&sortOrder=${params.sortOrder}`);
    },
};

export default SampleService;
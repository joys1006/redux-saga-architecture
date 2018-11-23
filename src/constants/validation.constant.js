export const VALIDATION = {
    uid: {
        pattern: /^[a-z0-9_]{4,16}$/,
        regexes: [
            {
                rule: /^[a-z0-9_]{4,16}$/,
                message: '영문소문, 숫자를 포함하여 4~16자리로 입력해주세요.',
            }
        ],
        required: {
            message: '아이디를 입력해주세요.',
        },
    },
    upw: {
        // eslint-disable-next-line no-useless-escape
        pattern: /^.*(?=^.{8,}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[#\&\\+\-%@=\/\\\:;,\.\'\"\^`~\_|\!\/\?\*$#<>()\[\]\{\}])(?!([a-zA-Z0-9#\&\\+\-%@=\/\\\:;,\.\'\"\^`~\_|\!\/\?\*$#<>()\[\]\{\}])\1{2,}).*$/,
        regexes: [
            {
                // eslint-disable-next-line no-useless-escape
                rule: /^.*(?=^.{8,}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[#\&\\+\-%@=\/\\\:;,\.\'\"\^`~\_|\!\/\?\*$#<>()\[\]\{\}]).*$/,
                message: '영문, 숫자, 특수문자를 포함한 8자~50자 이하로 입력해주세요.',
            },
            {
                // eslint-disable-next-line no-useless-escape
                rule: /^(?!([a-zA-Z0-9#\&\\+\-%@=\/\\\:;,\.\'\"\^`~\_|\!\/\?\*$#<>()\[\]\{\}])\1{2,})/,
                message: '동일한 문자가 3개이상 포함된 비밀번호로 변경 할수 없습니다.',
            }
        ],
        required: {
            message: '비밀번호를 입력해주세요.',
        },
    },
    upw_confirmation: {
        // eslint-disable-next-line no-useless-escape
        pattern: /^.*(?=^.{8,}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[#\&\\+\-%@=\/\\\:;,\.\'\"\^`~\_|\!\/\?\*$#<>()\[\]\{\}])(?!([a-zA-Z0-9#\&\\+\-%@=\/\\\:;,\.\'\"\^`~\_|\!\/\?\*$#<>()\[\]\{\}])\1{2,}).*$/,
        regexes: [
            {
                // eslint-disable-next-line no-useless-escape
                rule: /^.*(?=^.{8,}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[#\&\\+\-%@=\/\\\:;,\.\'\"\^`~\_|\!\/\?\*$#<>()\[\]\{\}]).*$/,
                message: '영문, 숫자, 특수문자를 포함한 8자~50자 이하로 입력해주세요.',
            },
            {
                // eslint-disable-next-line no-useless-escape
                rule: /^(?!([a-zA-Z0-9#\&\\+\-%@=\/\\\:;,\.\'\"\^`~\_|\!\/\?\*$#<>()\[\]\{\}])\1{2,})/,
                message: '동일한 문자가 3개이상 포함된 비밀번호로 변경 할수 없습니다.',
            }
        ],
        required: {
            message: '비밀번호 확인을 입력해 주세요',
        },
        confirmed: {
            message: '비밀번호가 불일치합니다.',
        },
    },
    uname: {
        pattern: /^[가-힣\s]{2,4}$/,
        regexes: [
            {
                rule: /^[가-힣\s]{2,4}$/,
                message: '성함은 한글로 2자 이상 4자 이하로 입력해주세요.',
            }
        ],
        required: {
            message: '사장님 성함을 입력해 주세요.',
        },
    },
    phone_number: {
        pattern: /^[0-9]{10,11}$/,
        regexes: [
            {
                rule: /^[0-9]{10,11}$/,
                message: '휴대폰 번호 형식에 맞게 입력해 주세요.',
            }
        ],
        required: {
            message: '휴대폰 번호를 입력해 주세요.',
        },
    },
    authenticationNumber: {
        pattern: /^[0-9]*$/,
        regexes: [
            {
                rule: /^[0-9]*$/,
                message: '숫자를 입력해주세요.',
            }
        ],
        required: {
            message: '인증 번호를 입력해 주세요.',
        },
    },
};

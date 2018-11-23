// App Pages
import * as AppPages from 'pages/index.async';

export const routeConfig = [
    {
        name: '홈',
        path: '/',
        type: 'home',
        component: AppPages.Home,
        menu: true,
        requireAuth: true,
        children: [],
    },
    {
        name: '로그인',
        path: '/login',
        type: 'appstore',
        component: AppPages.Login,
        menu: false,
        requireAuth: false,
        children: [],
    },
    {
        name: '비밀번호 재설정',
        path: '/reset-expired-password',
        component: AppPages.ResetExpiredPassword,
        menu: false,
        requireAuth: true,
        children: [],
    },
    {
        name: '아이디찾기',
        path: '/find-id',
        menu: false,
        requireAuth: false,
        children: [
            {
                name: '아이디찾기',
                path: '/find-id/user-check',
                component: AppPages.FindIdUserCheck,
                menu: false,
                requireAuth: false,
            },
            {
                name: '아아디찾기',
                path: '/find-id/result',
                component: AppPages.FindIdResult,
                menu: false,
                requireAuth: false,
            }
        ],
    },
    {
        name: '비밀번호찾기',
        path: 'find-password',
        menu: false,
        requireAuth: false,
        children: [
            {
                name: '비밀번호찾기',
                path: '/find-password/id-check',
                component: AppPages.FindPasswordIdCheck,
                menu: false,
                requireAuth: false,
            },
            {
                name: '비밀번호찾기',
                path: '/find-password/user-check',
                component: AppPages.FindPasswordUserCheck,
                menu: false,
                requireAuth: false,
            },
            {
                name: '비밀번호찾기',
                path: '/find-password/reset',
                component: AppPages.FindPasswordReset,
                menu: false,
                requireAuth: false,
            }
        ],
    },
    {
        name: '예약관리',
        path: 'reservations',
        type: 'calendar',
        menu: true,
        requireAuth: true,
        children: [
            {
                name: '예약내역',
                path: '/reservations/reservation-history',
                menu: true,
                requireAuth: true,
                component: AppPages.ReservationHistory,
            },
            {
                name: '예약현황',
                path: '/reservations/reservation-status',
                menu: true,
                requireAuth: true,
                component: AppPages.ReservationStatus,
            },
            {
                name: '예약등록',
                path: '/reservations/reservation-create',
                menu: true,
                requireAuth: true,
                component: AppPages.ReservationCreate,
            }
        ],
    },
    {
        name: '판매환경관리',
        path: 'manage-sales-environment',
        type: 'appstore',
        menu: true,
        requireAuth: true,
        children: [
            {
                name: '판매설정',
                path: '/manage-sales-environment/sales-setting',
                menu: true,
                requireAuth: true,
                component: AppPages.SalesSetting,
            },
            {
                name: '성수기기간설정',
                path: '/manage-sales-environment/peak-season-setting',
                menu: true,
                requireAuth: true,
                component: AppPages.PeakSeasonSetting,
            },
            {
                name: '할인판매설정',
                path: '/manage-sales-environment/discount-sales-setting',
                menu: true,
                requireAuth: true,
                component: AppPages.DiscountSalesSetting,
            },
            {
                name: '공휴일설정',
                path: '/manage-sales-environment/holiday-setting',
                menu: true,
                requireAuth: true,
                component: AppPages.HolidaySetting,
            },
            {
                name: '팝업설정',
                path: '/manage-sales-environment/popup-setting',
                menu: true,
                requireAuth: true,
                component: AppPages.PopupSetting,
            }
        ],
    },
    {
        name: '상품관리',
        path: 'product-management',
        type: 'appstore',
        menu: true,
        requireAuth: true,
        children: [
            {
                name: '객실목록',
                path: '/product-management/room-list',
                menu: true,
                requireAuth: true,
                component: AppPages.RoomList,
            },
            {
                name: '기본요금',
                path: '/product-management/base-rate',
                menu: true,
                requireAuth: true,
                component: AppPages.BaseRate,
            },
            {
                name: '옵션목록',
                path: '/product-management/option-list',
                menu: true,
                requireAuth: true,
                component: AppPages.OptionList,
            }
        ],
    },
    {
        name: '정산관리',
        path: 'calculate-management',
        type: 'appstore',
        menu: true,
        requireAuth: true,
        children: [
            {
                name: '정산내역',
                path: '/calculate-management/calculate-history',
                menu: true,
                requireAuth: true,
                component: AppPages.CalculateHistory,
            },
            {
                name: '현금영수증',
                path: '/calculate-management/cash-receipts',
                menu: true,
                requireAuth: true,
                component: AppPages.CashReceipts,
            }
        ],
    },
    {
        name: '참고용예제소스',
        path: 'examples',
        type: 'appstore',
        menu: true,
        requireAuth: true,
        children: [
            {
                name: 'API 스토어 예제',
                path: '/examples/example-components',
                menu: true,
                requireAuth: true,
                component: AppPages.ExamplePage,
            },
            {
                name: 'UI 스토어 예제',
                path: '/examples/store-sample-ui',
                menu: true,
                requireAuth: true,
                component: AppPages.StoreSampleUiPage,
            },
            {
                name: '디자인 스타일 가이드',
                path: '/examples/style-guide',
                menu: true,
                requireAuth: true,
                component: AppPages.StyleGuide,
            }
        ],
    },
    {
        name: '약관 및 개인정보처리방침',
        path: 'policy',
        menu: false,
        requireAuth: true,
        component: AppPages.NotFound,
        children: [
            {
                name: '이용약관',
                path: '/policy/usage',
                menu: false,
                requireAuth: true,
                component: AppPages.Usage,
            },
            {
                name: 'UI 스토어 예제',
                path: '/policy/personal-information',
                menu: false,
                requireAuth: true,
                component: AppPages.PersonalInformation,
            }
        ],
    },
    {
        name: '404 NotFound',
        path: '*',
        menu: false,
        requireAuth: false,
        component: AppPages.NotFound,
        children: [],
    }
]

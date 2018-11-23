/**
 * @author Has
 * @reg_date 2018-11-02
 * @summary pages
 * @description normal pages routes
 */

// App Pages (main)
import Home from './Home/Home';
// 404NotFound
import NotFound from './NotFound/NotFound';
// account(로그인)
import Login from './Account/Login/Login';
// reservation (예약관리)
import ReservationHistory from './Reservations/ReservationHistory/ReservationHistory';
import ReservationStatus from './Reservations/ReservationStatus/ReservationStatus';
import ReservationCreate from './Reservations/ReservationCreate/ReservationCreate';
// sales (판매환경관리)
import SalesSetting from './ManageSalesEnvironment/SalesSetting/SalesSetting';
import PeakSeasonSetting from './ManageSalesEnvironment/PeakSeasonSetting/PeakSeasonSetting';
import DiscountSalesSetting from './ManageSalesEnvironment/DiscountSalesSetting/DiscountSalesSetting';
import HolidaySetting from './ManageSalesEnvironment/HolidaySetting/HolidaySetting';
import PopupSetting from './ManageSalesEnvironment/PopupSetting/PopupSetting';
// products (상품관리)
import RoomList from './ProductManagement/RoomList/RoomList';
import BaseRate from './ProductManagement/BaseRate/BaseRate';
import OptionList from './ProductManagement/OptionList/OptionList';
// calculate(정산관리)
import CalculateHistory from './CalculateManagement/CalculateHistory/CalculateHistory';
import CashReceipts from './CalculateManagement/CashReceipts/CashReceipts';
// 약관 및 개인정보처러방침
import Usage from './Policy/Usage/Usage';
import PersonalInformation from './Policy/PersonalInformation/PersonalInformation';
// Examples Pages
import StoreSampleUiPage from './Examples/StoreSampleUiPage/StoreSampleUiPage';
import ExamplePage from './Examples/ExampleComponentsPage/ExamplePage';
import StyleGuide from './Examples/StyleGuide/StyleGuide';


export {
    Home,
    NotFound,
    Login,
    ReservationHistory,
    ReservationStatus,
    ReservationCreate,
    SalesSetting,
    PeakSeasonSetting,
    DiscountSalesSetting,
    HolidaySetting,
    PopupSetting,
    RoomList,
    BaseRate,
    OptionList,
    CalculateHistory,
    CashReceipts,
    Usage,
    PersonalInformation,
    ExamplePage,
    StoreSampleUiPage,
    StyleGuide,
};
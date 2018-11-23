/**
 * @author Has
 * @reg_date 2018-11-01
 * @summary async pages
 * @description async pages routes
 */

// lib
import asyncComponent from 'components/Async/AsyncComponent';
// App Pages (main)
export const Home = asyncComponent(() => import('./Home/Home'));
// 404NotFound
export const NotFound = asyncComponent(() => import('./NotFound/NotFound'));
// account(로그인)
export const Login = asyncComponent(() => import('./Account/Login/Login'));
// account -> resetExpiredPassword
export const ResetExpiredPassword = asyncComponent(() => import('./Account/Login/ResetExpiredPassword/ResetExpiredPassword'));
// account -> findid (아이디 찾기)
export const FindIdUserCheck = asyncComponent(() => import('./Account/Login/Find/FindId/FindIdUserCheck'));
export const FindIdResult = asyncComponent(() => import('./Account/Login/Find/FindId/FindIdResult'));
// account -> findpassword (비밀번호 찾기)
export const FindPasswordIdCheck = asyncComponent(() => import('./Account/Login/Find/FindPassword/FindPasswordIdCheck'));
export const FindPasswordUserCheck = asyncComponent(() => import('./Account/Login/Find/FindPassword/FindPasswordUserCheck'));
export const FindPasswordReset = asyncComponent(() => import('./Account/Login/Find/FindPassword/FindPasswordReset'));
// reservation (예약관리)
export const ReservationHistory = asyncComponent(() => import('./Reservations/ReservationHistory/ReservationHistory'));
export const ReservationStatus = asyncComponent(() => import('./Reservations/ReservationStatus/ReservationStatus'));
export const ReservationCreate = asyncComponent(() => import('./Reservations/ReservationCreate/ReservationCreate'));
// sales (판매환경관리)
export const SalesSetting = asyncComponent(() => import('./ManageSalesEnvironment/SalesSetting/SalesSetting'));
export const PeakSeasonSetting = asyncComponent(() => import('./ManageSalesEnvironment/PeakSeasonSetting/PeakSeasonSetting'));
export const DiscountSalesSetting = asyncComponent(() => import('./ManageSalesEnvironment/DiscountSalesSetting/DiscountSalesSetting'));
export const HolidaySetting = asyncComponent(() => import('./ManageSalesEnvironment/HolidaySetting/HolidaySetting'));
export const PopupSetting = asyncComponent(() => import('./ManageSalesEnvironment/PopupSetting/PopupSetting'));
// products (상품관리)
export const RoomList = asyncComponent(() => import('./ProductManagement/RoomList/RoomList'));
export const BaseRate = asyncComponent(() => import('./ProductManagement/BaseRate/BaseRate'));
export const OptionList = asyncComponent(() => import('./ProductManagement/OptionList/OptionList'));
// calculate(정산관리)
export const CalculateHistory = asyncComponent(() => import('./CalculateManagement/CalculateHistory/CalculateHistory'));
export const CashReceipts = asyncComponent(() => import('./CalculateManagement/CashReceipts/CashReceipts'));
// 약관 및 개인정보처러방침
export const Usage = asyncComponent(() => import('./Policy/Usage/Usage'));
export const PersonalInformation = asyncComponent(() => import('./Policy/PersonalInformation/PersonalInformation'));
// Examples Pages
export const StoreSampleUiPage = asyncComponent(() => import('./Examples/StoreSampleUiPage/StoreSampleUiPage'));
export const ExamplePage = asyncComponent(() => import('./Examples/ExampleComponentsPage/ExamplePage'));
export const StyleGuide = asyncComponent(() => import('./Examples/StyleGuide/StyleGuide'));

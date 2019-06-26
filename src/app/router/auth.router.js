import {createStackNavigator} from 'react-navigation';
import LoginPage from '../page/auth/login/login.page';
import RegisterStep1Page from '../page/auth/register/register-step1.page';
import RegisterStep2Page from '../page/auth/register/register-step2.page';
import ForgetPasswordStep1Page from '../page/auth/forget-password/forget-password-step1.page';
import ForgetPasswordStep2Page from '../page/auth/forget-password/forget-password-step2.page';
import ForgetPasswordStep3Page from '../page/auth/forget-password/forget-password-step3.page';

const AuthStack = createStackNavigator({
    Login: LoginPage,
    Register: RegisterStep1Page,
    RegisterStep2: RegisterStep2Page,
    ForgetPassword: ForgetPasswordStep1Page,
    ForgetPasswordStep2: ForgetPasswordStep2Page,
    ForgetPasswordStep3: ForgetPasswordStep3Page,
}, {
    // headerMode: 'none',
});

export default AuthStack;

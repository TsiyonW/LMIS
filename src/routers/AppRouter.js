import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header';
import AddDepartment from '../components/AddDepartment';
import AddMember from '../components/AddMember';
import AddSample from '../components/AddSample';
import AddSampleToTest from '../components/AddSampleToTest';
import AddSampleToTest2 from '../components/AddSampleToTest2';
import AlterResult from '../components/AlterResult';
import AssignTask1 from '../components/AssignTask1';
import AssignTask2 from '../components/AssignTask2';
import ChangePassword1 from '../components/ChangePassword1';
import ChangePassword2 from '../components/ChangePassword2';
import CheckoutForm1 from '../components/CheckOutForm1';
import CheckOutForm2 from '../components/CheckOutForm2';
import ChooseDepartment from '../components/ChooseDepartment';
import ConfirmationPage from '../components/ConfirmationPage';
import EditMember1 from '../components/EditMember1';
import EditMember2 from '../components/EditMember2';
import EditSample1 from '../components/EditSample1';
import EditSample2 from '../components/EditMember2';
import FeedResult1 from '../components/FeedResult1';
import FeedResult2 from '../components/FeedResult2';
import Homepage from '../components/Homepage';
import ManageAccount from '../components/ManageAccount';
import ResetPassword from '../components/ResetPassword';
import SearchResult from '../components/SearchResult';
import TrackSample from '../components/TrackSample';
import ViewDepartment from '../components/ViewDepartment';
import ViewMember from '../components/ViewMember';
import ViewProfile from '../components/ViewProfile';
import ViewProgress from '../components/ViewProgress';
import ViewResult from '../components/ViewResult';
import ViewSample from '../components/ViewSample';
import ViewSampleToTest from '../components/ViewSampleToTest';
import ViewTask from '../components/ViewTask';

// import * as serviceWorker from './serviceWorker';

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" component={Login} exact={true} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/adddepartment" component={AddDepartment}/>
                        <Route path="/addmember" component={AddMember}/>
                        <Route path="/addsample" component={AddSample}/>
                        <Route path="/addsampletotest" component={AddSampleToTest}/>
                        <Route path="/addsampletotest2" component={AddSampleToTest2}/>
                        <Route path="/alterresult" component={AlterResult}/>
                        <Route path="/assigntask1" component={AssignTask1}/>
                        <Route path="/assigntask2" component={AssignTask2}/>
                        <Route path="changepassword1" component={ChangePassword1}/>
                        <Route path="/changepassword2" component={ChangePassword2}/>
                        <Route path="/checkoutform1" component={CheckoutForm1}/>
                        <Route path="/checkoutform2" component={CheckOutForm2}/>
                        <Route path="/choosedepartment" component={ChooseDepartment}/>
                        <Route path="/confirmationpage" component={ConfirmationPage}/>
                        <Route path="/editmember1" component={EditMember1}/>
                        <Route path="/editmember2" component={EditMember2}/>
                        <Route path="/editsample1" component={EditSample1}/>
                        <Route path="/editsample2" component={EditSample2}/>
                        <Route path="/feedresult1" component={FeedResult1}/>
                        <Route path="feedresult2" component={FeedResult2}/>
                        <Route path="/homepage" component={Homepage}/>
                        <Route path="/manageaccount" component={ManageAccount}/>
                        <Route path="/resetpassword" component={ResetPassword}/>
                        <Route path="/searchresult" component={SearchResult}/>
                        <Route path="/tracksample" component={TrackSample}/>
                        <Route path="/viewdepartment" component={ViewDepartment}/>
                        <Route path="/viewmember" component={ViewMember}/>
                        <Route path="/viewprofile" component={ViewProfile}/>
                        <Route path="/viewprogress" component={ViewProgress}/>
                        <Route path="/viewresult" component={ViewResult}/>
                        <Route path="/viewsample" component={ViewSample}/>
                        <Route path="/viewsampletotest" component={ViewSampleToTest}/>
                        <Route path="/viewtask" component={ViewTask}/>
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>

            </BrowserRouter>
        );
    }
}

export default AppRouter;
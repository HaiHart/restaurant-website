import './App.css';
import React from "react";
import HomeScreen from './Components/HomeScreen';
import LoginForm from './Components/LoginForm';
import NavigationBar from './Components/NavBar';
import Employer from './Components/Employer'
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import CheckOrder from './Components/CheckOrder';
import Payment from './Components/Payment';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
function App() {
  const [currentCategory, setCurrentCategory] = useState("");
  const [foodSwitch, setFoodSwitch] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBar, setSearchBar] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
  }
  return (
    <div className="h-full w-full bg-gray-200">
      <NavigationBar
        term={searchTerm}
        searchKeyWord={searchHandler}
        currentCategory={currentCategory}
        onChangeCategory={(cat) => { setCurrentCategory(cat) }}
        foodSwitch={foodSwitch}
        setFoodSwitch={setFoodSwitch}
        showSearchBar={searchBar}
        showDropDown ={dropDown} />
      <Switch>
        <Route exact path="/"
          render={(props) => <HomeScreen{...props}
            searchTerm={searchTerm.length < 1 ? "" : searchTerm}
            currentCategory={currentCategory}
            foodSwitch={foodSwitch}
            showSearchBar={(isShow) => { setSearchBar(isShow) }}
            showDropDown={(isShow) => { setDropDown(isShow) }}
          />} />
        <Route exact path="/employer"
          render={(props) => <Employer{...props}
            searchTerm={searchTerm.length < 1 ? "" : searchTerm}
            showSearchBar={(isShow) => { setSearchBar(isShow) }}
            showDropDown={(isShow) => { setDropDown(isShow) }} />} />
        <Route exact path="/check"
          render={(props) => <CheckOrder{...props}
            searchTerm={searchTerm.length < 1 ? "" : searchTerm}
            showSearchBar={(isShow) => { setSearchBar(isShow) }}
            showDropDown={(isShow) => { setDropDown(isShow) }} />} />
        <Route exact path="/sign-in"
          render={(props) => <LoginForm{...props}
            showSearchBar={(isShow) => { setSearchBar(isShow) }}
            showDropDown={(isShow) => { setDropDown(isShow) }} />} />
          <Route exact path="/payment"
          render={(props) => <Payment{...props}
            showSearchBar={(isShow) => { setSearchBar(isShow) }}
            showDropDown={(isShow) => { setDropDown(isShow) }} />} />
      </Switch>
      <NotificationContainer/>
    </div>
  );
}
export default App;
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import ListStream from "./streams/ListStream";
import CreateStream from "./streams/CreateStream";
import DeleteStream from "./streams/DeleteStream";
import EditStream from "./streams/EditStream";
import ShowStream from "./streams/ShowStream";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={ListStream} />
          <Route path="/streams/new" component={CreateStream} />
          <Route path="/streams/edit" component={EditStream} />
          <Route path="/streams/delete" component={DeleteStream} />
          <Route path="/streams/show" component={ShowStream} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React, { Suspense, Component } from "react";
import "./App.scss";
import "antd/lib/style/themes/index.less";

import { Input, Button } from "antd";
class App extends Component {
  render() {
    const lessStyleNode = document.createElement("link");
    const lessConfigNode = document.createElement("script");
    const lessScriptNode = document.createElement("script");
    lessStyleNode.setAttribute("rel", "stylesheet/less");
    lessStyleNode.setAttribute("href", "/color.less");
    lessConfigNode.innerHTML = `
    window.less = {
      async: true,
      env: 'production',
      javascriptEnabled: true
    };
  `;
    lessScriptNode.src =
      "https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js";
    lessScriptNode.async = true;
    lessScriptNode.onload = () => {
      //修改主题的方法
      lessScriptNode.onload = null;
    };
    document.body.appendChild(lessStyleNode);
    document.body.appendChild(lessConfigNode);
    document.body.appendChild(lessScriptNode);
    return (
      <div className="App">
        <Suspense fallback={<div>...Loading</div>}>
          <Input placeholder="Type here.." />
          <Button type="primary">Save</Button>
        </Suspense>
      </div>
    );
  }
}

export default App;

import React, { Component, Suspense } from "react";
import { Layout, Row, Tooltip, Select } from "antd";
import { HashRouter, Route, Link } from "react-router-dom";
import Game4 from "@/pages/Game4/Game4";
import asyncComponent from "./AsyncComponent";

const Demo = asyncComponent(() => import("./pages/Demo/Demo"));
const Game1 = asyncComponent(() => import("./pages/Game1/Game1"));
const Game2 = asyncComponent(() => import("./pages/Game2/Game2"));
const Game3 = asyncComponent(() => import("./pages/Game3/Game3"));

class App extends Component {
  /**
   * REACT生命周期函数，组件渲染后调用
   */
  componentDidMount() {
    // this.goToIndex();
  }

  /**
   * 跳转到index路由
   */
  goToIndex = () => {
    document.getElementById("goToIndex").click();
  };

  /**
   * 跳转到demo路由
   */
  goToDemo = () => {
    document.getElementById("goToDemo").click();
  };

  /**
   * select组建跳转
   */
  routerChange = (value) => {
    document.getElementById(value).click();
  };

  /**
   * REACT生命周期主函数，用于渲染页面
   * @returns {*}
   */
  render() {
    return (
      <div className="App" id="App">
        <HashRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout.Header style={{ background: "#eee" }}>
              <img width={120} height={60} src="" alt="此处应有Logo" />
              <div style={{ float: "right" }}>
                Page：
                <Select style={{ width: 120 }} onChange={this.routerChange}>
                  <Select.Option value="goToGame1">
                    <Link to="/game1" id="goToGame1">
                      1.构造与继承
                    </Link>
                  </Select.Option>
                  <Select.Option value="goToGame2">
                    <Link to="/game2" id="goToGame2">
                      2.命令模式
                    </Link>
                  </Select.Option>
                  <Select.Option value="goToGame3">
                    <Link to="/game3" id="goToGame3">
                      3.享元模式
                    </Link>
                  </Select.Option>
                  <Select.Option value="goToGame4">
                    <Link to="/game4" id="goToGame4">
                      4.状态模式
                    </Link>
                  </Select.Option>
                  <Select.Option value="goToIndex">
                    <Link to="/index" id="goToIndex">
                      首页
                    </Link>
                  </Select.Option>
                </Select>
              </div>
              <Row gutter={16}>
                {/** ********************************Link********************************* */}
                {/* <Col span={6}> */}
                {/* </Col> */}
                {/* <Col span={6}> */}
                {/*    <Link to={"/game1"} id={"goToGame1"} >构造与继承</Link> */}
                {/* </Col> */}
                {/* <Col span={6}> */}
                {/*    <Link to={"/game2"} id={"goToGame2"}>命令模式</Link> */}
                {/* </Col> */}
                {/* <Col span={6}> */}
                {/*    <Link to={"/game3"} id={"goToGame3"}>享元模式</Link> */}
                {/* </Col> */}
                <Link to="/demo" id="goToDemo" />
              </Row>
            </Layout.Header>
            <Layout.Content>
              {/** ********************************路由********************************* */}
              <Route path="/game1" component={Game1} />
              <Route path="/game2" component={Game2} />
              <Route path="/game3" component={Game3} />
              <Route path="/game4" component={Game4} />
              <Route path="/demo" component={Demo} />
            </Layout.Content>
            <div
              style={{
                position: "absolute",
                width: window.innerWidth,
                top: window.innerHeight - 50,
                textAlign: "center",
              }}
            >
              <div>
                @Author--
                <Tooltip title="QQ626723063">JGN</Tooltip>
                --
                <Tooltip title="QQ978539156">MilK</Tooltip>
                --
                <Tooltip title="QQ823561237">SC</Tooltip>
              </div>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                onClick={() => {
                  window.open(
                    "http://beian.miit.gov.cn/publish/query/indexFirst.action"
                  );
                }}
                href="#"
              >
                浙ICP备18049534号-1
              </a>
            </div>
          </Suspense>
        </HashRouter>
      </div>
    );
  }
}

export default App;

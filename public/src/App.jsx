import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import route from '/router/Index'; //路由配置
import store from '/Store/Index';


import 'normalize.css'; //重置浏览器默认样式
import 'flex.css'; //flex布局
import './Style/style.less'; //加载公共样式
import './Iconfont/iconfont.css'; //字体图标
import 'github-markdown-css'; //markdown css

if ( __DEV__ ){
  console.log("现在是开发环境")
}

if (__PROD__) {
  console.log("现在是生产环境")
}


render(
    <Provider store={store}>
        {route}
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);
import React from 'react';
import { cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import axios from 'axios';
import 'babel-polyfill';

jest.mock('axios'); // Mock axios模块

afterEach(cleanup);

test('Order组件显示异步调用订单数据', async () => {
  // <--start
  // TODO 4: 给出正确的测试
  // setup组件
  // Mock数据请求
  // 触发事件
  // 给出断言
  // --end->
});

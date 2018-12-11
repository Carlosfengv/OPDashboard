import React from 'react';
import { Columns, Column , Rate} from '@QCFE/lego-ui';
import Lincharts from './Charts/linechart'


const MainDashboard = () => (
  <div className="SideCard Main">
    <Columns className="is-2">
      <Column>
        <h3>上午好，Samantha</h3>
        <div>
            <span className="Description Text-left">
                上次登录时间是 2018年9月30日 20:32:33
            </span>
            <span className="Text-right right">
                <i className="icon ok"></i> 最近24小时平台服务状态: <span className="Green">正常</span>
            </span>
        </div>
      </Column>
    </Columns>
    <Columns>
        <Column className="Operating">
            <div className="flex2 Ocard">
                <div className="Group">
                    <div className="item flex1 CardContent">
                        <label>应用</label>
                        <h2 className="Value">842<i className="icon up"></i></h2>
                    </div>
                    <div className="item flex1 CardContent">
                        <label>仓库</label>
                        <h2 className="Value"><span className="Pink">4</span><small>/7</small><i className="icon up"></i></h2>
                    </div>
                </div>
            </div>
            <div className="flex2 Ocard">
                <div className="Group">
                        <div className="item flex1 CardContent">
                            <label>用户</label>
                            <h2 className="Value">1,007<i className="icon down"></i></h2>
                        </div>
                        <div className="item flex1 CardContent">
                            <label>日交易额</label>
                            <h2 className="Value"><small>¥</small> 7,562<i className="icon down"></i></h2>
                        </div>
                </div>
            </div>
            <div className="flex1 Ocard">
                <div className="Group Service">
                    <div className="item flex1 CardContent">
                                <label>服务商</label>
                                <h2 className="Value">56<i className="icon up"></i> <label className="right">更多 →</label>
                                </h2>    
                    </div>
                </div>
            </div>
        </Column>
    </Columns>
    <Columns>
        <Column className="Monitor">
            <div className="Ocard"><Lincharts></Lincharts></div>
        </Column>
    </Columns>
    <Columns>
        <Column className="News">
            <div className="Ocard flex5">
            <div className="CardContent">
                <label>综合排名 Top 3</label>
                <div className="Content">
                    <table> 
                        <tbody>
                            <tr>
                                <td className="num">1th</td>
                                <td colspan="4">
                                    <div className="FirstContent">
                                        <h5>杭州映云科技有限公司</h5>
                                        <div className="Details">
                                            <div>
                                                <label>本月收入</label>
                                                <h5>¥ 1,391</h5>
                                            </div>
                                            <div>
                                                <label>上架应用</label>
                                                <h5>32</h5>
                                            </div>
                                            <div>
                                                <label>私有仓库</label>
                                                <h5>5</h5>
                                            </div>
                                            <div>
                                                <label>用户满意度</label>
                                                <div className="rateControl">
                                                    <Rate defaultValue={4.5} allowHalf disabled="true"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="num">2th</td>
                                <td className="Company">北京拓尔思信息技术股份有限公司</td>
                                <td>¥ 882</td>
                                <td>4.5</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td className="num">3th</td>
                                <td className="Company">北京高能时代环境技术股份有限公司</td>
                                <td>¥ 794</td>
                                <td>4.0</td>
                                <td>1</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
            <div className="Ocard flex3">
                <div className="CardContent">
                    <label>最新入驻</label>
                    <div className="items">
                        <div className="item">
                            <label className="Description">2018.1.2</label>
                            <p>招银云创（深圳）信息技术有限公司</p>
                            <span className="Description">全方位整合招银系金融领域的服务能力，包括零售</span>
                        </div>
                        <div className="item">
                            <label className="Description">2018.3.19</label>
                            <p>成都博智维讯信息技术股份有限公司</p>
                            <span className="Description">用智能为产业赋能 技术与产业完美对接. 图像识别</span>
                        </div>
                        <div className="item">
                            <label className="Description">2018.9.20</label>
                            <p>上海爱数信息技术股份有限公司</p>
                            <span className="Description">爱数是一家提供智能数据管理的云计算公司，</span>
                        </div>

                    </div>
            </div>
            
            </div>
        </Column>
    </Columns>
  </div>
);

export default MainDashboard;
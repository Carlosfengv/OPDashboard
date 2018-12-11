import React from 'react';
import NoLog from '../../../Image/bitmap.svg';
import Processeditem from './Processeditem';

const Show = (props) => (
    <div className="CardContent">
        <div className="showTitle">
            <h3>我的待办事项<span className="Tip">7</span></h3>
        </div>
        <div className="showContent">
            <h6 className="Date">今日</h6>
            <div className="items">
                <div className="item">
                    <label>应用审核</label>
                    <div className="Obox">
                        <img src={NoLog} alt="logo"></img>
                        <div className="content">
                            <p>杭州映云科技有限公司</p>
                            <span className="Description">
                                提交了应用 「Collabora Office 1.0」 的上架申请，等待审核。
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="items">
                <div className="item">
                    <label>应用审核</label>
                    <div className="Obox">
                        <img src={NoLog} alt="logo"></img>
                        <div className="content">
                            <p>成都博智维讯信息技术股份有限公司 </p>
                            <span className="Description">
                            提交了应用 「Kafka on Heroku 2.0.1」 的上架申请，等待审核。
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Show;
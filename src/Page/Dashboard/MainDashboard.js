import React from 'react';
import { Columns, Column } from '@QCFE/lego-ui';


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
            <div className="flex2 Ocard">2</div>
            <div className="flex2 Ocard">2</div>
            <div className="flex1 Ocard">1</div>
        </Column>
    </Columns>
    <Columns>
        <Column className="Monitor">
            <div className="Ocard"></div>
        </Column>
    </Columns>
    <Columns>
        <Column className="News">
            <div className="Ocard flex5"></div>
            <div className="Ocard flex3"></div>
        </Column>
    </Columns>
  </div>
);

export default MainDashboard;
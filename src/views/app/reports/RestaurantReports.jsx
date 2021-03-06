import React, { Fragment, useState } from 'react';
import { Card, CardHeader, Nav, NavItem, Row, TabContent, TabPane } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import { NavLink, useHistory } from 'react-router-dom';
import classnames from 'classnames';
import IntlMessages from '../../../helpers/IntlMessages';
import SalesChartCard from '../../../containers/dashboards/SalesChartCard';
import WebsiteVisitsChartCard from '../../../containers/dashboards/WebsiteVisitsChartCard';
import DataAnalysisReport from '../accounts/outlet/DataAnalysisReport';
import ReportOutlets from '../accounts/outlet/ReportOutlets';
import ProductCategory from '../accounts/outlet/ProductCategory';
import Button from 'reactstrap/es/Button';

const RestaurantReport = ({match})=> {
  const [activeFirstTab, setActiveFirstTab] = useState("1");
  const history = useHistory();
  const toggleTab = (tab)=> {
    setActiveFirstTab(tab)
  }
  return(
    <Fragment>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading={`menu.${match.url.split('/')[4]}`} match={match} />
          <Separator className="mb-5" />
        </Colxx>
        <Colxx xxs={12} className="mb-5">
          <Button onClick={()=>history.goBack()} color="primary" className="float-right">Back</Button>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" sm="12" lg="12" md="12">
          <Card className="mb-4">
            <CardHeader>
              <Nav justified tabs className="card-header-tabs ">
                <NavItem
                  className={classnames({
                    active: activeFirstTab === "1",
                    "nav-link": true,
                    })}
                    onClick={() => { toggleTab("1"); }} to="#"
                    style={{boxShadow: "0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)"}}>
                    <IntlMessages id="pages.daily" />

                </NavItem>

                  <NavItem
                    style={{boxShadow: "0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)"}}
                    className={classnames({
                      active: activeFirstTab === "2",
                      "nav-link": true
                    })}
                    onClick={() => { toggleTab("2"); }} to="#" >
                    <IntlMessages id="pages.weekly" />
                  </NavItem>
                  <NavItem style={{boxShadow: "0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)"}}
                    className={classnames({
                      active: activeFirstTab === "3",
                      "nav-link": true
                    })}
                    onClick={() => { toggleTab("3"); }} to="#" >
                    <IntlMessages id="pages.monthly" />
                  </NavItem>
              </Nav>
            </CardHeader>

            <TabContent className="m-4" activeTab={activeFirstTab}>
              <TabPane tabId="1">
                <Row>
                  <Colxx xxs="12" sm="12" lg="6" md="6"  className="mb-3">
                    <SalesChartCard/>
                  </Colxx>
                  <Colxx xxs="12" sm="12" lg="6" md="6">
                    <WebsiteVisitsChartCard/>
                  </Colxx>
                  <Colxx  xxs="12" sm="12" lg="12" md="12">
                    <DataAnalysisReport/>
                  </Colxx>
                  {/*<Colxx  xxs="12" sm="12" lg="12" md="12">*/}
                  {/*  <ReportOutlets match={match}/>*/}
                  {/*</Colxx>*/}
                  <Colxx  xxs="12" sm="12" lg="12" md="12">
                    <ProductCategory match={match}/>
                  </Colxx>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Colxx xxs="12" sm="12" lg="6" md="6"  className="mb-3">
                    <SalesChartCard/>
                  </Colxx>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Colxx xxs="12" sm="12" lg="6" md="6"  className="mb-3">
                    <SalesChartCard/>
                  </Colxx>
                </Row>
              </TabPane>
            </TabContent>
          </Card>
        </Colxx>
      </Row>
    </Fragment>
  );
}

export default RestaurantReport;

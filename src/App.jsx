import React from 'react';
import Project from './models/project'
import { Card, Col, Row, Tag } from 'antd';
import Meta from 'antd/lib/card/Meta';

import './App.css'

const App = ()=>{
  const projects = [new Project("EZShop","https://github.com/AppsFlyerSDK/appsflyer-flutter-app","Flutter","all", "Your place to create shareable lists in a few easy steps"),
                    new Project("Let's cook!", "https://github.com/AppsFlyerSDK/appsflyer-cordova-app", "Cordova", "all", "Need ideas for some new recipes? let's cook is your place. Enter the ingredients that you want to make food with and the app will find you awsome recipes."),
                    new Project("Mopicker", "https://github.com/AppsFlyerSDK/appsflyer-apple-swift-app", "Swift", "iOS", "Mopicker is a sample app, that has been written in native Swift programming language using SwiftUI and Combine frameworks in order to demonstrate the AppsflyerSDK implementation.")]

  const renderCover = (project)=>{
    switch(project.plugin.toLowerCase()){
      case 'flutter':
        return <img src={process.env.PUBLIC_URL + '/flutter_logo.png'} alt="Flutter logo"/>
      case 'cordova':
        return <img src={process.env.PUBLIC_URL + '/cordova_logo.png'} alt="Cordova logo"/>
      case 'swift':
        return <img src={process.env.PUBLIC_URL + '/swift_logo.png'} alt="Swift logo"/>
      default:
        return;
    }
  }

  const renderPlatformTags = (platform) => {
    switch(platform.toLowerCase()){
      case 'all':
        return <div><Tag color="green">Android</Tag><Tag color="geekblue">iOS</Tag></div>
      case 'ios':
        return <Tag color="geekblue">iOS</Tag>
      case 'android':
        return <Tag color="green">Android</Tag>
      default:
        return;
    }
  }

  const buildProjectCard = (project) => {
    return (
        <Col span={6} key={project.name}>
          <a href={project.url}>
          <Card onClick={()=>{console.log("clicked")}} hoverable cover={
              renderCover(project)
          }>
            <Meta title={<div><span>{project.name}</span><span className="rightSpan">{renderPlatformTags(project.platform)}</span></div>} description={project.description}/>
          </Card>
          </a>
        </Col>
    )
  }

  const buildProjectCards = ()=>{
    return projects.map((project)=>{
      return (
          buildProjectCard(project) 
        )
    });
  }

  return (
    <div className="App" style={{padding:"12px"}}>
      <Row gutter={12} justify="center">
        {buildProjectCards()}
      </Row>
    </div>
  );
}

export default App;

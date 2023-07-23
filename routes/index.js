var express = require('express');
var router = express.Router();

var express = require('express');
var router = express.Router();
const itemList = [
  {'id':1,'title':'DevOps',
  'des':'DevOps is a group of concepts that stress communication, collaboration, integration, and automation in order to improve the flow of work between software developers and IT operations professionals. This increased flow is expected to lead to faster delivery of software and more stable operating environments, which helps to achieve business goals.',
  'ref':'E. Mueller, https://theagileadmin.com/what-is-devops/'},
  {'id':2,'title':'Jenkins',
  'des':'Jenkins is an open-source automation server that facilitates continuous integration and continuous delivery (CI/CD) of software projects. It allows developers to automate the building, testing, and deployment of their code.',
  'ref':' https://www.jenkins.io/'},
  {'id':3,'title':'GitLab',
  'des':'GitLab is an open source code repository and collaborative software development platform for large DevOps and DevSecOps services in a single application. It allows teams to collaborate and manage their software development lifecycle efficiently.',
  'ref':' https://www.techtarget.com/whatis/definition/GitLab#:~:text=GitLab%20is%20an%20open%20source,issue%20tracking%20and%20CI%2FCD'},
  {'id':4,'title':'GitHub',
  'des':'GitHub is a web-based platform and collaborative version control system that facilitates code hosting, sharing, and collaboration among software developers, allowing them to manage and track changes to their code repositories.',
  'ref':'"Git vs GitHub https://www.techtarget.com/searchitoperations/definition/GitHub '},
  {'id':5,'title':'Selenium',
  'des':'Selenium is a popular open-source automated testing framework for web applications. Selenium is a free (open-source) automated testing framework used to validate web applications across different browsers and platforms. It provides a suite of tools for recording and playing back tests, allowing developers to write test scripts in various programming languages.',
  'ref':'https://www.guru99.com/introduction-to-selenium.html'},
  {'id':6,'title':'Terraform',
  'des':'Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently. Terraform is an open-source infrastructure as code (IaC) tool that enables users to define and provision data center infrastructure and resources in a declarative way. It supports multiple cloud providers and services.',
  'ref':'https://developer.hashicorp.com/terraform/intro'},
  {'id':7,'title':'Docker',
  'des':'Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. Containers provide a lightweight and isolated environment for applications to run consistently across different environments.',
  'ref':'https://docs.docker.com/get-started/overview/'},
  {'id':8,'title':'Kubernetes',
  'des':'Kubernetes is an open-source container orchestration platform that automates deploying, managing and scaling containerized applications. It allows seamless management of containerized workloads across a cluster of nodes.',
  'ref':'https://kubecampus.io/kubernetes/'},
  {'id':9,'title':'Cloud',
  'des':'The cloud is a distributed collection of servers that host software and infrastructure, and it is accessed over the Internet, which allows users to store, manage, and access data and applications over the internet rather than on local physical servers or devices. The model is characteristics include on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service.',
  'ref':'https://www.cloudflare.com/en-gb/learning/cloud/what-is-the-cloud/'},
  {'id':10,'title':'Jira',
  'des':'Jira Software is the central hub for the coding, collaboration, and release stages. It allows teams to plan, track, and manage their work efficiently, facilitating collaboration and agile practices.',
  'ref':'https://www.atlassian.com/software/jira/guides/getting-started/who-uses-jira'}
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'SIT722 DevOps Glossary', 
    sub: ' Avinashs website showing a collection of DevOps terms and their brief dess.', 
    temps: itemList, 
  });
});
module.exports = router;


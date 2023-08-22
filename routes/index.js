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
  'ref':'https://www.atlassian.com/software/jira/guides/getting-started/who-uses-jira'},
  {'id':11,'title':'Ansible',
  'des':'Ansible is a suite of software tools that enables infrastructure as code. It is open-source and the suite includes software provisioning, configuration management, and application deployment functionality.',
  'ref':'https://www.ansible.com/overview/automation'},
  
  {'id':12,'title':'Bamboo',
  'des':'Bamboo is a continuous integration and continuous delivery server developed by Atlassian. It provides build and test automation for applications, allowing teams to build, test, and deploy their code in a structured and coordinated way.',
  'ref':'https://www.atlassian.com/software/bamboo'},
  
  {'id':13,'title':'Nagios',
  'des':'Nagios is used for continuous monitoring of system applications, services, and business processes, etc in a DevOps culture. Nagios runs on a server, usually as a daemon or a service. It offers monitoring and alerting services for servers, network devices, applications, and more.',
  'ref':'https://www.nagios.org/'},
  
  {'id':14,'title':'Apache Maven',
  'des':'Apache Maven is a software project management and comprehension tool. It is based on the concept of a project object model (POM), and Maven can manage a project’s build, reporting, and documentation from a central piece of information.',
  'ref':'https://maven.apache.org/'},
  
  {'id':15,'title':'Splunk',
  'des':'Splunk is a platform for searching, monitoring, and examining machine-generated data. It provides real-time insights through searching, monitoring, and analyzing the logs generated by IT systems and technology infrastructure to enhance operational intelligence.',
  'ref':'https://www.splunk.com/'},
  
  {'id':16,'title':'Grafana',
  'des':'Grafana is an open-source platform for monitoring and observability. It allows you to query, visualize, alert on and understand your metrics no matter where they are stored, offering support for various databases and integrations with cloud services.',
  'ref':'https://grafana.com/'},
  
  {'id':17,'title':'Chef',
  'des':'Chef is an automation platform that manages infrastructure as code. It automates how applications are built, deployed, and managed across your network, enabling consistent, flexible, and scalable operations.',
  'ref':'https://www.chef.io/products/chef-infra'},
  
  {'id':18,'title':'Puppet',
  'des':'Puppet is an automation software that automates the provisioning, configuration, and management of servers. It provides a standard way to manage and deliver the software in an organization, ensuring consistency, reliability, and stability.',
  'ref':'https://puppet.com/'},
  
  {'id':19,'title':'Prometheus',
  'des':'Prometheus is an open-source monitoring and alerting toolkit designed for reliability and scalability. It collects metrics from configured targets at given intervals, evaluates rule expressions, displays the results, and triggers alerts if some conditions are observed to be true.',
  'ref':'https://prometheus.io/'},
  
  {'id':20,'title':'Git',
  'des':'Git is a distributed version control system used to track changes in source code throughout the development process. It enables multiple developers to work simultaneously, managing and merging multiple versions of a project, and providing a history of changes and an efficient way to collaborate.',
  'ref':'https://git-scm.com/'},
  {'id':21,'title':'CircleCI',
'des':'CircleCI is a continuous integration and delivery platform that automates the build, test, and deployment of software. It provides a modern platform for software teams to improve the speed, stability, and scalability of their CI/CD processes.',
'ref':'https://circleci.com/'},

{'id':22,'title':'Nexus Repository',
'des':'Nexus Repository OSS is an open source repository that supports many artifact formats, including Docker, Java™, and npm. With the Nexus tool integration, pipelines in your toolchain can publish and retrieve versioned apps and their dependencies by using central repositories that are accessible from other environments.',
'ref':'https://www.ibm.com/garage/method/practices/deliver/tool_nexus/'},

{'id':23,'title':'ELK Stack',
'des':'Its comprised of Elasticsearch, Kibana, Beats, and Logstash (also known as the ELK Stack) and more. Reliably and securely take data from any source, in any format, then search, analyze, and visualize.',
'ref':'https://www.elastic.co/what-is/elk-stack'},

{'id':24,'title':'Zabbix',
'des':'Zabbix is an open source monitoring software tool for diverse IT components, including networks, servers, virtual machines (VMs) and cloud services. Zabbix provides monitoring metrics, such as network utilization, CPU load and disk space consumption.',
'ref':'https://www.techtarget.com/searchitoperations/definition/Zabbix'},

{'id':25,'title':'Rancher',
'des':'Rancher is an open-source software for delivering Kubernetes-as-a-Service. It helps manage Kubernetes clusters across multiple infrastructures, offering operational and security best practices.',
'ref':'https://rancher.com/'},

{'id':26,'title':'SonarQube',
'des':'SonarQube is an open-source platform for continuous inspection of code quality. It provides a detailed report of bugs, code smells, and vulnerabilities in the codebase, helping improve its maintainability and reliability.',
'ref':'https://www.sonarqube.org/'},

{'id':27,'title':'Spinnaker',
'des':'Spinnaker is an open-source, multi-cloud continuous delivery platform that helps release software changes with high velocity and confidence. It was created at Netflix and is used by several other large-scale enterprises.',
'ref':'https://spinnaker.io/'},

{'id':28,'title':'Travis CI',
'des':'Travis CI is a hosted continuous integration service that provides build and test automation for GitHub projects. It supports multiple programming languages and integrates with many tools to enhance the CI/CD pipeline.',
'ref':'https://travis-ci.com/'},

{'id':29,'title':'Vagrant',
'des':'Vagrant is an open-source tool for building and maintaining portable virtual software development environments. It offers a simple way to configure, provision, and manage virtual machines, ensuring consistent environments for development.',
'ref':'https://www.vagrantup.com/'},

{'id':30,'title':'Consul',
'des':'HashiCorp Consul is a service networking solution that enables teams to manage secure network connectivity between services and across on-prem and multi-cloud environments and runtimes. Consul offers service discovery, service mesh, traffic management, and automated updates to network infrastructure device.',
'ref':'https://developer.hashicorp.com/consul/docs/intro'}
  
  
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


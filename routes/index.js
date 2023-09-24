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
'ref':'https://developer.hashicorp.com/consul/docs/intro'},

{'id':31,'title':'Bitbucket',
'des':'Bitbucket is a web-based version control repository hosting service, owned by Atlassian. It offers both Mercurial and Git repository management, with features such as code reviews, pull requests, and built-in continuous delivery.',
'ref':'https://bitbucket.org/'},

{'id':32,'title':'TeamCity',
'des':'TeamCity is a general-purpose CI/CD software platform that allows for flexible workflows, collaboration and development practices.Our solution will allow for successful continuous integration, continuous delivery, and continuous deployment within your DevOps process.',
'ref':'https://www.jetbrains.com/teamcity/'},

{'id':33,'title':'New Relic',
'des':'New Relic is a real-time monitoring tool that tracks and provides information about your web app performance. It helps you quickly catch and fix any performance issues more efficiently.',
'ref':'https://www.hostinger.com/tutorials/what-is-new-relic'},

{'id':34,'title':'Datadog',
'des':'Datadog is a monitoring and analytics tool for information technology (IT) and DevOps teams that can be used to determine performance metrics as well as event monitoring for infrastructure and cloud services. The software can monitor services such as servers, databases and tools.',
'ref':'https://www.techtarget.com/searchitoperations/definition/Datadog'},

{'id':35,'title':'AppDynamics',
'des':'AppDynamics is a leading Application Performance Management (APM) product. It is a tool that monitors your Application Infrastructure and gives you code level visibility. It is supported for all major technologies (Java, .NET, PHP, Node.js, NOSQL etc) and can be installed either as on-premise or as SaaS (Software As a Service) solution.',
'ref':'https://www.devopsschool.com/blog/what-is-appdynamics-and-how-it-works/'},

{'id':36,'title':'Buildkite',
'des':'Buildkite is a platform for running Continuous Integration (CI) pipelines on your infrastructure. This makes it fast, secure, and scalable. Builds are conducted through agents. These are small, reliable, and cross-platform build runners controlled through workflows defined in YAML.',
'ref':'https://octopus.com/blog/introducing-buildkite-integration#:~:text=Buildkite%20is%20a%20platform%20for,through%20workflows%20defined%20in%20YAML.'},

{'id':37,'title':'AWS Lambda',
'des':'AWS Lambda is a serverless compute service that runs your code in response to events, such as changes to data in an Amazon S3 bucket or updates to a DynamoDB table, allowing you to run code without provisioning or managing servers.',
'ref':'https://aws.amazon.com/lambda/'},

{'id':38,'title':'Azure DevOps',
'des':'Azure DevOps provides developer services for support teams to plan work, collaborate on code development, and build and deploy applications. It includes CI/CD, task tracking, and version control.',
'ref':'https://azure.microsoft.com/en-us/services/devops/'},

{'id':39,'title':'Octopus Deploy',
'des':'Octopus Deploy is an automated deployment and release management tool. It is designed to simplify deployment of ASP.NET applications, Windows Services, and databases.',
'ref':'https://octopus.com/'},

{'id':40,'title':'OpenShift',
'des':'Red Hat® OpenShift® is a unified platform to build, modernize, and deploy applications at scale. Work smarter and faster with a complete set of services for bringing apps to market on your choice of infrastructure.',
'ref':'https://www.redhat.com/en/technologies/cloud-computing/openshift'},
{ 'id': 41, title: "JFrog Artifactory", des: "JFrog Artifactory is a repository manager that supports all available software package types, enabling automated continous integration and delivery. Add Artifactory to your toolchain and store build artifacts in your Artifactory repository.", ref: "https://www.ibm.com/garage/method/practices/deliver/tool_artifactory/" },
{ 'id': 42, title: "Nexus Repository", des: "Nexus Repository OSS is an open source repository that supports many artifact formats, including Docker, Java™, and npm. With the Nexus tool integration, pipelines in your toolchain can publish and retrieve versioned apps and their dependencies by using central repositories that are accessible from other environments.", ref: "https://www.ibm.com/garage/method/practices/deliver/tool_nexus/" },
{ 'id': 43, title: "Archiva", des: "Apache Archiva™ is an extensible repository management software that helps taking care of your own personal or enterprise-wide build artifact repository. It is the perfect companion for build tools such as Maven, Continuum, and ANT.", ref: "https://archiva.apache.org/#:~:text=Apache%20Archiva™%20is%20an,Maven%2C%20Continuum%2C%20and%20ANT." },
{ 'id': 44, title: "Graylog", des: "Graylog is one example of a centralized log management platform that aims to solve this challenge. Graylog can ingest many terabytes of logs each day, and its web interface enables IT admins to efficiently sort and search through all of that data.", ref: "Ghttps://www.techtarget.com/searchitoperations/tutorial/Centrally-manage-IT-logs-with-this-Graylog-tutorial#:~:text=Graylog%20is%20one%20example%20of,through%20all%20of%20that%20data.l" },
{ 'id': 45, title: "ELK Stack", des: "The ELK stack is an acronym used to describe a stack that comprises three popular projects: Elasticsearch, Logstash, and Kibana.", ref: "https://aws.amazon.com/what-is/elk-stack/#:~:text=The%20ELK%20stack%20is%20an,Elasticsearch%2C%20Logstash%2C%20and%20Kibana." },
{ 'id': 46, title: "AWS CloudFormation", des: "AWS CloudFormation is a service provided by Amazon Web Services that enables users to model and manage infrastructure resources in an automated and secure manner. Using CloudFormation, developers can define and provision AWS infrastructure resources using a JSON or YAML formatted Infrastructure as Code template.", ref: "https://en.wikipedia.org/wiki/AWS_CloudFormation" },
{ 'id': 47, title: "Confluence", des: "Confluence is a web-based corporate wiki developed by Australian software company Atlassian. Atlassian wrote Confluence in the Java programming language and first published it in 2004. Confluence Standalone comes with a built-in Tomcat web server and hsql database, and also supports other databases.", ref: "https://en.wikipedia.org/wiki/Confluence_(software)" },
{ 'id': 48, title: "Microsoft Teams", des: "Microsoft Teams is the ultimate messaging app for your organization—a workspace for real-time collaboration and communication, meetings, file and app sharing, and even the occasional emoji! All in one place, all in the open, all accessible to everyone.", ref: "https://support.microsoft.com/en-us/topic/what-is-microsoft-teams-3de4d369-0167-8def-b93b-0eb5286d7a29" },
{ 'id': 49, title: "Apache Maven", des: "Apache Maven is a software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project's build, reporting and documentation from a central piece of information.", ref: "https://maven.apache.org" },
{ 'id': 50, title: "Gradle", des: "Gradle is a build automation tool known for its flexibility to build software. A build automation tool is used to automate the creation of applications. The building process includes compiling, linking, and packaging the code. The process becomes more consistent with the help of build automation tools.", ref: "https://www.simplilearn.com/tutorials/gradle-tutorial/what-is-gradle" }

  
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


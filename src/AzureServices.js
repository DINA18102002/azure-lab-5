import React from 'react';
import './App.css';

const services = [
  { name: "Azure Web App", type: "PaaS", description: "Fully managed platform for building and deploying web applications.", icon: "🌐" },
  { name: "Azure Function App", type: "Serverless", description: "Event-driven serverless compute for running code without managing servers.", icon: "⚡" },
  { name: "Azure Logic Apps", type: "Workflow Automation", description: "Automate business processes and integrate apps, data, and services.", icon: "🔄" },
  { name: "Azure Static Web Apps", type: "Frontend + Serverless API", description: "Modern web apps with global hosting, authentication, and serverless APIs.", icon: "🚀" },
  { name: "Azure App Service", type: "PaaS", description: "Host web apps, RESTful APIs, and mobile backends with auto-scaling.", icon: "🖥️" },
  { name: "Azure Container Apps", type: "Container Hosting", description: "Build and deploy containerized apps with serverless scaling.", icon: "📦" },
//   { name: "Azure Kubernetes Service (AKS)", type: "Orchestrated Containers", description: "Managed Kubernetes for deploying and managing containerized apps.", icon: "☸" },
//   { name: "Azure API Management", type: "API Gateway", description: "Publish, secure, and analyze APIs at scale.", icon: "🔗" }
];

const AzureServices = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>Azure Compute Services Dashboard</h1>
        <p>Explore popular Azure services for building and deploying modern applications.</p>
      </header>

      <div className="grid">
        {services.map((service, index) => (
          <div key={index} className="card">
            <div className="card-icon">{service.icon}</div>
            <h3>{service.name}</h3>
            <span className="tag">{service.type}</span>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>Powered by Microsoft Azure • Updated November 2025</p>
      </footer>
    </div>
  );
};

export default AzureServices;
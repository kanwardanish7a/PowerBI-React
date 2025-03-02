import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PowerBI Analytics Dashboard</h1>
          <p className="App-subtitle">Interactive and Real-Time Data Insights</p>
        </div>
      </header>

      <main className="App-main">
        <div className="dashboard-container">
          {/* First PowerBI Report */}
          <div className="report-container">
            <h2>Sales Performance Report</h2>
            <PowerBIEmbed
              embedConfig={{
                type: "report",
                id: "21ae81ce-3119-4af6-86c7-293084013612", // Replace with your report ID
                embedUrl:
                  "https://app.powerbi.com/reportEmbed?reportId=21ae81ce-3119-4af6-86c7-293084013612&groupId=19560939-7e08-428f-bf6c-fcdd226a14fe&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUQtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                accessToken:
                  "YOUR_ACCESS_TOKEN_FOR_REPORT_1", // Replace with your access token
                tokenType: models.TokenType.Aad,
                settings: {
                  panes: {
                    filters: {
                      expanded: false,
                      visible: false,
                    },
                  },
                  background: models.BackgroundType.Transparent,
                },
              }}
              cssClassName={"Embedded-container"}
              getEmbeddedComponent={(embeddedReport) => {
                window.report1 = embeddedReport;
              }}
            />
          </div>

          {/* Second PowerBI Report */}
          <div className="report-container">
            <h2>Customer Insights Report</h2>
            <PowerBIEmbed
              embedConfig={{
                type: "report",
                id: "another-report-id", // Replace with your second report ID
                embedUrl:
                  "https://app.powerbi.com/reportEmbed?reportId=another-report-id&groupId=19560939-7e08-428f-bf6c-fcdd226a14fe&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUQtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                accessToken:
                  "YOUR_ACCESS_TOKEN_FOR_REPORT_2", // Replace with your access token
                tokenType: models.TokenType.Aad,
                settings: {
                  panes: {
                    filters: {
                      expanded: false,
                      visible: false,
                    },
                  },
                  background: models.BackgroundType.Transparent,
                },
              }}
              cssClassName={"Embedded-container"}
              getEmbeddedComponent={(embeddedReport) => {
                window.report2 = embeddedReport;
              }}
            />
          </div>

          {/* Third PowerBI Dashboard */}
          <div className="report-container">
            <h2>Marketing Dashboard</h2>
            <PowerBIEmbed
              embedConfig={{
                type: "dashboard",
                id: "dashboard-id", // Replace with your dashboard ID
                embedUrl:
                  "https://app.powerbi.com/dashboardEmbed?dashboardId=dashboard-id&groupId=19560939-7e08-428f-bf6c-fcdd226a14fe&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUQtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                accessToken:
                  "YOUR_ACCESS_TOKEN_FOR_DASHBOARD", // Replace with your access token
                tokenType: models.TokenType.Aad,
              }}
              cssClassName={"Embedded-container"}
              getEmbeddedComponent={(embeddedDashboard) => {
                window.dashboard = embeddedDashboard;
              }}
            />
          </div>
        </div>
      </main>

      <footer className="App-footer">
        <p>© 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
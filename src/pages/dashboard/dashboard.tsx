import {
  AreaGraph,
  BarGraph,
  PieChart,
  StackGraph,
} from '@metrostar/comet-data-viz';
import { Card, CardBody, Table } from '@metrostar/comet-uswds';
import React from 'react';
import './dashboard.scss';

export const Dashboard = (): React.ReactElement => {
  // Sample data for the dashboard metrics
  const systemUptime = '99.9%';
  const activeIncidents = '3';
  const networkTraffic = '1.2 TB';
  const securityAlerts = '31';

  // Chart data for Real-Time System Performance (Stack Graph)
  const systemPerformanceData = [
    [
      { x: 0, y: 70 },
      { x: 1, y: 60 },
      { x: 2, y: 80 },
      { x: 3, y: 90 },
      { x: 4, y: 100 },
    ],
    [
      { x: 0, y: 130 },
      { x: 1, y: 120 },
      { x: 2, y: 140 },
      { x: 3, y: 160 },
      { x: 4, y: 180 },
    ],
  ];

  // Chart data for Monthly Trends (Area Graph)
  const monthlyTrendsData = [
    [
      { x: 0, y: 70 },
      { x: 1, y: 50 },
      { x: 2, y: 90 },
      { x: 3, y: 40 },
      { x: 4, y: 80 },
    ],
    [
      { x: 0, y: 20 },
      { x: 1, y: 30 },
      { x: 2, y: 10 },
      { x: 3, y: 50 },
      { x: 4, y: 35 },
    ],
  ];

  // Chart data for Security Events (Pie Chart)
  const securityEventsData = [
    { x: 'Normal', y: 60 },
    { x: 'Informational', y: 25 },
    { x: 'Warnings', y: 10 },
    { x: 'Critical', y: 5 },
  ];

  // Chart data for Network Traffic (Bar Graph)
  const networkTrafficData = [
    { x: '04:00', y: 150 },
    { x: '08:00', y: 800 },
    { x: '12:00', y: 300 },
    { x: '16:00', y: 50 },
    { x: '20:00', y: 180 },
  ];

  // Table data for Server Infrastructure Status
  const serverStatusColumns = [
    { id: 'server', name: 'Server' },
    { id: 'status', name: 'Status' },
    { id: 'cpuUsage', name: 'CPU Usage' },
    { id: 'memoryUsage', name: 'Memory Usage' },
    { id: 'uptime', name: 'Uptime' },
    { id: 'location', name: 'Location' },
  ];

  const serverStatusData = [
    {
      server: { value: 'WEB-01' },
      status: { value: 'Online' },
      cpuUsage: { value: '45%' },
      memoryUsage: { value: '62%' },
      uptime: { value: '99.9%' },
      location: { value: 'DC-East' },
    },
    {
      server: { value: 'DB-02' },
      status: { value: 'Maintenance' },
      cpuUsage: { value: '0%' },
      memoryUsage: { value: '0%' },
      uptime: { value: '98.2%' },
      location: { value: 'DC-West' },
    },
    {
      server: { value: 'API-01' },
      status: { value: 'Warning' },
      cpuUsage: { value: '78%' },
      memoryUsage: { value: '89%' },
      uptime: { value: '99.5%' },
      location: { value: 'DC-East' },
    },
  ];

  // Table data for Recent Incidents & Maintenance
  const incidentsColumns = [
    { id: 'incident', name: 'Incident' },
    { id: 'severity', name: 'Severity' },
    { id: 'status', name: 'Status' },
    { id: 'time', name: 'Time' },
    { id: 'duration', name: 'Duration' },
  ];

  const incidentsData = [
    {
      incident: { value: 'Database Connection Timeout' },
      severity: { value: 'High' },
      status: { value: 'Resolved' },
      time: { value: '2h ago' },
      duration: { value: '45min' },
    },
    {
      incident: { value: 'SSL Certificate Expiry Warning' },
      severity: { value: 'Medium' },
      status: { value: 'In Progress' },
      time: { value: '4h ago' },
      duration: { value: 'Ongoing' },
    },
    {
      incident: { value: 'Memory Usage Spike API-01' },
      severity: { value: 'High' },
      status: { value: 'Monitoring' },
      time: { value: '6h ago' },
      duration: { value: '2h 15min' },
    },
  ];

  return (
    <div className="grid-container">
      <div className="grid-row padding-bottom-4">
        <div className="grid-col">
          <h1>IT Operations Dashboard</h1>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid-row grid-gap margin-bottom-4">
        <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3">
          <Card id="system-uptime-card">
            <CardBody>
              <div className="dashboard-metric">
                <h3 className="dashboard-metric-label">SYSTEM UPTIME</h3>
                <div className="dashboard-metric-value dashboard-metric-value--success">
                  {systemUptime}
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3">
          <Card id="active-incidents-card">
            <CardBody>
              <div className="dashboard-metric">
                <h3 className="dashboard-metric-label">ACTIVE INCIDENTS</h3>
                <div className="dashboard-metric-value dashboard-metric-value--error">
                  {activeIncidents}
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3">
          <Card id="network-traffic-card">
            <CardBody>
              <div className="dashboard-metric">
                <h3 className="dashboard-metric-label">NETWORK TRAFFIC</h3>
                <div className="dashboard-metric-value dashboard-metric-value--info">
                  {networkTraffic}
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3">
          <Card id="security-alerts-card">
            <CardBody>
              <div className="dashboard-metric">
                <h3 className="dashboard-metric-label">SECURITY ALERTS</h3>
                <div className="dashboard-metric-value dashboard-metric-value--warning">
                  {securityAlerts}
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid-row grid-gap margin-bottom-4">
        <div className="grid-col-12 desktop:grid-col-6">
          <Card id="system-performance-card">
            <CardBody>
              <h2>Real-Time System Performance</h2>
              <p>CPU and Memory utilization over the last 24 hours</p>
              <div className="dashboard-chart">
                <StackGraph
                  chart={{
                    height: 400,
                    title: 'System Performance',
                    width: 600,
                  }}
                  colors={['#0d7ea2', '#cd425b']}
                  smooth
                  data={systemPerformanceData}
                />
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="grid-col-12 desktop:grid-col-6">
          <Card id="monthly-trends-card">
            <CardBody>
              <h2>Monthly Trends</h2>
              <p>System uptime and incident resolution</p>
              <div className="dashboard-chart">
                <AreaGraph
                  chart={{
                    height: 400,
                    title: 'Monthly Trends',
                    width: 600,
                  }}
                  colors={['#0d7ea2', '#cd425b']}
                  data={monthlyTrendsData}
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid-row grid-gap margin-bottom-4">
        <div className="grid-col-12 desktop:grid-col-6">
          <Card id="security-events-card">
            <CardBody>
              <h2>Security Events</h2>
              <p>Distribution by alert level</p>
              <div className="dashboard-chart">
                <PieChart
                  title="Security Events"
                  height={400}
                  width={400}
                  colors="warm"
                  data={securityEventsData}
                  innerRadius={0}
                />
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="grid-col-12 desktop:grid-col-6">
          <Card id="network-traffic-chart-card">
            <CardBody>
              <h2>Network Traffic</h2>
              <p>Hourly inbound/outbound data</p>
              <div className="dashboard-chart">
                <BarGraph
                  chart={{
                    title: 'Network Traffic',
                    width: 400,
                    height: 300,
                  }}
                  alignment="start"
                  color="#0d7ea2"
                  barRatio={1}
                  data={networkTrafficData}
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Tables Section */}
      <div className="grid-row margin-bottom-4">
        <div className="grid-col">
          <Card id="server-status-card">
            <CardBody>
              <h2>Server Infrastructure Status</h2>
              <p>Real-time monitoring of all production servers</p>
              <div className="dashboard-table">
                <Table
                  caption="Server Infrastructure Status"
                  columns={serverStatusColumns}
                  data={serverStatusData}
                  id="server-status-table"
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="grid-row margin-bottom-4">
        <div className="grid-col">
          <Card id="incidents-card">
            <CardBody>
              <h2>Recent Incidents & Maintenance</h2>
              <p>Latest system events and their resolution status</p>
              <div className="dashboard-table">
                <Table
                  caption="Recent Incidents & Maintenance"
                  columns={incidentsColumns}
                  data={incidentsData}
                  id="incidents-table"
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

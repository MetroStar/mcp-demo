import {
  AreaGraph,
  BarGraph,
  PieChart,
  StackGraph,
} from '@metrostar/comet-data-viz';
import {
  Card,
  CardBody,
  CardHeader,
  Search,
  Table,
} from '@metrostar/comet-uswds';
import React from 'react';

export const Dashboard = (): React.ReactElement => {
  // Mock data for charts
  const systemPerformanceData = [
    [
      { x: 0, y: 70 },
      { x: 1, y: 85 },
      { x: 2, y: 75 },
      { x: 3, y: 95 },
      { x: 4, y: 80 },
      { x: 5, y: 120 },
    ],
    [
      { x: 0, y: 40 },
      { x: 1, y: 55 },
      { x: 2, y: 45 },
      { x: 3, y: 65 },
      { x: 4, y: 50 },
      { x: 5, y: 80 },
    ],
  ];

  const monthlyTrendsData = [
    [
      { x: 0, y: 20 },
      { x: 1, y: 40 },
      { x: 2, y: 60 },
      { x: 3, y: 80 },
      { x: 4, y: 100 },
    ],
    [
      { x: 0, y: 50 },
      { x: 1, y: 45 },
      { x: 2, y: 35 },
      { x: 3, y: 25 },
      { x: 4, y: 15 },
    ],
  ];

  const securityEventsData = [
    { x: 'Normal', y: 65 },
    { x: 'Informational', y: 20 },
    { x: 'Warnings', y: 10 },
    { x: 'Critical', y: 5 },
  ];

  const networkTrafficData = [
    { x: '04:00', y: 150 },
    { x: '08:00', y: 800 },
    { x: '12:00', y: 300 },
    { x: '16:00', y: 50 },
    { x: '20:00', y: 175 },
  ];

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
      server: { value: 'WEB-01', sortValue: 'WEB-01' },
      status: { value: 'Online', sortValue: 'Online' },
      cpuUsage: { value: '45%', sortValue: '45' },
      memoryUsage: { value: '62%', sortValue: '62' },
      uptime: { value: '99.9%', sortValue: '99.9' },
      location: { value: 'DC East', sortValue: 'DC East' },
    },
    {
      server: { value: 'DB-02', sortValue: 'DB-02' },
      status: { value: 'Maintenance', sortValue: 'Maintenance' },
      cpuUsage: { value: '0%', sortValue: '0' },
      memoryUsage: { value: '0%', sortValue: '0' },
      uptime: { value: '98.2%', sortValue: '98.2' },
      location: { value: 'DC West', sortValue: 'DC West' },
    },
    {
      server: { value: 'API-01', sortValue: 'API-01' },
      status: { value: 'Warning', sortValue: 'Warning' },
      cpuUsage: { value: '78%', sortValue: '78' },
      memoryUsage: { value: '89%', sortValue: '89' },
      uptime: { value: '99.5%', sortValue: '99.5' },
      location: { value: 'DC East', sortValue: 'DC East' },
    },
  ];

  const incidentsColumns = [
    { id: 'incident', name: 'Incident' },
    { id: 'severity', name: 'Severity' },
    { id: 'status', name: 'Status' },
    { id: 'time', name: 'Time' },
    { id: 'duration', name: 'Duration' },
  ];

  const incidentsData = [
    {
      incident: {
        value: 'Database Connection Timeout',
        sortValue: 'Database Connection Timeout',
      },
      severity: { value: 'High', sortValue: 'High' },
      status: { value: 'Resolved', sortValue: 'Resolved' },
      time: { value: '2h ago', sortValue: '2' },
      duration: { value: '45min', sortValue: '45' },
    },
    {
      incident: {
        value: 'SSL Certificate Expiry Warning',
        sortValue: 'SSL Certificate Expiry Warning',
      },
      severity: { value: 'Medium', sortValue: 'Medium' },
      status: { value: 'In Progress', sortValue: 'In Progress' },
      time: { value: '4h ago', sortValue: '4' },
      duration: { value: 'Ongoing', sortValue: '999' },
    },
    {
      incident: {
        value: 'Memory Usage Spike API-01',
        sortValue: 'Memory Usage Spike API-01',
      },
      severity: { value: 'High', sortValue: 'High' },
      status: { value: 'Monitoring', sortValue: 'Monitoring' },
      time: { value: '6h ago', sortValue: '6' },
      duration: { value: '2h 15min', sortValue: '135' },
    },
  ];

  return (
    <div className="grid-container">
      {/* Header Section */}
      <div className="grid-row margin-bottom-4">
        <div className="grid-col display-flex flex-justify flex-align-end">
          <h1 className="margin-0">IT Operations Dashboard</h1>
          <div className="margin-left-auto">
            <Search id="dashboard-search" className="width-card" />
          </div>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid-row grid-gap-4 margin-bottom-4">
        <div className="grid-col-3">
          <Card id="system-uptime-card">
            <CardBody>
              <div className="text-base-light text-uppercase font-body-3xs margin-bottom-1">
                System Uptime
              </div>
              <div className="text-green font-heading-xl">99.9%</div>
            </CardBody>
          </Card>
        </div>
        <div className="grid-col-3">
          <Card id="active-incidents-card">
            <CardBody>
              <div className="text-base-light text-uppercase font-body-3xs margin-bottom-1">
                Active Incidents
              </div>
              <div className="text-red font-heading-xl">3</div>
            </CardBody>
          </Card>
        </div>
        <div className="grid-col-3">
          <Card id="network-traffic-card">
            <CardBody>
              <div className="text-base-light text-uppercase font-body-3xs margin-bottom-1">
                Network Traffic
              </div>
              <div className="text-blue font-heading-xl">1.2 TB</div>
            </CardBody>
          </Card>
        </div>
        <div className="grid-col-3">
          <Card id="security-alerts-card">
            <CardBody>
              <div className="text-base-light text-uppercase font-body-3xs margin-bottom-1">
                Security Alerts
              </div>
              <div className="text-gold font-heading-xl">31</div>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* First Chart Row */}
      <div className="grid-row grid-gap-4 margin-bottom-4">
        <div className="grid-col-6">
          <Card id="system-performance-card">
            <CardHeader>
              <h2 className="font-heading-lg margin-0">
                Real-Time System Performance
              </h2>
              <p className="text-base margin-0">
                CPU and Memory utilization over the last 24 hours
              </p>
            </CardHeader>
            <CardBody>
              <StackGraph
                chart={{ height: 400, title: 'System Performance', width: 600 }}
                colors={['#0d7ea2', '#cd425b']}
                smooth
                data={systemPerformanceData}
              />
            </CardBody>
          </Card>
        </div>
        <div className="grid-col-6">
          <Card id="monthly-trends-card">
            <CardHeader>
              <h2 className="font-heading-lg margin-0">Monthly Trends</h2>
              <p className="text-base margin-0">
                System uptime and incident resolution
              </p>
            </CardHeader>
            <CardBody>
              <AreaGraph
                chart={{ height: 400, title: 'Monthly Trends', width: 600 }}
                colors={['#0d7ea2', '#cd425b']}
                data={monthlyTrendsData}
              />
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Second Chart Row */}
      <div className="grid-row grid-gap-4 margin-bottom-4">
        <div className="grid-col-6">
          <Card id="security-events-card">
            <CardHeader>
              <h2 className="font-heading-lg margin-0">Security Events</h2>
              <p className="text-base margin-0">Distribution by alert level</p>
            </CardHeader>
            <CardBody>
              <PieChart
                title="Security Events"
                height={400}
                width={400}
                colors="warm"
                data={securityEventsData}
                innerRadius={0}
              />
            </CardBody>
          </Card>
        </div>
        <div className="grid-col-6">
          <Card id="network-traffic-chart-card">
            <CardHeader>
              <h2 className="font-heading-lg margin-0">Network Traffic</h2>
              <p className="text-base margin-0">Hourly inbound/outbound data</p>
            </CardHeader>
            <CardBody>
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
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Server Infrastructure Table */}
      <div className="grid-row margin-bottom-4">
        <div className="grid-col">
          <Card id="server-status-card">
            <CardHeader>
              <h2 className="font-heading-lg margin-0">
                Server Infrastructure Status
              </h2>
              <p className="text-base margin-0">
                Real-time monitoring of all production servers
              </p>
            </CardHeader>
            <CardBody>
              <Table
                caption="Server Status Data"
                columns={serverStatusColumns}
                data={serverStatusData}
                id="server-status-table"
              />
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Recent Incidents Table */}
      <div className="grid-row margin-bottom-4">
        <div className="grid-col">
          <Card id="incidents-card">
            <CardHeader>
              <h2 className="font-heading-lg margin-0">
                Recent Incidents & Maintenance
              </h2>
              <p className="text-base margin-0">
                Latest system events and their resolution status
              </p>
            </CardHeader>
            <CardBody>
              <Table
                caption="Incident Data"
                columns={incidentsColumns}
                data={incidentsData}
                id="incidents-table"
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

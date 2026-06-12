import type { INodeProperties } from 'n8n-workflow';

export const analyticsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics"
					]
				}
			},
			"options": [
				{
					"name": "Get Analytics Data Using GET",
					"value": "Get Analytics Data Using GET",
					"action": "Returns the results of executed query defined by the parameters passed in",
					"description": "Returns the results of executed query defined by the parameters passed in",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/analytics"
						}
					}
				},
				{
					"name": "Get Data Count Using GET",
					"value": "Get Data Count Using GET",
					"action": "Returns the count of executed query",
					"description": "Returns the count of executed query",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/analytics/count"
						}
					}
				},
				{
					"name": "Get Retention Using GET",
					"value": "Get Retention Using GET",
					"action": "Returns the percentage of user retention over the last 30 days",
					"description": "Returns the percentage of user retention over the last 30 days",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/analytics/rollingRetention"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/admin/analytics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics"
					],
					"operation": [
						"Get Analytics Data Using GET"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "apiKey",
			"required": true,
			"description": "apiKey",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics"
					],
					"operation": [
						"Get Analytics Data Using GET"
					]
				}
			}
		},
		{
			"displayName": "Stage",
			"name": "stage",
			"required": true,
			"description": "stage",
			"default": "LIVE",
			"type": "options",
			"options": [
				{
					"name": "LIVE",
					"value": "LIVE"
				},
				{
					"name": "PREVIEW",
					"value": "PREVIEW"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "stage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics"
					],
					"operation": [
						"Get Analytics Data Using GET"
					]
				}
			}
		},
		{
			"displayName": "Data Type",
			"name": "dataType",
			"required": true,
			"description": "dataType",
			"default": "activeDevices",
			"type": "options",
			"options": [
				{
					"name": "Active Devices",
					"value": "activeDevices"
				},
				{
					"name": "Active Locations",
					"value": "activeLocations"
				},
				{
					"name": "Active Users",
					"value": "activeUsers"
				},
				{
					"name": "Average Bandwidth Per User",
					"value": "averageBandwidthPerUser"
				},
				{
					"name": "Average Dau Over Mau",
					"value": "averageDauOverMau"
				},
				{
					"name": "Average Js Execution Time",
					"value": "averageJsExecutionTime"
				},
				{
					"name": "Average Requests Per User",
					"value": "averageRequestsPerUser"
				},
				{
					"name": "Average Response Time",
					"value": "averageResponseTime"
				},
				{
					"name": "Average Response Time Per Type",
					"value": "averageResponseTimePerType"
				},
				{
					"name": "Script Log Levels Count",
					"value": "scriptLogLevelsCount"
				},
				{
					"name": "Session Analytic",
					"value": "sessionAnalytic"
				},
				{
					"name": "Storage Per User",
					"value": "storagePerUser"
				},
				{
					"name": "Custom Analytic Total",
					"value": "customAnalyticTotal"
				},
				{
					"name": "Custom Analytic User",
					"value": "customAnalyticUser"
				},
				{
					"name": "Timed Analytic Total",
					"value": "timedAnalyticTotal"
				},
				{
					"name": "Session Analytic Total",
					"value": "sessionAnalyticTotal"
				},
				{
					"name": "Connected Users",
					"value": "connectedUsers"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "dataType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics"
					],
					"operation": [
						"Get Analytics Data Using GET"
					]
				}
			}
		},
		{
			"displayName": "Precision",
			"name": "precision",
			"required": true,
			"description": "precision",
			"default": "HOURLY",
			"type": "options",
			"options": [
				{
					"name": "HOURLY",
					"value": "HOURLY"
				},
				{
					"name": "DAILY",
					"value": "DAILY"
				},
				{
					"name": "MONTHLY",
					"value": "MONTHLY"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "precision",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics"
					],
					"operation": [
						"Get Analytics Data Using GET"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"required": true,
			"description": "yyyy-MM-dd",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics"
					],
					"operation": [
						"Get Analytics Data Using GET"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"required": true,
			"description": "yyyy-MM-dd",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics"
					],
					"operation": [
						"Get Analytics Data Using GET"
					]
				}
			}
		},
		{
			"displayName": "Keys",
			"name": "keys",
			"description": "the keys to select. For example \"ReturningUsers\", \"NewUsers\", etc",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "keys",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics"
					],
					"operation": [
						"Get Analytics Data Using GET"
					]
				}
			}
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/admin/analytics/count",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics"
					],
					"operation": [
						"Get Data Count Using GET"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "apiKey",
			"required": true,
			"description": "apiKey",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics"
					],
					"operation": [
						"Get Data Count Using GET"
					]
				}
			}
		},
		{
			"displayName": "Stage",
			"name": "stage",
			"required": true,
			"description": "stage",
			"default": "LIVE",
			"type": "options",
			"options": [
				{
					"name": "LIVE",
					"value": "LIVE"
				},
				{
					"name": "PREVIEW",
					"value": "PREVIEW"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "stage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics"
					],
					"operation": [
						"Get Data Count Using GET"
					]
				}
			}
		},
		{
			"displayName": "Query Name",
			"name": "queryName",
			"required": true,
			"description": "queryName",
			"default": "activeUsersNow",
			"type": "options",
			"options": [
				{
					"name": "Active Users Now",
					"value": "activeUsersNow"
				},
				{
					"name": "Daily Active Users",
					"value": "dailyActiveUsers"
				},
				{
					"name": "Average Daily Active Users",
					"value": "averageDailyActiveUsers"
				},
				{
					"name": "Last Monthly Active Users",
					"value": "lastMonthlyActiveUsers"
				},
				{
					"name": "Monthly Active Users",
					"value": "monthlyActiveUsers"
				},
				{
					"name": "Average Session Duration",
					"value": "averageSessionDuration"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "queryName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics"
					],
					"operation": [
						"Get Data Count Using GET"
					]
				}
			}
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/admin/analytics/rollingRetention",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics"
					],
					"operation": [
						"Get Retention Using GET"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "apiKey",
			"required": true,
			"description": "apiKey",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics"
					],
					"operation": [
						"Get Retention Using GET"
					]
				}
			}
		},
		{
			"displayName": "Stage",
			"name": "stage",
			"required": true,
			"description": "stage",
			"default": "LIVE",
			"type": "options",
			"options": [
				{
					"name": "LIVE",
					"value": "LIVE"
				},
				{
					"name": "PREVIEW",
					"value": "PREVIEW"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "stage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics"
					],
					"operation": [
						"Get Retention Using GET"
					]
				}
			}
		},
];

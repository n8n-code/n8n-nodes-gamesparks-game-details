import type { INodeProperties } from 'n8n-workflow';

export const notificationsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					]
				}
			},
			"options": [
				{
					"name": "Get Game Summary Using GET",
					"value": "Get Game Summary Using GET",
					"action": "getGameSummary",
					"description": "getGameSummary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/notifications/summary"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/admin/notifications/summary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Get Game Summary Using GET"
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
						"Notifications"
					],
					"operation": [
						"Get Game Summary Using GET"
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
						"Notifications"
					],
					"operation": [
						"Get Game Summary Using GET"
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
						"Notifications"
					],
					"operation": [
						"Get Game Summary Using GET"
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
						"Notifications"
					],
					"operation": [
						"Get Game Summary Using GET"
					]
				}
			}
		},
];

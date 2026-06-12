import type { INodeProperties } from 'n8n-workflow';

export const gamesAdminDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Games Admin"
					]
				}
			},
			"options": [
				{
					"name": "Get Games Endpoints Using GET",
					"value": "Get Games Endpoints Using GET",
					"action": "getGamesEndpoints",
					"description": "getGamesEndpoints",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/endpoints"
						}
					}
				},
				{
					"name": "Restore Deleted Game Using POST",
					"value": "Restore Deleted Game Using POST",
					"action": "restoreDeletedGame",
					"description": "restoreDeletedGame",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/restore"
						}
					}
				},
				{
					"name": "List Using GET",
					"value": "List Using GET",
					"action": "list",
					"description": "list",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/games"
						}
					}
				},
				{
					"name": "List Deleted Using GET",
					"value": "List Deleted Using GET",
					"action": "listDeleted",
					"description": "listDeleted",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/games/deleted"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/endpoints",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Games Admin"
					],
					"operation": [
						"Get Games Endpoints Using GET"
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
						"Games Admin"
					],
					"operation": [
						"Get Games Endpoints Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/restore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Games Admin"
					],
					"operation": [
						"Restore Deleted Game Using POST"
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
						"Games Admin"
					],
					"operation": [
						"Restore Deleted Game Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /restv2/games",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Games Admin"
					],
					"operation": [
						"List Using GET"
					]
				}
			}
		},
		{
			"displayName": "GET /restv2/games/deleted",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Games Admin"
					],
					"operation": [
						"List Deleted Using GET"
					]
				}
			}
		},
];

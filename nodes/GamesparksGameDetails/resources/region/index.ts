import type { INodeProperties } from 'n8n-workflow';

export const regionDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Region"
					]
				}
			},
			"options": [
				{
					"name": "Get Region Options Using GET",
					"value": "Get Region Options Using GET",
					"action": "getRegionOptions",
					"description": "getRegionOptions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/regions"
						}
					}
				},
				{
					"name": "Set Game Region Using POST",
					"value": "Set Game Region Using POST",
					"action": "setGameRegion",
					"description": "setGameRegion",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"gameApiKey\"]}}/region/{{$parameter[\"regionCode\"]}}"
						}
					}
				},
				{
					"name": "Get Game Region Options Using GET",
					"value": "Get Game Region Options Using GET",
					"action": "getGameRegionOptions",
					"description": "getGameRegionOptions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"gameApiKey\"]}}/regions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /restv2/game/regions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Region"
					],
					"operation": [
						"Get Region Options Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{gameApiKey}/region/{regionCode}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Region"
					],
					"operation": [
						"Set Game Region Using POST"
					]
				}
			}
		},
		{
			"displayName": "Game API Key",
			"name": "gameApiKey",
			"required": true,
			"description": "gameApiKey",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Region"
					],
					"operation": [
						"Set Game Region Using POST"
					]
				}
			}
		},
		{
			"displayName": "Region Code",
			"name": "regionCode",
			"required": true,
			"description": "regionCode",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Region"
					],
					"operation": [
						"Set Game Region Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /restv2/game/{gameApiKey}/regions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Region"
					],
					"operation": [
						"Get Game Region Options Using GET"
					]
				}
			}
		},
		{
			"displayName": "Game API Key",
			"name": "gameApiKey",
			"required": true,
			"description": "gameApiKey",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Region"
					],
					"operation": [
						"Get Game Region Options Using GET"
					]
				}
			}
		},
];

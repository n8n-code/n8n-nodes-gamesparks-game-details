import type { INodeProperties } from 'n8n-workflow';

export const scriptsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Scripts"
					]
				}
			},
			"options": [
				{
					"name": "Get Script Differences Using GET",
					"value": "Get Script Differences Using GET",
					"action": "getScriptDifferences",
					"description": "getScriptDifferences",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/scripts/differences/{{$parameter[\"snapshotId1\"]}}/{{$parameter[\"snapshotId2\"]}}"
						}
					}
				},
				{
					"name": "Export Zip Using GET",
					"value": "Export Zip Using GET",
					"action": "exportZip",
					"description": "exportZip",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/scripts/export"
						}
					}
				},
				{
					"name": "Import Accept Using POST",
					"value": "Import Accept Using POST",
					"action": "importAccept",
					"description": "importAccept",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/scripts/import/accept"
						}
					}
				},
				{
					"name": "Import Zip Using POST",
					"value": "Import Zip Using POST",
					"action": "importZip",
					"description": "importZip",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/scripts/import/preview"
						}
					}
				},
				{
					"name": "Get Script Versions Using GET 1",
					"value": "Get Script Versions Using GET 1",
					"action": "getScriptVersions",
					"description": "getScriptVersions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/scripts/versions"
						}
					}
				},
				{
					"name": "Get Script Versions Using GET",
					"value": "Get Script Versions Using GET",
					"action": "getScriptVersions",
					"description": "getScriptVersions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/scripts/versions/{{$parameter[\"page\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/admin/scripts/differences/{snapshotId1}/{snapshotId2}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scripts"
					],
					"operation": [
						"Get Script Differences Using GET"
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
						"Scripts"
					],
					"operation": [
						"Get Script Differences Using GET"
					]
				}
			}
		},
		{
			"displayName": "Snapshot ID 1",
			"name": "snapshotId1",
			"required": true,
			"description": "snapshotId1",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Scripts"
					],
					"operation": [
						"Get Script Differences Using GET"
					]
				}
			}
		},
		{
			"displayName": "Snapshot ID 2",
			"name": "snapshotId2",
			"required": true,
			"description": "snapshotId2",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Scripts"
					],
					"operation": [
						"Get Script Differences Using GET"
					]
				}
			}
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/admin/scripts/export",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scripts"
					],
					"operation": [
						"Export Zip Using GET"
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
						"Scripts"
					],
					"operation": [
						"Export Zip Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/admin/scripts/import/accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scripts"
					],
					"operation": [
						"Import Accept Using POST"
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
						"Scripts"
					],
					"operation": [
						"Import Accept Using POST"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"required": true,
			"description": "body",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "body",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Scripts"
					],
					"operation": [
						"Import Accept Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/admin/scripts/import/accept<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scripts"
					],
					"operation": [
						"Import Accept Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/admin/scripts/import/preview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scripts"
					],
					"operation": [
						"Import Zip Using POST"
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
						"Scripts"
					],
					"operation": [
						"Import Zip Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/admin/scripts/import/preview<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scripts"
					],
					"operation": [
						"Import Zip Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/admin/scripts/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scripts"
					],
					"operation": [
						"Get Script Versions Using GET 1"
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
						"Scripts"
					],
					"operation": [
						"Get Script Versions Using GET 1"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "pageSize",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageSize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Scripts"
					],
					"operation": [
						"Get Script Versions Using GET 1"
					]
				}
			}
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/admin/scripts/versions/{page}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scripts"
					],
					"operation": [
						"Get Script Versions Using GET"
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
						"Scripts"
					],
					"operation": [
						"Get Script Versions Using GET"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"required": true,
			"description": "page",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Scripts"
					],
					"operation": [
						"Get Script Versions Using GET"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "pageSize",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageSize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Scripts"
					],
					"operation": [
						"Get Script Versions Using GET"
					]
				}
			}
		},
];

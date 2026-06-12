import type { INodeProperties } from 'n8n-workflow';

export const experimentsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					]
				}
			},
			"options": [
				{
					"name": "Get Experiments Using GET",
					"value": "Get Experiments Using GET",
					"action": "getExperiments",
					"description": "getExperiments",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/experiments"
						}
					}
				},
				{
					"name": "Create Experiment Using POST",
					"value": "Create Experiment Using POST",
					"action": "createExperiment",
					"description": "createExperiment",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/experiments"
						}
					}
				},
				{
					"name": "Delete Experiment Using DELETE",
					"value": "Delete Experiment Using DELETE",
					"action": "deleteExperiment",
					"description": "deleteExperiment",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/experiments/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Experiment Using GET",
					"value": "Get Experiment Using GET",
					"action": "getExperiment",
					"description": "getExperiment",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/experiments/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Experiment Using PUT",
					"value": "Update Experiment Using PUT",
					"action": "updateExperiment",
					"description": "updateExperiment",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/experiments/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Do Action Experiment Using POST",
					"value": "Do Action Experiment Using POST",
					"action": "doActionExperiment",
					"description": "doActionExperiment",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/experiments/{{$parameter[\"id\"]}}/{{$parameter[\"action\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/manage/experiments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Get Experiments Using GET"
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
						"Experiments"
					],
					"operation": [
						"Get Experiments Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/manage/experiments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Create Experiment Using POST"
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
						"Experiments"
					],
					"operation": [
						"Create Experiment Using POST"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Create Experiment Using POST"
					]
				}
			}
		},
		{
			"displayName": "Changed Fields And Initial Values",
			"name": "changedFieldsAndInitialValues",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "changedFieldsAndInitialValues",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Create Experiment Using POST"
					]
				}
			}
		},
		{
			"displayName": "Complete",
			"name": "complete",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "complete",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Create Experiment Using POST"
					]
				}
			}
		},
		{
			"displayName": "Config",
			"name": "config",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "config",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Create Experiment Using POST"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "endDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Create Experiment Using POST"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Create Experiment Using POST"
					]
				}
			}
		},
		{
			"displayName": "Measurements",
			"name": "measurements",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "measurements",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Create Experiment Using POST"
					]
				}
			}
		},
		{
			"displayName": "Measurements Es Query",
			"name": "measurementsEsQuery",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "measurementsEsQuery",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Create Experiment Using POST"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Create Experiment Using POST"
					]
				}
			}
		},
		{
			"displayName": "Percent Hash",
			"name": "percentHash",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "percentHash",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Create Experiment Using POST"
					]
				}
			}
		},
		{
			"displayName": "Published Stages",
			"name": "publishedStages",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "publishedStages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Create Experiment Using POST"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Create Experiment Using POST"
					]
				}
			}
		},
		{
			"displayName": "DELETE /restv2/game/{apiKey}/manage/experiments/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Delete Experiment Using DELETE"
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
						"Experiments"
					],
					"operation": [
						"Delete Experiment Using DELETE"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "id",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Delete Experiment Using DELETE"
					]
				}
			}
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/manage/experiments/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Get Experiment Using GET"
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
						"Experiments"
					],
					"operation": [
						"Get Experiment Using GET"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "id",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Get Experiment Using GET"
					]
				}
			}
		},
		{
			"displayName": "PUT /restv2/game/{apiKey}/manage/experiments/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Update Experiment Using PUT"
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
						"Experiments"
					],
					"operation": [
						"Update Experiment Using PUT"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "id",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Update Experiment Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Update Experiment Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Changed Fields And Initial Values",
			"name": "changedFieldsAndInitialValues",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "changedFieldsAndInitialValues",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Update Experiment Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Complete",
			"name": "complete",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "complete",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Update Experiment Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Config",
			"name": "config",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "config",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Update Experiment Using PUT"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "endDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Update Experiment Using PUT"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Update Experiment Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Measurements",
			"name": "measurements",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "measurements",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Update Experiment Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Measurements Es Query",
			"name": "measurementsEsQuery",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "measurementsEsQuery",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Update Experiment Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Update Experiment Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Percent Hash",
			"name": "percentHash",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "percentHash",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Update Experiment Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Published Stages",
			"name": "publishedStages",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "publishedStages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Update Experiment Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Update Experiment Using PUT"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/manage/experiments/{id}/{action}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Do Action Experiment Using POST"
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
						"Experiments"
					],
					"operation": [
						"Do Action Experiment Using POST"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "id",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Do Action Experiment Using POST"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "action",
			"required": true,
			"description": "action",
			"default": "start",
			"type": "options",
			"options": [
				{
					"name": "Start",
					"value": "start"
				},
				{
					"name": "Stop",
					"value": "stop"
				},
				{
					"name": "Publish",
					"value": "publish"
				},
				{
					"name": "Unpublish",
					"value": "unpublish"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Experiments"
					],
					"operation": [
						"Do Action Experiment Using POST"
					]
				}
			}
		},
];

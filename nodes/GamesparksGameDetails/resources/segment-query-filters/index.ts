import type { INodeProperties } from 'n8n-workflow';

export const segmentQueryFiltersDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Segment Query Filters"
					]
				}
			},
			"options": [
				{
					"name": "Get Segment Query Filters Using GET",
					"value": "Get Segment Query Filters Using GET",
					"action": "getSegmentQueryFilters",
					"description": "getSegmentQueryFilters",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/segmentQueryFilters"
						}
					}
				},
				{
					"name": "Get Segment Query Filters Config Using GET",
					"value": "Get Segment Query Filters Config Using GET",
					"action": "getSegmentQueryFiltersConfig",
					"description": "getSegmentQueryFiltersConfig",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/segmentQueryFilters/config"
						}
					}
				},
				{
					"name": "Update Segment Query Filters Config Using PUT",
					"value": "Update Segment Query Filters Config Using PUT",
					"action": "updateSegmentQueryFiltersConfig",
					"description": "updateSegmentQueryFiltersConfig",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/segmentQueryFilters/config"
						}
					}
				},
				{
					"name": "Get Segment Query Standard Filters Using GET",
					"value": "Get Segment Query Standard Filters Using GET",
					"action": "getSegmentQueryStandardFilters",
					"description": "getSegmentQueryStandardFilters",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/segmentQueryFilters/standardFilters"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/admin/segmentQueryFilters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Segment Query Filters"
					],
					"operation": [
						"Get Segment Query Filters Using GET"
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
						"Segment Query Filters"
					],
					"operation": [
						"Get Segment Query Filters Using GET"
					]
				}
			}
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/admin/segmentQueryFilters/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Segment Query Filters"
					],
					"operation": [
						"Get Segment Query Filters Config Using GET"
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
						"Segment Query Filters"
					],
					"operation": [
						"Get Segment Query Filters Config Using GET"
					]
				}
			}
		},
		{
			"displayName": "PUT /restv2/game/{apiKey}/admin/segmentQueryFilters/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Segment Query Filters"
					],
					"operation": [
						"Update Segment Query Filters Config Using PUT"
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
						"Segment Query Filters"
					],
					"operation": [
						"Update Segment Query Filters Config Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Custom Filters",
			"name": "customFilters",
			"type": "json",
			"default": "[\n  {\n    \"options\": [\n      null\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "customFilters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Segment Query Filters"
					],
					"operation": [
						"Update Segment Query Filters Config Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Hidden Filters",
			"name": "hiddenFilters",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "hiddenFilters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Segment Query Filters"
					],
					"operation": [
						"Update Segment Query Filters Config Using PUT"
					]
				}
			}
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/admin/segmentQueryFilters/standardFilters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Segment Query Filters"
					],
					"operation": [
						"Get Segment Query Standard Filters Using GET"
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
						"Segment Query Filters"
					],
					"operation": [
						"Get Segment Query Standard Filters Using GET"
					]
				}
			}
		},
];

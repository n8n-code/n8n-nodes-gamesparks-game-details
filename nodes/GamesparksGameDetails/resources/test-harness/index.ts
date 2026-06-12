import type { INodeProperties } from 'n8n-workflow';

export const testHarnessDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Test Harness"
					]
				}
			},
			"options": [
				{
					"name": "Get Test Harness Scenarios Using GET",
					"value": "Get Test Harness Scenarios Using GET",
					"action": "getTestHarnessScenarios",
					"description": "getTestHarnessScenarios",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/testHarness/scenarios"
						}
					}
				},
				{
					"name": "Create Test Harness Scenario Using POST",
					"value": "Create Test Harness Scenario Using POST",
					"action": "createTestHarnessScenario",
					"description": "createTestHarnessScenario",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/testHarness/scenarios"
						}
					}
				},
				{
					"name": "Delete Test Harness Scenario Using DELETE",
					"value": "Delete Test Harness Scenario Using DELETE",
					"action": "deleteTestHarnessScenario",
					"description": "deleteTestHarnessScenario",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/testHarness/scenarios/{{$parameter[\"scenarioName\"]}}"
						}
					}
				},
				{
					"name": "Get Test Harness Scenario Using GET",
					"value": "Get Test Harness Scenario Using GET",
					"action": "getTestHarnessScenario",
					"description": "getTestHarnessScenario",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/testHarness/scenarios/{{$parameter[\"scenarioName\"]}}"
						}
					}
				},
				{
					"name": "Update Test Harness Scenario Using PUT",
					"value": "Update Test Harness Scenario Using PUT",
					"action": "updateTestHarnessScenario",
					"description": "updateTestHarnessScenario",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/testHarness/scenarios/{{$parameter[\"scenarioName\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/admin/testHarness/scenarios",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Test Harness"
					],
					"operation": [
						"Get Test Harness Scenarios Using GET"
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
						"Test Harness"
					],
					"operation": [
						"Get Test Harness Scenarios Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/admin/testHarness/scenarios",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Test Harness"
					],
					"operation": [
						"Create Test Harness Scenario Using POST"
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
						"Test Harness"
					],
					"operation": [
						"Create Test Harness Scenario Using POST"
					]
				}
			}
		},
		{
			"displayName": "Scenario JSON",
			"name": "scenarioJson",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "scenarioJson",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Test Harness"
					],
					"operation": [
						"Create Test Harness Scenario Using POST"
					]
				}
			}
		},
		{
			"displayName": "Scenario Name",
			"name": "scenarioName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "scenarioName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Test Harness"
					],
					"operation": [
						"Create Test Harness Scenario Using POST"
					]
				}
			}
		},
		{
			"displayName": "DELETE /restv2/game/{apiKey}/admin/testHarness/scenarios/{scenarioName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Test Harness"
					],
					"operation": [
						"Delete Test Harness Scenario Using DELETE"
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
						"Test Harness"
					],
					"operation": [
						"Delete Test Harness Scenario Using DELETE"
					]
				}
			}
		},
		{
			"displayName": "Scenario Name",
			"name": "scenarioName",
			"required": true,
			"description": "scenarioName",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Test Harness"
					],
					"operation": [
						"Delete Test Harness Scenario Using DELETE"
					]
				}
			}
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/admin/testHarness/scenarios/{scenarioName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Test Harness"
					],
					"operation": [
						"Get Test Harness Scenario Using GET"
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
						"Test Harness"
					],
					"operation": [
						"Get Test Harness Scenario Using GET"
					]
				}
			}
		},
		{
			"displayName": "Scenario Name",
			"name": "scenarioName",
			"required": true,
			"description": "scenarioName",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Test Harness"
					],
					"operation": [
						"Get Test Harness Scenario Using GET"
					]
				}
			}
		},
		{
			"displayName": "PUT /restv2/game/{apiKey}/admin/testHarness/scenarios/{scenarioName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Test Harness"
					],
					"operation": [
						"Update Test Harness Scenario Using PUT"
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
						"Test Harness"
					],
					"operation": [
						"Update Test Harness Scenario Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Scenario Name",
			"name": "scenarioName",
			"required": true,
			"description": "scenarioName",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Test Harness"
					],
					"operation": [
						"Update Test Harness Scenario Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Scenario JSON",
			"name": "scenarioJson",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "scenarioJson",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Test Harness"
					],
					"operation": [
						"Update Test Harness Scenario Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Scenario Name",
			"name": "scenarioName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "scenarioName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Test Harness"
					],
					"operation": [
						"Update Test Harness Scenario Using PUT"
					]
				}
			}
		},
];

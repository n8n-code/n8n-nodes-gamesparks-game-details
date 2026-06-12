import type { INodeProperties } from 'n8n-workflow';

export const manageDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					]
				}
			},
			"options": [
				{
					"name": "List Queries Using GET",
					"value": "List Queries Using GET",
					"action": "listQueries",
					"description": "listQueries",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/queries"
						}
					}
				},
				{
					"name": "Create Query Using POST",
					"value": "Create Query Using POST",
					"action": "createQuery",
					"description": "createQuery",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/queries"
						}
					}
				},
				{
					"name": "Delete Query Using DELETE",
					"value": "Delete Query Using DELETE",
					"action": "deleteQuery",
					"description": "deleteQuery",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/queries/{{$parameter[\"shortCode\"]}}"
						}
					}
				},
				{
					"name": "Get Query Using GET",
					"value": "Get Query Using GET",
					"action": "getQuery",
					"description": "getQuery",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/queries/{{$parameter[\"shortCode\"]}}"
						}
					}
				},
				{
					"name": "Update Query Using PUT",
					"value": "Update Query Using PUT",
					"action": "updateQuery",
					"description": "updateQuery",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/queries/{{$parameter[\"shortCode\"]}}"
						}
					}
				},
				{
					"name": "List Screens Using GET",
					"value": "List Screens Using GET",
					"action": "listScreens",
					"description": "listScreens",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/screens"
						}
					}
				},
				{
					"name": "Create Screen Using POST",
					"value": "Create Screen Using POST",
					"action": "createScreen",
					"description": "createScreen",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/screens"
						}
					}
				},
				{
					"name": "List Executable Screens Using GET",
					"value": "List Executable Screens Using GET",
					"action": "listExecutableScreens",
					"description": "listExecutableScreens",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/screens/executable"
						}
					}
				},
				{
					"name": "Delete Screen Using DELETE",
					"value": "Delete Screen Using DELETE",
					"action": "deleteScreen",
					"description": "deleteScreen",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/screens/{{$parameter[\"shortCode\"]}}"
						}
					}
				},
				{
					"name": "Get Screen Using GET",
					"value": "Get Screen Using GET",
					"action": "getScreen",
					"description": "getScreen",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/screens/{{$parameter[\"shortCode\"]}}"
						}
					}
				},
				{
					"name": "Update Screen Using PUT",
					"value": "Update Screen Using PUT",
					"action": "updateScreen",
					"description": "updateScreen",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/screens/{{$parameter[\"shortCode\"]}}"
						}
					}
				},
				{
					"name": "List Snapshots Using GET",
					"value": "List Snapshots Using GET",
					"action": "listSnapshots",
					"description": "listSnapshots",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/snapshots"
						}
					}
				},
				{
					"name": "Create Snapshot Using POST",
					"value": "Create Snapshot Using POST",
					"action": "createSnapshot",
					"description": "createSnapshot",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/snapshots"
						}
					}
				},
				{
					"name": "Delete Snapshot Using DELETE",
					"value": "Delete Snapshot Using DELETE",
					"action": "deleteSnapshot",
					"description": "deleteSnapshot",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/snapshots/{{$parameter[\"snapshotId\"]}}"
						}
					}
				},
				{
					"name": "Copy Snapshot To Existing Game Using POST",
					"value": "Copy Snapshot To Existing Game Using POST",
					"action": "copySnapshotToExistingGame",
					"description": "copySnapshotToExistingGame",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/snapshots/{{$parameter[\"snapshotId\"]}}/copy/to/{{$parameter[\"targetApiKey\"]}}"
						}
					}
				},
				{
					"name": "Publish Snapshot Using POST",
					"value": "Publish Snapshot Using POST",
					"action": "publishSnapshot",
					"description": "publishSnapshot",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/snapshots/{{$parameter[\"snapshotId\"]}}/publish"
						}
					}
				},
				{
					"name": "Revert Snapshot Using POST",
					"value": "Revert Snapshot Using POST",
					"action": "revertSnapshot",
					"description": "revertSnapshot",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/snapshots/{{$parameter[\"snapshotId\"]}}/revert"
						}
					}
				},
				{
					"name": "List Snippets Using GET",
					"value": "List Snippets Using GET",
					"action": "listSnippets",
					"description": "listSnippets",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/snippets"
						}
					}
				},
				{
					"name": "Create Snippet Using POST",
					"value": "Create Snippet Using POST",
					"action": "createSnippet",
					"description": "createSnippet",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/snippets"
						}
					}
				},
				{
					"name": "Delete Snippet Using DELETE",
					"value": "Delete Snippet Using DELETE",
					"action": "deleteSnippet",
					"description": "deleteSnippet",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/snippets/{{$parameter[\"shortCode\"]}}"
						}
					}
				},
				{
					"name": "Get Snippet Using GET",
					"value": "Get Snippet Using GET",
					"action": "getSnippet",
					"description": "getSnippet",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/snippets/{{$parameter[\"shortCode\"]}}"
						}
					}
				},
				{
					"name": "Update Snippet Using PUT",
					"value": "Update Snippet Using PUT",
					"action": "updateSnippet",
					"description": "updateSnippet",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/manage/snippets/{{$parameter[\"shortCode\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/manage/queries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"List Queries Using GET"
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
						"Manage"
					],
					"operation": [
						"List Queries Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/manage/queries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Create Query Using POST"
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
						"Manage"
					],
					"operation": [
						"Create Query Using POST"
					]
				}
			}
		},
		{
			"displayName": "Es Rules",
			"name": "esRules",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "esRules",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Create Query Using POST"
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
						"Manage"
					],
					"operation": [
						"Create Query Using POST"
					]
				}
			}
		},
		{
			"displayName": "Qb Rules",
			"name": "qbRules",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "qbRules",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Create Query Using POST"
					]
				}
			}
		},
		{
			"displayName": "Short Code",
			"name": "shortCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "shortCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Create Query Using POST"
					]
				}
			}
		},
		{
			"displayName": "DELETE /restv2/game/{apiKey}/manage/queries/{shortCode}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Delete Query Using DELETE"
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
						"Manage"
					],
					"operation": [
						"Delete Query Using DELETE"
					]
				}
			}
		},
		{
			"displayName": "Short Code",
			"name": "shortCode",
			"required": true,
			"description": "shortCode",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Delete Query Using DELETE"
					]
				}
			}
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/manage/queries/{shortCode}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Get Query Using GET"
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
						"Manage"
					],
					"operation": [
						"Get Query Using GET"
					]
				}
			}
		},
		{
			"displayName": "Short Code",
			"name": "shortCode",
			"required": true,
			"description": "shortCode",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Get Query Using GET"
					]
				}
			}
		},
		{
			"displayName": "PUT /restv2/game/{apiKey}/manage/queries/{shortCode}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Update Query Using PUT"
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
						"Manage"
					],
					"operation": [
						"Update Query Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Short Code",
			"name": "shortCode",
			"required": true,
			"description": "shortCode",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Update Query Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Es Rules",
			"name": "esRules",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "esRules",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Update Query Using PUT"
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
						"Manage"
					],
					"operation": [
						"Update Query Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Qb Rules",
			"name": "qbRules",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "qbRules",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Update Query Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Short Code",
			"name": "shortCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "shortCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Update Query Using PUT"
					]
				}
			}
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/manage/screens",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"List Screens Using GET"
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
						"Manage"
					],
					"operation": [
						"List Screens Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/manage/screens",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Create Screen Using POST"
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
						"Manage"
					],
					"operation": [
						"Create Screen Using POST"
					]
				}
			}
		},
		{
			"displayName": "Groups",
			"name": "groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Create Screen Using POST"
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
						"Manage"
					],
					"operation": [
						"Create Screen Using POST"
					]
				}
			}
		},
		{
			"displayName": "Short Code",
			"name": "shortCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "shortCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Create Screen Using POST"
					]
				}
			}
		},
		{
			"displayName": "Template",
			"name": "template",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "template",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Create Screen Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/manage/screens/executable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"List Executable Screens Using GET"
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
						"Manage"
					],
					"operation": [
						"List Executable Screens Using GET"
					]
				}
			}
		},
		{
			"displayName": "DELETE /restv2/game/{apiKey}/manage/screens/{shortCode}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Delete Screen Using DELETE"
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
						"Manage"
					],
					"operation": [
						"Delete Screen Using DELETE"
					]
				}
			}
		},
		{
			"displayName": "Short Code",
			"name": "shortCode",
			"required": true,
			"description": "shortCode",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Delete Screen Using DELETE"
					]
				}
			}
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/manage/screens/{shortCode}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Get Screen Using GET"
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
						"Manage"
					],
					"operation": [
						"Get Screen Using GET"
					]
				}
			}
		},
		{
			"displayName": "Short Code",
			"name": "shortCode",
			"required": true,
			"description": "shortCode",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Get Screen Using GET"
					]
				}
			}
		},
		{
			"displayName": "PUT /restv2/game/{apiKey}/manage/screens/{shortCode}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Update Screen Using PUT"
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
						"Manage"
					],
					"operation": [
						"Update Screen Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Short Code",
			"name": "shortCode",
			"required": true,
			"description": "shortCode",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Update Screen Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Groups",
			"name": "groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Update Screen Using PUT"
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
						"Manage"
					],
					"operation": [
						"Update Screen Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Short Code",
			"name": "shortCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "shortCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Update Screen Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Template",
			"name": "template",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "template",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Update Screen Using PUT"
					]
				}
			}
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/manage/snapshots",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"List Snapshots Using GET"
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
						"Manage"
					],
					"operation": [
						"List Snapshots Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/manage/snapshots",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Create Snapshot Using POST"
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
						"Manage"
					],
					"operation": [
						"Create Snapshot Using POST"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Create Snapshot Using POST"
					]
				}
			}
		},
		{
			"displayName": "DELETE /restv2/game/{apiKey}/manage/snapshots/{snapshotId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Delete Snapshot Using DELETE"
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
						"Manage"
					],
					"operation": [
						"Delete Snapshot Using DELETE"
					]
				}
			}
		},
		{
			"displayName": "Snapshot ID",
			"name": "snapshotId",
			"required": true,
			"description": "snapshotId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Delete Snapshot Using DELETE"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/manage/snapshots/{snapshotId}/copy/to/{targetApiKey}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Copy Snapshot To Existing Game Using POST"
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
						"Manage"
					],
					"operation": [
						"Copy Snapshot To Existing Game Using POST"
					]
				}
			}
		},
		{
			"displayName": "Snapshot ID",
			"name": "snapshotId",
			"required": true,
			"description": "snapshotId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Copy Snapshot To Existing Game Using POST"
					]
				}
			}
		},
		{
			"displayName": "Target API Key",
			"name": "targetApiKey",
			"required": true,
			"description": "targetApiKey",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Copy Snapshot To Existing Game Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/manage/snapshots/{snapshotId}/publish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Publish Snapshot Using POST"
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
						"Manage"
					],
					"operation": [
						"Publish Snapshot Using POST"
					]
				}
			}
		},
		{
			"displayName": "Snapshot ID",
			"name": "snapshotId",
			"required": true,
			"description": "snapshotId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Publish Snapshot Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/manage/snapshots/{snapshotId}/revert",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Revert Snapshot Using POST"
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
						"Manage"
					],
					"operation": [
						"Revert Snapshot Using POST"
					]
				}
			}
		},
		{
			"displayName": "Snapshot ID",
			"name": "snapshotId",
			"required": true,
			"description": "snapshotId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Revert Snapshot Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/manage/snippets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"List Snippets Using GET"
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
						"Manage"
					],
					"operation": [
						"List Snippets Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/manage/snippets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Create Snippet Using POST"
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
						"Manage"
					],
					"operation": [
						"Create Snippet Using POST"
					]
				}
			}
		},
		{
			"displayName": "Groups",
			"name": "groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Create Snippet Using POST"
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
						"Manage"
					],
					"operation": [
						"Create Snippet Using POST"
					]
				}
			}
		},
		{
			"displayName": "Script",
			"name": "script",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "script",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Create Snippet Using POST"
					]
				}
			}
		},
		{
			"displayName": "Script Data",
			"name": "scriptData",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "scriptData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Create Snippet Using POST"
					]
				}
			}
		},
		{
			"displayName": "Short Code",
			"name": "shortCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "shortCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Create Snippet Using POST"
					]
				}
			}
		},
		{
			"displayName": "Template",
			"name": "template",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "template",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Create Snippet Using POST"
					]
				}
			}
		},
		{
			"displayName": "DELETE /restv2/game/{apiKey}/manage/snippets/{shortCode}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Delete Snippet Using DELETE"
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
						"Manage"
					],
					"operation": [
						"Delete Snippet Using DELETE"
					]
				}
			}
		},
		{
			"displayName": "Short Code",
			"name": "shortCode",
			"required": true,
			"description": "shortCode",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Delete Snippet Using DELETE"
					]
				}
			}
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/manage/snippets/{shortCode}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Get Snippet Using GET"
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
						"Manage"
					],
					"operation": [
						"Get Snippet Using GET"
					]
				}
			}
		},
		{
			"displayName": "Short Code",
			"name": "shortCode",
			"required": true,
			"description": "shortCode",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Get Snippet Using GET"
					]
				}
			}
		},
		{
			"displayName": "PUT /restv2/game/{apiKey}/manage/snippets/{shortCode}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Update Snippet Using PUT"
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
						"Manage"
					],
					"operation": [
						"Update Snippet Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Short Code",
			"name": "shortCode",
			"required": true,
			"description": "shortCode",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Update Snippet Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Groups",
			"name": "groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Update Snippet Using PUT"
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
						"Manage"
					],
					"operation": [
						"Update Snippet Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Script",
			"name": "script",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "script",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Update Snippet Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Script Data",
			"name": "scriptData",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "scriptData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Update Snippet Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Short Code",
			"name": "shortCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "shortCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Update Snippet Using PUT"
					]
				}
			}
		},
		{
			"displayName": "Template",
			"name": "template",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "template",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Manage"
					],
					"operation": [
						"Update Snippet Using PUT"
					]
				}
			}
		},
];

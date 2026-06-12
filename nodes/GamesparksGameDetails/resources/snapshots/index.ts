import type { INodeProperties } from 'n8n-workflow';

export const snapshotsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Snapshots"
					]
				}
			},
			"options": [
				{
					"name": "Get Snapshots Using GET 1",
					"value": "Get Snapshots Using GET 1",
					"action": "getSnapshots",
					"description": "getSnapshots",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/snapshots"
						}
					}
				},
				{
					"name": "Create Snapshots Using POST",
					"value": "Create Snapshots Using POST",
					"action": "createSnapshots",
					"description": "createSnapshots",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/snapshots"
						}
					}
				},
				{
					"name": "Get Live Snapshot ID Using GET",
					"value": "Get Live Snapshot ID Using GET",
					"action": "getLiveSnapshotId",
					"description": "getLiveSnapshotId",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/snapshots/liveSnapshotId"
						}
					}
				},
				{
					"name": "Get Snapshots Using GET",
					"value": "Get Snapshots Using GET",
					"action": "getSnapshots",
					"description": "getSnapshots",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/snapshots/page/{{$parameter[\"page\"]}}"
						}
					}
				},
				{
					"name": "Revert To Snapshot Using POST",
					"value": "Revert To Snapshot Using POST",
					"action": "revertToSnapshot",
					"description": "revertToSnapshot",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/snapshots/revert/to/{{$parameter[\"snapshotId\"]}}"
						}
					}
				},
				{
					"name": "Delete Snapshot Using DELETE 1",
					"value": "Delete Snapshot Using DELETE 1",
					"action": "deleteSnapshot",
					"description": "deleteSnapshot",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/snapshots/{{$parameter[\"snapshotId\"]}}"
						}
					}
				},
				{
					"name": "Get Snapshot Using GET",
					"value": "Get Snapshot Using GET",
					"action": "getSnapshot",
					"description": "getSnapshot",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/snapshots/{{$parameter[\"snapshotId\"]}}"
						}
					}
				},
				{
					"name": "Copy Snapshot To New Game Using POST",
					"value": "Copy Snapshot To New Game Using POST",
					"action": "copySnapshotToNewGame",
					"description": "copySnapshotToNewGame",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/snapshots/{{$parameter[\"snapshotId\"]}}/copy"
						}
					}
				},
				{
					"name": "Copy Snapshot To Existing Game Using POST 1",
					"value": "Copy Snapshot To Existing Game Using POST 1",
					"action": "copySnapshotToExistingGame",
					"description": "copySnapshotToExistingGame",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/snapshots/{{$parameter[\"snapshotId\"]}}/copy/to/{{$parameter[\"targetApiKey\"]}}"
						}
					}
				},
				{
					"name": "Publish Snapshot Using POST 1",
					"value": "Publish Snapshot Using POST 1",
					"action": "publishSnapshot",
					"description": "publishSnapshot",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/snapshots/{{$parameter[\"snapshotId\"]}}/publish"
						}
					}
				},
				{
					"name": "Unpublish Snapshot Using POST",
					"value": "Unpublish Snapshot Using POST",
					"action": "unpublishSnapshot",
					"description": "unpublishSnapshot",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/snapshots/{{$parameter[\"snapshotId\"]}}/unpublish"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/admin/snapshots",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Snapshots"
					],
					"operation": [
						"Get Snapshots Using GET 1"
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
						"Snapshots"
					],
					"operation": [
						"Get Snapshots Using GET 1"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "pageSize",
			"default": 20,
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
						"Snapshots"
					],
					"operation": [
						"Get Snapshots Using GET 1"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/admin/snapshots",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Snapshots"
					],
					"operation": [
						"Create Snapshots Using POST"
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
						"Snapshots"
					],
					"operation": [
						"Create Snapshots Using POST"
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
						"Snapshots"
					],
					"operation": [
						"Create Snapshots Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/admin/snapshots/liveSnapshotId",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Snapshots"
					],
					"operation": [
						"Get Live Snapshot ID Using GET"
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
						"Snapshots"
					],
					"operation": [
						"Get Live Snapshot ID Using GET"
					]
				}
			}
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/admin/snapshots/page/{page}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Snapshots"
					],
					"operation": [
						"Get Snapshots Using GET"
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
						"Snapshots"
					],
					"operation": [
						"Get Snapshots Using GET"
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
						"Snapshots"
					],
					"operation": [
						"Get Snapshots Using GET"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "pageSize",
			"default": 20,
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
						"Snapshots"
					],
					"operation": [
						"Get Snapshots Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/admin/snapshots/revert/to/{snapshotId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Snapshots"
					],
					"operation": [
						"Revert To Snapshot Using POST"
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
						"Snapshots"
					],
					"operation": [
						"Revert To Snapshot Using POST"
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
						"Snapshots"
					],
					"operation": [
						"Revert To Snapshot Using POST"
					]
				}
			}
		},
		{
			"displayName": "DELETE /restv2/game/{apiKey}/admin/snapshots/{snapshotId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Snapshots"
					],
					"operation": [
						"Delete Snapshot Using DELETE 1"
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
						"Snapshots"
					],
					"operation": [
						"Delete Snapshot Using DELETE 1"
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
						"Snapshots"
					],
					"operation": [
						"Delete Snapshot Using DELETE 1"
					]
				}
			}
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/admin/snapshots/{snapshotId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Snapshots"
					],
					"operation": [
						"Get Snapshot Using GET"
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
						"Snapshots"
					],
					"operation": [
						"Get Snapshot Using GET"
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
						"Snapshots"
					],
					"operation": [
						"Get Snapshot Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/admin/snapshots/{snapshotId}/copy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Snapshots"
					],
					"operation": [
						"Copy Snapshot To New Game Using POST"
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
						"Snapshots"
					],
					"operation": [
						"Copy Snapshot To New Game Using POST"
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
						"Snapshots"
					],
					"operation": [
						"Copy Snapshot To New Game Using POST"
					]
				}
			}
		},
		{
			"displayName": "Include Game Config",
			"name": "includeGameConfig",
			"description": "includeGameConfig",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeGameConfig",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Snapshots"
					],
					"operation": [
						"Copy Snapshot To New Game Using POST"
					]
				}
			}
		},
		{
			"displayName": "Include Metadata",
			"name": "includeMetadata",
			"description": "includeMetadata",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeMetadata",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Snapshots"
					],
					"operation": [
						"Copy Snapshot To New Game Using POST"
					]
				}
			}
		},
		{
			"displayName": "Include Binaries",
			"name": "includeBinaries",
			"description": "includeBinaries",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeBinaries",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Snapshots"
					],
					"operation": [
						"Copy Snapshot To New Game Using POST"
					]
				}
			}
		},
		{
			"displayName": "Include Collaborators",
			"name": "includeCollaborators",
			"description": "includeCollaborators",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeCollaborators",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Snapshots"
					],
					"operation": [
						"Copy Snapshot To New Game Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/admin/snapshots/{snapshotId}/copy/to/{targetApiKey}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Snapshots"
					],
					"operation": [
						"Copy Snapshot To Existing Game Using POST 1"
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
						"Snapshots"
					],
					"operation": [
						"Copy Snapshot To Existing Game Using POST 1"
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
						"Snapshots"
					],
					"operation": [
						"Copy Snapshot To Existing Game Using POST 1"
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
						"Snapshots"
					],
					"operation": [
						"Copy Snapshot To Existing Game Using POST 1"
					]
				}
			}
		},
		{
			"displayName": "Include Game Config",
			"name": "includeGameConfig",
			"description": "includeGameConfig",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeGameConfig",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Snapshots"
					],
					"operation": [
						"Copy Snapshot To Existing Game Using POST 1"
					]
				}
			}
		},
		{
			"displayName": "Include Metadata",
			"name": "includeMetadata",
			"description": "includeMetadata",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeMetadata",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Snapshots"
					],
					"operation": [
						"Copy Snapshot To Existing Game Using POST 1"
					]
				}
			}
		},
		{
			"displayName": "Include Binaries",
			"name": "includeBinaries",
			"description": "includeBinaries",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeBinaries",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Snapshots"
					],
					"operation": [
						"Copy Snapshot To Existing Game Using POST 1"
					]
				}
			}
		},
		{
			"displayName": "Include Collaborators",
			"name": "includeCollaborators",
			"description": "includeCollaborators",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeCollaborators",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Snapshots"
					],
					"operation": [
						"Copy Snapshot To Existing Game Using POST 1"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/admin/snapshots/{snapshotId}/publish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Snapshots"
					],
					"operation": [
						"Publish Snapshot Using POST 1"
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
						"Snapshots"
					],
					"operation": [
						"Publish Snapshot Using POST 1"
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
						"Snapshots"
					],
					"operation": [
						"Publish Snapshot Using POST 1"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/admin/snapshots/{snapshotId}/unpublish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Snapshots"
					],
					"operation": [
						"Unpublish Snapshot Using POST"
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
						"Snapshots"
					],
					"operation": [
						"Unpublish Snapshot Using POST"
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
						"Snapshots"
					],
					"operation": [
						"Unpublish Snapshot Using POST"
					]
				}
			}
		},
];

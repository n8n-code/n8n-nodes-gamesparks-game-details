import type { INodeProperties } from 'n8n-workflow';

export const credentialsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					]
				}
			},
			"options": [
				{
					"name": "Update Credential Secret Using POST",
					"value": "Update Credential Secret Using POST",
					"action": "Resets the secret of a credential",
					"description": "Resets the secret of a credential",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/config/~credentials/{{$parameter[\"credentialName\"]}}/resetSecret"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/config/~credentials/{credentialName}/resetSecret",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"Update Credential Secret Using POST"
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
						"Credentials"
					],
					"operation": [
						"Update Credential Secret Using POST"
					]
				}
			}
		},
		{
			"displayName": "Credential Name",
			"name": "credentialName",
			"required": true,
			"description": "credentialName",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"Update Credential Secret Using POST"
					]
				}
			}
		},
];

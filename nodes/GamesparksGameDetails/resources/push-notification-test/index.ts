import type { INodeProperties } from 'n8n-workflow';

export const pushNotificationTestDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					]
				}
			},
			"options": [
				{
					"name": "Test Push Amazon Notifications Using POST",
					"value": "Test Push Amazon Notifications Using POST",
					"action": "testPushAmazonNotifications",
					"description": "testPushAmazonNotifications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/pushNotifications/test/amazon"
						}
					}
				},
				{
					"name": "Test Push Apple Dev Notifications Using POST",
					"value": "Test Push Apple Dev Notifications Using POST",
					"action": "testPushAppleDevNotifications",
					"description": "testPushAppleDevNotifications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/pushNotifications/test/apple/development"
						}
					}
				},
				{
					"name": "Test Push Apple Prod Notifications Using POST",
					"value": "Test Push Apple Prod Notifications Using POST",
					"action": "testPushAppleProdNotifications",
					"description": "testPushAppleProdNotifications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/pushNotifications/test/apple/production"
						}
					}
				},
				{
					"name": "Test Push Google Notifications Using POST",
					"value": "Test Push Google Notifications Using POST",
					"action": "testPushGoogleNotifications",
					"description": "testPushGoogleNotifications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/pushNotifications/test/google"
						}
					}
				},
				{
					"name": "Test Windows 8 Notifications Using POST",
					"value": "Test Windows 8 Notifications Using POST",
					"action": "testWindows8Notifications",
					"description": "testWindows8Notifications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/pushNotifications/test/microsoft/windows8"
						}
					}
				},
				{
					"name": "Test Windows Phone 8 Notifications Using POST",
					"value": "Test Windows Phone 8 Notifications Using POST",
					"action": "testWindowsPhone8Notifications",
					"description": "testWindowsPhone8Notifications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/pushNotifications/test/microsoft/windowsPhone8"
						}
					}
				},
				{
					"name": "Test Viber Integration Notifications Using POST",
					"value": "Test Viber Integration Notifications Using POST",
					"action": "testViberIntegrationNotifications",
					"description": "testViberIntegrationNotifications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/pushNotifications/test/viber/integration"
						}
					}
				},
				{
					"name": "Test Viber Production Notifications Using POST",
					"value": "Test Viber Production Notifications Using POST",
					"action": "testViberProductionNotifications",
					"description": "testViberProductionNotifications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/pushNotifications/test/viber/production"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/admin/pushNotifications/test/amazon",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Amazon Notifications Using POST"
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
						"Push Notification Test"
					],
					"operation": [
						"Test Push Amazon Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Custom JSON",
			"name": "customJson",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "customJson",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Amazon Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Message ID",
			"name": "messageId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "messageId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Amazon Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Push ID",
			"name": "pushId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "pushId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Amazon Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Subtitle",
			"name": "subtitle",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "subtitle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Amazon Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Summary",
			"name": "summary",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "summary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Amazon Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Amazon Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/admin/pushNotifications/test/apple/development",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Apple Dev Notifications Using POST"
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
						"Push Notification Test"
					],
					"operation": [
						"Test Push Apple Dev Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Custom JSON",
			"name": "customJson",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "customJson",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Apple Dev Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Message ID",
			"name": "messageId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "messageId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Apple Dev Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Push ID",
			"name": "pushId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "pushId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Apple Dev Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Subtitle",
			"name": "subtitle",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "subtitle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Apple Dev Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Summary",
			"name": "summary",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "summary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Apple Dev Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Apple Dev Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/admin/pushNotifications/test/apple/production",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Apple Prod Notifications Using POST"
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
						"Push Notification Test"
					],
					"operation": [
						"Test Push Apple Prod Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Custom JSON",
			"name": "customJson",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "customJson",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Apple Prod Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Message ID",
			"name": "messageId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "messageId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Apple Prod Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Push ID",
			"name": "pushId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "pushId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Apple Prod Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Subtitle",
			"name": "subtitle",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "subtitle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Apple Prod Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Summary",
			"name": "summary",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "summary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Apple Prod Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Apple Prod Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/admin/pushNotifications/test/google",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Google Notifications Using POST"
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
						"Push Notification Test"
					],
					"operation": [
						"Test Push Google Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Custom JSON",
			"name": "customJson",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "customJson",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Google Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Message ID",
			"name": "messageId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "messageId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Google Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Push ID",
			"name": "pushId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "pushId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Google Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Subtitle",
			"name": "subtitle",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "subtitle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Google Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Summary",
			"name": "summary",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "summary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Google Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Push Google Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/admin/pushNotifications/test/microsoft/windows8",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Windows 8 Notifications Using POST"
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
						"Push Notification Test"
					],
					"operation": [
						"Test Windows 8 Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Custom JSON",
			"name": "customJson",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "customJson",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Windows 8 Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Message ID",
			"name": "messageId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "messageId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Windows 8 Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Push ID",
			"name": "pushId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "pushId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Windows 8 Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Subtitle",
			"name": "subtitle",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "subtitle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Windows 8 Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Summary",
			"name": "summary",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "summary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Windows 8 Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Windows 8 Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/admin/pushNotifications/test/microsoft/windowsPhone8",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Windows Phone 8 Notifications Using POST"
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
						"Push Notification Test"
					],
					"operation": [
						"Test Windows Phone 8 Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Custom JSON",
			"name": "customJson",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "customJson",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Windows Phone 8 Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Message ID",
			"name": "messageId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "messageId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Windows Phone 8 Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Push ID",
			"name": "pushId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "pushId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Windows Phone 8 Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Subtitle",
			"name": "subtitle",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "subtitle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Windows Phone 8 Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Summary",
			"name": "summary",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "summary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Windows Phone 8 Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Windows Phone 8 Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/admin/pushNotifications/test/viber/integration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Viber Integration Notifications Using POST"
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
						"Push Notification Test"
					],
					"operation": [
						"Test Viber Integration Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Custom JSON",
			"name": "customJson",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "customJson",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Viber Integration Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Message ID",
			"name": "messageId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "messageId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Viber Integration Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Push ID",
			"name": "pushId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "pushId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Viber Integration Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Subtitle",
			"name": "subtitle",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "subtitle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Viber Integration Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Summary",
			"name": "summary",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "summary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Viber Integration Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Viber Integration Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /restv2/game/{apiKey}/admin/pushNotifications/test/viber/production",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Viber Production Notifications Using POST"
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
						"Push Notification Test"
					],
					"operation": [
						"Test Viber Production Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Custom JSON",
			"name": "customJson",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "customJson",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Viber Production Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Message ID",
			"name": "messageId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "messageId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Viber Production Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Push ID",
			"name": "pushId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "pushId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Viber Production Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Subtitle",
			"name": "subtitle",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "subtitle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Viber Production Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Summary",
			"name": "summary",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "summary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Viber Production Notifications Using POST"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push Notification Test"
					],
					"operation": [
						"Test Viber Production Notifications Using POST"
					]
				}
			}
		},
];

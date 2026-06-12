import type { INodeProperties } from 'n8n-workflow';

export const billingDetailsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Details"
					]
				}
			},
			"options": [
				{
					"name": "Get Billing Details",
					"value": "Get Billing Details",
					"action": "Retrieves the Billing Details",
					"description": "Retrieves the Billing Details.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/billingDetails"
						}
					}
				},
				{
					"name": "Put Billing Details",
					"value": "Put Billing Details",
					"action": "Updates the Billing Details",
					"description": "Updates the Billing Details.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restv2/game/{{$parameter[\"apiKey\"]}}/admin/billingDetails"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /restv2/game/{apiKey}/admin/billingDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Details"
					],
					"operation": [
						"Get Billing Details"
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
						"Billing Details"
					],
					"operation": [
						"Get Billing Details"
					]
				}
			}
		},
		{
			"displayName": "PUT /restv2/game/{apiKey}/admin/billingDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Details"
					],
					"operation": [
						"Put Billing Details"
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
						"Billing Details"
					],
					"operation": [
						"Put Billing Details"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Building",
			"name": "building",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "building",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Details"
					],
					"operation": [
						"Put Billing Details"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "City",
			"name": "city",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "city",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Details"
					],
					"operation": [
						"Put Billing Details"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Company Name",
			"name": "companyName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "companyName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Details"
					],
					"operation": [
						"Put Billing Details"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Country",
			"name": "country",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "country",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Details"
					],
					"operation": [
						"Put Billing Details"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Email 1",
			"name": "email1",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "email1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Details"
					],
					"operation": [
						"Put Billing Details"
					]
				}
			}
		},
		{
			"displayName": "Email 2",
			"name": "email2",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "email2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Details"
					],
					"operation": [
						"Put Billing Details"
					]
				}
			}
		},
		{
			"displayName": "Email 3",
			"name": "email3",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "email3",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Details"
					],
					"operation": [
						"Put Billing Details"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "First Name 1",
			"name": "firstName1",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "firstName1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Details"
					],
					"operation": [
						"Put Billing Details"
					]
				}
			}
		},
		{
			"displayName": "First Name 2",
			"name": "firstName2",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "firstName2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Details"
					],
					"operation": [
						"Put Billing Details"
					]
				}
			}
		},
		{
			"displayName": "First Name 3",
			"name": "firstName3",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "firstName3",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Details"
					],
					"operation": [
						"Put Billing Details"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Last Name 1",
			"name": "lastName1",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "lastName1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Details"
					],
					"operation": [
						"Put Billing Details"
					]
				}
			}
		},
		{
			"displayName": "Last Name 2",
			"name": "lastName2",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "lastName2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Details"
					],
					"operation": [
						"Put Billing Details"
					]
				}
			}
		},
		{
			"displayName": "Last Name 3",
			"name": "lastName3",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "lastName3",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Details"
					],
					"operation": [
						"Put Billing Details"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Postcode",
			"name": "postcode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "postcode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Details"
					],
					"operation": [
						"Put Billing Details"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Details"
					],
					"operation": [
						"Put Billing Details"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Street",
			"name": "street",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "street",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Details"
					],
					"operation": [
						"Put Billing Details"
					]
				}
			}
		},
		{
			"displayName": "Tax Number",
			"name": "taxNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "taxNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Details"
					],
					"operation": [
						"Put Billing Details"
					]
				}
			}
		},
];

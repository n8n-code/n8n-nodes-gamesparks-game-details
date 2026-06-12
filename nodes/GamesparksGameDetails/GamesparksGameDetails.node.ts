import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { scriptsDescription } from './resources/scripts';
import { experimentsDescription } from './resources/experiments';
import { billingDetailsDescription } from './resources/billing-details';
import { manageDescription } from './resources/manage';
import { analyticsDescription } from './resources/analytics';
import { pushNotificationTestDescription } from './resources/push-notification-test';
import { credentialsDescription } from './resources/credentials';
import { snapshotsDescription } from './resources/snapshots';
import { gamesAdminDescription } from './resources/games-admin';
import { regionDescription } from './resources/region';
import { testHarnessDescription } from './resources/test-harness';
import { segmentQueryFiltersDescription } from './resources/segment-query-filters';
import { notificationsDescription } from './resources/notifications';

export class GamesparksGameDetails implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Gamesparks Game Details',
                name: 'N8nDevGamesparksGameDetails',
                icon: { light: 'file:./gamesparks-game-details.png', dark: 'file:./gamesparks-game-details.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'API for managing GameSparks game details.',
                defaults: { name: 'Gamesparks Game Details' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevGamesparksGameDetailsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Scripts",
					"value": "Scripts",
					"description": "Scripts Restv 2 Controller"
				},
				{
					"name": "Experiments",
					"value": "Experiments",
					"description": "Experiment Rest Controller"
				},
				{
					"name": "Billing Details",
					"value": "Billing Details",
					"description": "Billing Details Rest V 2 Controller"
				},
				{
					"name": "Manage",
					"value": "Manage",
					"description": "Manage Restv 2 Controller"
				},
				{
					"name": "Analytics",
					"value": "Analytics",
					"description": "Analytics Restv 2 Controller"
				},
				{
					"name": "Push Notification Test",
					"value": "Push Notification Test",
					"description": "Push Notification Test Controller"
				},
				{
					"name": "Credentials",
					"value": "Credentials",
					"description": "Game Credentials Rest V 2 Controller"
				},
				{
					"name": "Snapshots",
					"value": "Snapshots",
					"description": ""
				},
				{
					"name": "Games Admin",
					"value": "Games Admin",
					"description": "Games Admin Restv 2 Controller"
				},
				{
					"name": "Region",
					"value": "Region",
					"description": "Region Restv 2 Controller"
				},
				{
					"name": "Test Harness",
					"value": "Test Harness",
					"description": "Test Harness Restv 2 Controller"
				},
				{
					"name": "Segment Query Filters",
					"value": "Segment Query Filters",
					"description": "Segment Query Filter Restv 2 Controller"
				},
				{
					"name": "Notifications",
					"value": "Notifications",
					"description": "Log Summary Restv 2 Controller"
				}
			],
			"default": ""
		},
		...scriptsDescription,
		...experimentsDescription,
		...billingDetailsDescription,
		...manageDescription,
		...analyticsDescription,
		...pushNotificationTestDescription,
		...credentialsDescription,
		...snapshotsDescription,
		...gamesAdminDescription,
		...regionDescription,
		...testHarnessDescription,
		...segmentQueryFiltersDescription,
		...notificationsDescription
                ],
        };
}

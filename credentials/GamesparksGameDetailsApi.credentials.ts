import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class GamesparksGameDetailsApi implements ICredentialType {
        name = 'N8nDevGamesparksGameDetailsApi';

        displayName = 'Gamesparks Game Details API';

        icon: Icon = { light: 'file:../nodes/GamesparksGameDetails/gamesparks-game-details.png', dark: 'file:../nodes/GamesparksGameDetails/gamesparks-game-details.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '//config2.gamesparks.net',
                        required: true,
                        placeholder: '//config2.gamesparks.net',
                        description: 'The base URL of your Gamesparks Game Details API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'accessToken': '={{$credentials.apiKey}}',
                        },
                },
        };


}

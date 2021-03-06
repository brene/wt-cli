module.exports = {
    onBeforeConfigure: onBeforeConfigure,
};


function onBeforeConfigure(context) {
    var node = context.node;
    
    node.addOptionGroup('Webtask profile', {
        profile: {
            alias: 'p',
            description: 'Default to the webtask container, token, and URL from a stored profile.',
            type: 'string',
        },
        container: {
            alias: 'c',
            description: 'Set the webtask container. This can be combined with --profile if you want to override the container or can be used with --url and --token to speficy the webtask profile inline.',
            type: 'string',
        },
        url: {
            description: 'Set the webtask server url. Defaults to https://webtask.it.auth0.com',
            type: 'string',
        },
        token: {
            description: 'Set your authorizing webtask token. If you do not have a webtask token, one can be provisioned using `wt init`.',
            type: 'string',
        },
    });
}
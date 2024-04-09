import { sortData } from './sortData'

describe('sortData', () => {
    it('should return an array with the same length as the input', () => {
        const issues = [
            {
                url: 'https://api.github.com/repos/facebook/react/issues/28756',
                repository_url: 'https://api.github.com/repos/facebook/react',
                labels_url:
                    'https://api.github.com/repos/facebook/react/issues/28756/labels{/name}',
                comments_url:
                    'https://api.github.com/repos/facebook/react/issues/28756/comments',
                events_url:
                    'https://api.github.com/repos/facebook/react/issues/28756/events',
                html_url: 'https://github.com/facebook/react/pull/28756',
                id: 2228122266,
                node_id: 'PR_kwDOAJy2Ks5r2YfJ',
                number: 28756,
                title: 'Combined two if statements that do the same thing in  function',
                user: {
                    login: 'WellHiIGuess',
                    id: 67477071,
                    node_id: 'MDQ6VXNlcjY3NDc3MDcx',
                    avatar_url:
                        'https://avatars.githubusercontent.com/u/67477071?v=4',
                    gravatar_id: '',
                    url: 'https://api.github.com/users/WellHiIGuess',
                    html_url: 'https://github.com/WellHiIGuess',
                    followers_url:
                        'https://api.github.com/users/WellHiIGuess/followers',
                    following_url:
                        'https://api.github.com/users/WellHiIGuess/following{/other_user}',
                    gists_url:
                        'https://api.github.com/users/WellHiIGuess/gists{/gist_id}',
                    starred_url:
                        'https://api.github.com/users/WellHiIGuess/starred{/owner}{/repo}',
                    subscriptions_url:
                        'https://api.github.com/users/WellHiIGuess/subscriptions',
                    organizations_url:
                        'https://api.github.com/users/WellHiIGuess/orgs',
                    repos_url:
                        'https://api.github.com/users/WellHiIGuess/repos',
                    events_url:
                        'https://api.github.com/users/WellHiIGuess/events{/privacy}',
                    received_events_url:
                        'https://api.github.com/users/WellHiIGuess/received_events',
                    type: 'User',
                    site_admin: false,
                },
                labels: [],
                state: 'open',
                locked: false,
                assignee: null,
                assignees: [],
                milestone: null,
                comments: 1,
                created_at: '2024-04-05T14:04:03Z',
                updated_at: '2024-04-05T14:04:10Z',
                closed_at: null,
                author_association: 'NONE',
                active_lock_reason: null,
                draft: false,
                pull_request: {
                    url: 'https://api.github.com/repos/facebook/react/pulls/28756',
                    html_url: 'https://github.com/facebook/react/pull/28756',
                    diff_url:
                        'https://github.com/facebook/react/pull/28756.diff',
                    patch_url:
                        'https://github.com/facebook/react/pull/28756.patch',
                    merged_at: null,
                },
                body: '<!--\r\n  Thanks for submitting a pull request!\r\n  We appreciate you spending the time to work on these changes. Please provide enough information so that others can review your pull request. The three fields below are mandatory.\r\n\r\n  Before submitting a pull request, please make sure the following is done:\r\n\r\n  1. Fork [the repository](https://github.com/facebook/react) and create your branch from `main`.\r\n  2. Run `yarn` in the repository root.\r\n  3. If you\'ve fixed a bug or added code that should be tested, add tests!\r\n  4. Ensure the test suite passes (`yarn test`). Tip: `yarn test --watch TestName` is helpful in development.\r\n  5. Run `yarn test --prod` to test in the production environment. It supports the same options as `yarn test`.\r\n  6. If you need a debugger, run `yarn test --debug --watch TestName`, open `chrome://inspect`, and press "Inspect".\r\n  7. Format your code with [prettier](https://github.com/prettier/prettier) (`yarn prettier`).\r\n  8. Make sure your code lints (`yarn lint`). Tip: `yarn linc` to only check changed files.\r\n  9. Run the [Flow](https://flowtype.org/) type checks (`yarn flow`).\r\n  10. If you haven\'t already, complete the CLA.\r\n\r\n  Learn more about contributing: https://reactjs.org/docs/how-to-contribute.html\r\n-->\r\n\r\n## Summary\r\nCombined an if statement in the `performReactRefresh` function, because they both did the same thing.\r\n\r\nChanged from:\r\n```js\r\nif (pendingUpdates.length === 0) {\r\n  return null;\r\n}\r\nif (isPerformingRefresh) {\r\n  return null;\r\n}\r\n```\r\nto:\r\n```js\r\nif (pendingUpdates.length === 0 || isPerformingRefresh) {\r\n  return null;\r\n}\r\n```\r\n<!--\r\n Explain the **motivation** for making this change. What existing problem does the pull request solve?\r\n-->\r\n\r\n## How did you test this change?\r\nBoth of these if statements `return null;`. Combining them and adding an `||` does the same thing.\r\n<!--\r\n  Demonstrate the code is solid. Example: The exact commands you ran and their output, screenshots / videos if the pull request changes the user interface.\r\n  How exactly did you verify that your PR solves the issue you wanted to solve?\r\n  If you leave this empty, your PR will very likely be closed.\r\n-->\r\n',
                reactions: {
                    url: 'https://api.github.com/repos/facebook/react/issues/28756/reactions',
                    total_count: 0,
                    '+1': 0,
                    '-1': 0,
                    laugh: 0,
                    hooray: 0,
                    confused: 0,
                    heart: 0,
                    rocket: 0,
                    eyes: 0,
                },
                timeline_url:
                    'https://api.github.com/repos/facebook/react/issues/28756/timeline',
                performed_via_github_app: null,
                state_reason: null,
            },

            {
                url: 'https://api.github.com/repos/facebook/react/issues/28755',
                repository_url: 'https://api.github.com/repos/facebook/react',
                labels_url:
                    'https://api.github.com/repos/facebook/react/issues/28755/labels{/name}',
                comments_url:
                    'https://api.github.com/repos/facebook/react/issues/28755/comments',
                events_url:
                    'https://api.github.com/repos/facebook/react/issues/28755/events',
                html_url: 'https://github.com/facebook/react/pull/28755',
                id: 2227042250,
                node_id: 'PR_kwDOAJy2Ks5rypuQ',
                number: 28755,
                title: '[Flight] Support Blobs from Server to Client',
                user: {
                    login: 'sebmarkbage',
                    id: 63648,
                    node_id: 'MDQ6VXNlcjYzNjQ4',
                    avatar_url:
                        'https://avatars.githubusercontent.com/u/63648?v=4',
                    gravatar_id: '',
                    url: 'https://api.github.com/users/sebmarkbage',
                    html_url: 'https://github.com/sebmarkbage',
                    followers_url:
                        'https://api.github.com/users/sebmarkbage/followers',
                    following_url:
                        'https://api.github.com/users/sebmarkbage/following{/other_user}',
                    gists_url:
                        'https://api.github.com/users/sebmarkbage/gists{/gist_id}',
                    starred_url:
                        'https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}',
                    subscriptions_url:
                        'https://api.github.com/users/sebmarkbage/subscriptions',
                    organizations_url:
                        'https://api.github.com/users/sebmarkbage/orgs',
                    repos_url: 'https://api.github.com/users/sebmarkbage/repos',
                    events_url:
                        'https://api.github.com/users/sebmarkbage/events{/privacy}',
                    received_events_url:
                        'https://api.github.com/users/sebmarkbage/received_events',
                    type: 'User',
                    site_admin: false,
                },
                labels: [
                    {
                        id: 196858374,
                        node_id: 'MDU6TGFiZWwxOTY4NTgzNzQ=',
                        url: 'https://api.github.com/repos/facebook/react/labels/CLA%20Signed',
                        name: 'CLA Signed',
                        color: 'e7e7e7',
                        default: false,
                        description: null,
                    },
                    {
                        id: 1775958285,
                        node_id: 'MDU6TGFiZWwxNzc1OTU4Mjg1',
                        url: 'https://api.github.com/repos/facebook/react/labels/React%20Core%20Team',
                        name: 'React Core Team',
                        color: '9149d1',
                        default: false,
                        description:
                            'Opened by a member of the React Core Team',
                    },
                ],
                state: 'closed',
                locked: false,
                assignee: null,
                assignees: [],
                milestone: null,
                comments: 1,
                created_at: '2024-04-05T04:59:38Z',
                updated_at: '2024-04-05T05:03:25Z',
                closed_at: null,
                author_association: 'COLLABORATOR',
                active_lock_reason: null,
                draft: false,
                pull_request: {
                    url: 'https://api.github.com/repos/facebook/react/pulls/28755',
                    html_url: 'https://github.com/facebook/react/pull/28755',
                    diff_url:
                        'https://github.com/facebook/react/pull/28755.diff',
                    patch_url:
                        'https://github.com/facebook/react/pull/28755.patch',
                    merged_at: null,
                },
                body: "We currently support Blobs when passing from Client to Server so this adds it in the other direction for parity - when `enableFlightBinary` is enabled.\r\n\r\nWe intentionally only support the `Blob` type to pass-through, not subtype `File`. That's because passing additional meta data like filename might be an accidental leak. You can still pass a `File` through but it'll appear as a `Blob` on the other side. It's also not possible to create a faithful File subclass in all environments without it actually being backed by a file.\r\n\r\nThis implementation isn't great but at least it works. It creates a few indirections. This is because we need to be able to asynchronously emit the buffers but we have to \"block\" the parent object from resolving while it's loading.\r\n\r\nIdeally, we should be able to create the Blob on the client early and then stream in it lazily. Because the Blob API doesn't guarantee that the data is available synchronously. Unfortunately, the native APIs doesn't have this. We could implement custom versions of all the data read APIs but then the blobs still wouldn't work with native APIs. So we just have to wait until Blob accepts a stream in the constructor.\r\n\r\nWe should be able to stream each chunk early in the protocol though even though we can't unblock the parent until they've all loaded. I didn't do this yet mostly because of code structure and I'm lazy.",
                reactions: {
                    url: 'https://api.github.com/repos/facebook/react/issues/28755/reactions',
                    total_count: 0,
                    '+1': 0,
                    '-1': 0,
                    laugh: 0,
                    hooray: 0,
                    confused: 0,
                    heart: 0,
                    rocket: 0,
                    eyes: 0,
                },
                timeline_url:
                    'https://api.github.com/repos/facebook/react/issues/28755/timeline',
                performed_via_github_app: null,
                state_reason: null,
            },
            {
                url: 'https://api.github.com/repos/facebook/react/issues/28754',
                repository_url: 'https://api.github.com/repos/facebook/react',
                labels_url:
                    'https://api.github.com/repos/facebook/react/issues/28754/labels{/name}',
                comments_url:
                    'https://api.github.com/repos/facebook/react/issues/28754/comments',
                events_url:
                    'https://api.github.com/repos/facebook/react/issues/28754/events',
                html_url: 'https://github.com/facebook/react/pull/28754',
                id: 2226826084,
                node_id: 'PR_kwDOAJy2Ks5rx4wC',
                number: 28754,
                title: '[Flight] Support FormData from Server to Client',
                user: {
                    login: 'sebmarkbage',
                    id: 63648,
                    node_id: 'MDQ6VXNlcjYzNjQ4',
                    avatar_url:
                        'https://avatars.githubusercontent.com/u/63648?v=4',
                    gravatar_id: '',
                    url: 'https://api.github.com/users/sebmarkbage',
                    html_url: 'https://github.com/sebmarkbage',
                    followers_url:
                        'https://api.github.com/users/sebmarkbage/followers',
                    following_url:
                        'https://api.github.com/users/sebmarkbage/following{/other_user}',
                    gists_url:
                        'https://api.github.com/users/sebmarkbage/gists{/gist_id}',
                    starred_url:
                        'https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}',
                    subscriptions_url:
                        'https://api.github.com/users/sebmarkbage/subscriptions',
                    organizations_url:
                        'https://api.github.com/users/sebmarkbage/orgs',
                    repos_url: 'https://api.github.com/users/sebmarkbage/repos',
                    events_url:
                        'https://api.github.com/users/sebmarkbage/events{/privacy}',
                    received_events_url:
                        'https://api.github.com/users/sebmarkbage/received_events',
                    type: 'User',
                    site_admin: false,
                },
                labels: [
                    {
                        id: 196858374,
                        node_id: 'MDU6TGFiZWwxOTY4NTgzNzQ=',
                        url: 'https://api.github.com/repos/facebook/react/labels/CLA%20Signed',
                        name: 'CLA Signed',
                        color: 'e7e7e7',
                        default: false,
                        description: null,
                    },
                    {
                        id: 1775958285,
                        node_id: 'MDU6TGFiZWwxNzc1OTU4Mjg1',
                        url: 'https://api.github.com/repos/facebook/react/labels/React%20Core%20Team',
                        name: 'React Core Team',
                        color: '9149d1',
                        default: false,
                        description:
                            'Opened by a member of the React Core Team',
                    },
                ],
                state: 'open',
                locked: false,
                assignee: null,
                assignees: [],
                milestone: null,
                comments: 1,
                created_at: '2024-04-05T02:15:31Z',
                updated_at: '2024-04-05T05:09:06Z',
                closed_at: null,
                author_association: 'COLLABORATOR',
                active_lock_reason: null,
                draft: false,
                pull_request: {
                    url: 'https://api.github.com/repos/facebook/react/pulls/28754',
                    html_url: 'https://github.com/facebook/react/pull/28754',
                    diff_url:
                        'https://github.com/facebook/react/pull/28754.diff',
                    patch_url:
                        'https://github.com/facebook/react/pull/28754.patch',
                    merged_at: null,
                },
                body: "We currently support FormData for Replies mainly for Form Actions. This supports it in the other direction too which lets you return it from an action as the response. Mainly for parity.\r\n\r\nWe don't really recommend that you just pass the original form data back because the action is supposed to be able to clear fields and such but you could potentially at least use this as the format and could clear some fields.\r\n\r\nWe could potentially optimize this with a temporary reference if the same object was passed to a reply in case you use it as a round trip to avoid serializing it back again. That way the action has the ability to override it to clear fields but if it doesn't you get back the same as you sent.\r\n\r\n#28755 adds support for Blobs when the `enableBinaryFlight` is enabled which allows them to be used inside FormData too.",
                reactions: {
                    url: 'https://api.github.com/repos/facebook/react/issues/28754/reactions',
                    total_count: 0,
                    '+1': 0,
                    '-1': 0,
                    laugh: 0,
                    hooray: 0,
                    confused: 0,
                    heart: 0,
                    rocket: 0,
                    eyes: 0,
                },
                timeline_url:
                    'https://api.github.com/repos/facebook/react/issues/28754/timeline',
                performed_via_github_app: null,
                state_reason: null,
            },
        ]
        const result = sortData(issues)
        expect(result.length).toEqual(issues.length)
    })

    it('should set state to "open" if issue was not updated', () => {
        const issues = [
            {
                url: 'https://api.github.com/repos/facebook/react/issues/28754',
                repository_url: 'https://api.github.com/repos/facebook/react',
                labels_url:
                    'https://api.github.com/repos/facebook/react/issues/28754/labels{/name}',
                comments_url:
                    'https://api.github.com/repos/facebook/react/issues/28754/comments',
                events_url:
                    'https://api.github.com/repos/facebook/react/issues/28754/events',
                html_url: 'https://github.com/facebook/react/pull/28754',
                id: 2226826084,
                node_id: 'PR_kwDOAJy2Ks5rx4wC',
                number: 28754,
                title: '[Flight] Support FormData from Server to Client',
                user: {
                    login: 'sebmarkbage',
                    id: 63648,
                    node_id: 'MDQ6VXNlcjYzNjQ4',
                    avatar_url:
                        'https://avatars.githubusercontent.com/u/63648?v=4',
                    gravatar_id: '',
                    url: 'https://api.github.com/users/sebmarkbage',
                    html_url: 'https://github.com/sebmarkbage',
                    followers_url:
                        'https://api.github.com/users/sebmarkbage/followers',
                    following_url:
                        'https://api.github.com/users/sebmarkbage/following{/other_user}',
                    gists_url:
                        'https://api.github.com/users/sebmarkbage/gists{/gist_id}',
                    starred_url:
                        'https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}',
                    subscriptions_url:
                        'https://api.github.com/users/sebmarkbage/subscriptions',
                    organizations_url:
                        'https://api.github.com/users/sebmarkbage/orgs',
                    repos_url: 'https://api.github.com/users/sebmarkbage/repos',
                    events_url:
                        'https://api.github.com/users/sebmarkbage/events{/privacy}',
                    received_events_url:
                        'https://api.github.com/users/sebmarkbage/received_events',
                    type: 'User',
                    site_admin: false,
                },
                labels: [
                    {
                        id: 196858374,
                        node_id: 'MDU6TGFiZWwxOTY4NTgzNzQ=',
                        url: 'https://api.github.com/repos/facebook/react/labels/CLA%20Signed',
                        name: 'CLA Signed',
                        color: 'e7e7e7',
                        default: false,
                        description: null,
                    },
                    {
                        id: 1775958285,
                        node_id: 'MDU6TGFiZWwxNzc1OTU4Mjg1',
                        url: 'https://api.github.com/repos/facebook/react/labels/React%20Core%20Team',
                        name: 'React Core Team',
                        color: '9149d1',
                        default: false,
                        description:
                            'Opened by a member of the React Core Team',
                    },
                ],
                state: 'open',
                locked: false,
                assignee: null,
                assignees: [],
                milestone: null,
                comments: 1,
                created_at: '2022-01-01',
                updated_at: '2022-01-01',
                closed_at: null,
                author_association: 'COLLABORATOR',
                active_lock_reason: null,
                draft: false,
                pull_request: {
                    url: 'https://api.github.com/repos/facebook/react/pulls/28754',
                    html_url: 'https://github.com/facebook/react/pull/28754',
                    diff_url:
                        'https://github.com/facebook/react/pull/28754.diff',
                    patch_url:
                        'https://github.com/facebook/react/pull/28754.patch',
                    merged_at: null,
                },
                body: "We currently support FormData for Replies mainly for Form Actions. This supports it in the other direction too which lets you return it from an action as the response. Mainly for parity.\r\n\r\nWe don't really recommend that you just pass the original form data back because the action is supposed to be able to clear fields and such but you could potentially at least use this as the format and could clear some fields.\r\n\r\nWe could potentially optimize this with a temporary reference if the same object was passed to a reply in case you use it as a round trip to avoid serializing it back again. That way the action has the ability to override it to clear fields but if it doesn't you get back the same as you sent.\r\n\r\n#28755 adds support for Blobs when the `enableBinaryFlight` is enabled which allows them to be used inside FormData too.",
                reactions: {
                    url: 'https://api.github.com/repos/facebook/react/issues/28754/reactions',
                    total_count: 0,
                    '+1': 0,
                    '-1': 0,
                    laugh: 0,
                    hooray: 0,
                    confused: 0,
                    heart: 0,
                    rocket: 0,
                    eyes: 0,
                },
                timeline_url:
                    'https://api.github.com/repos/facebook/react/issues/28754/timeline',
                performed_via_github_app: null,
                state_reason: null,
            },
        ]
        const result = sortData(issues)
        expect(result[0].state).toEqual('open')
    })

    it('should set state to "closed" if issue is closed', () => {
        const issues = [
            {
                url: 'https://api.github.com/repos/facebook/react/issues/28754',
                repository_url: 'https://api.github.com/repos/facebook/react',
                labels_url:
                    'https://api.github.com/repos/facebook/react/issues/28754/labels{/name}',
                comments_url:
                    'https://api.github.com/repos/facebook/react/issues/28754/comments',
                events_url:
                    'https://api.github.com/repos/facebook/react/issues/28754/events',
                html_url: 'https://github.com/facebook/react/pull/28754',
                id: 2226826084,
                node_id: 'PR_kwDOAJy2Ks5rx4wC',
                number: 28754,
                title: '[Flight] Support FormData from Server to Client',
                user: {
                    login: 'sebmarkbage',
                    id: 63648,
                    node_id: 'MDQ6VXNlcjYzNjQ4',
                    avatar_url:
                        'https://avatars.githubusercontent.com/u/63648?v=4',
                    gravatar_id: '',
                    url: 'https://api.github.com/users/sebmarkbage',
                    html_url: 'https://github.com/sebmarkbage',
                    followers_url:
                        'https://api.github.com/users/sebmarkbage/followers',
                    following_url:
                        'https://api.github.com/users/sebmarkbage/following{/other_user}',
                    gists_url:
                        'https://api.github.com/users/sebmarkbage/gists{/gist_id}',
                    starred_url:
                        'https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}',
                    subscriptions_url:
                        'https://api.github.com/users/sebmarkbage/subscriptions',
                    organizations_url:
                        'https://api.github.com/users/sebmarkbage/orgs',
                    repos_url: 'https://api.github.com/users/sebmarkbage/repos',
                    events_url:
                        'https://api.github.com/users/sebmarkbage/events{/privacy}',
                    received_events_url:
                        'https://api.github.com/users/sebmarkbage/received_events',
                    type: 'User',
                    site_admin: false,
                },
                labels: [
                    {
                        id: 196858374,
                        node_id: 'MDU6TGFiZWwxOTY4NTgzNzQ=',
                        url: 'https://api.github.com/repos/facebook/react/labels/CLA%20Signed',
                        name: 'CLA Signed',
                        color: 'e7e7e7',
                        default: false,
                        description: null,
                    },
                    {
                        id: 1775958285,
                        node_id: 'MDU6TGFiZWwxNzc1OTU4Mjg1',
                        url: 'https://api.github.com/repos/facebook/react/labels/React%20Core%20Team',
                        name: 'React Core Team',
                        color: '9149d1',
                        default: false,
                        description:
                            'Opened by a member of the React Core Team',
                    },
                ],
                state: 'closed',
                locked: false,
                assignee: null,
                assignees: [],
                milestone: null,
                comments: 1,
                created_at: '2022-01-01',
                updated_at: '2022-01-02',
                closed_at: null,
                author_association: 'COLLABORATOR',
                active_lock_reason: null,
                draft: false,
                pull_request: {
                    url: 'https://api.github.com/repos/facebook/react/pulls/28754',
                    html_url: 'https://github.com/facebook/react/pull/28754',
                    diff_url:
                        'https://github.com/facebook/react/pull/28754.diff',
                    patch_url:
                        'https://github.com/facebook/react/pull/28754.patch',
                    merged_at: null,
                },
                body: "We currently support FormData for Replies mainly for Form Actions. This supports it in the other direction too which lets you return it from an action as the response. Mainly for parity.\r\n\r\nWe don't really recommend that you just pass the original form data back because the action is supposed to be able to clear fields and such but you could potentially at least use this as the format and could clear some fields.\r\n\r\nWe could potentially optimize this with a temporary reference if the same object was passed to a reply in case you use it as a round trip to avoid serializing it back again. That way the action has the ability to override it to clear fields but if it doesn't you get back the same as you sent.\r\n\r\n#28755 adds support for Blobs when the `enableBinaryFlight` is enabled which allows them to be used inside FormData too.",
                reactions: {
                    url: 'https://api.github.com/repos/facebook/react/issues/28754/reactions',
                    total_count: 0,
                    '+1': 0,
                    '-1': 0,
                    laugh: 0,
                    hooray: 0,
                    confused: 0,
                    heart: 0,
                    rocket: 0,
                    eyes: 0,
                },
                timeline_url:
                    'https://api.github.com/repos/facebook/react/issues/28754/timeline',
                performed_via_github_app: null,
                state_reason: null,
            },
        ]
        const result = sortData(issues)
        expect(result[0].state).toEqual('closed')
    })

    it('should set state to "progress" if issue is open and was updated', () => {
        const issues = [
            {
                url: 'https://api.github.com/repos/facebook/react/issues/28754',
                repository_url: 'https://api.github.com/repos/facebook/react',
                labels_url:
                    'https://api.github.com/repos/facebook/react/issues/28754/labels{/name}',
                comments_url:
                    'https://api.github.com/repos/facebook/react/issues/28754/comments',
                events_url:
                    'https://api.github.com/repos/facebook/react/issues/28754/events',
                html_url: 'https://github.com/facebook/react/pull/28754',
                id: 2226826084,
                node_id: 'PR_kwDOAJy2Ks5rx4wC',
                number: 28754,
                title: '[Flight] Support FormData from Server to Client',
                user: {
                    login: 'sebmarkbage',
                    id: 63648,
                    node_id: 'MDQ6VXNlcjYzNjQ4',
                    avatar_url:
                        'https://avatars.githubusercontent.com/u/63648?v=4',
                    gravatar_id: '',
                    url: 'https://api.github.com/users/sebmarkbage',
                    html_url: 'https://github.com/sebmarkbage',
                    followers_url:
                        'https://api.github.com/users/sebmarkbage/followers',
                    following_url:
                        'https://api.github.com/users/sebmarkbage/following{/other_user}',
                    gists_url:
                        'https://api.github.com/users/sebmarkbage/gists{/gist_id}',
                    starred_url:
                        'https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}',
                    subscriptions_url:
                        'https://api.github.com/users/sebmarkbage/subscriptions',
                    organizations_url:
                        'https://api.github.com/users/sebmarkbage/orgs',
                    repos_url: 'https://api.github.com/users/sebmarkbage/repos',
                    events_url:
                        'https://api.github.com/users/sebmarkbage/events{/privacy}',
                    received_events_url:
                        'https://api.github.com/users/sebmarkbage/received_events',
                    type: 'User',
                    site_admin: false,
                },
                labels: [
                    {
                        id: 196858374,
                        node_id: 'MDU6TGFiZWwxOTY4NTgzNzQ=',
                        url: 'https://api.github.com/repos/facebook/react/labels/CLA%20Signed',
                        name: 'CLA Signed',
                        color: 'e7e7e7',
                        default: false,
                        description: null,
                    },
                    {
                        id: 1775958285,
                        node_id: 'MDU6TGFiZWwxNzc1OTU4Mjg1',
                        url: 'https://api.github.com/repos/facebook/react/labels/React%20Core%20Team',
                        name: 'React Core Team',
                        color: '9149d1',
                        default: false,
                        description:
                            'Opened by a member of the React Core Team',
                    },
                ],
                state: 'open',
                locked: false,
                assignee: null,
                assignees: [],
                milestone: null,
                comments: 1,
                created_at: '2022-01-01',
                updated_at: '2022-01-02',
                closed_at: null,
                author_association: 'COLLABORATOR',
                active_lock_reason: null,
                draft: false,
                pull_request: {
                    url: 'https://api.github.com/repos/facebook/react/pulls/28754',
                    html_url: 'https://github.com/facebook/react/pull/28754',
                    diff_url:
                        'https://github.com/facebook/react/pull/28754.diff',
                    patch_url:
                        'https://github.com/facebook/react/pull/28754.patch',
                    merged_at: null,
                },
                body: "We currently support FormData for Replies mainly for Form Actions. This supports it in the other direction too which lets you return it from an action as the response. Mainly for parity.\r\n\r\nWe don't really recommend that you just pass the original form data back because the action is supposed to be able to clear fields and such but you could potentially at least use this as the format and could clear some fields.\r\n\r\nWe could potentially optimize this with a temporary reference if the same object was passed to a reply in case you use it as a round trip to avoid serializing it back again. That way the action has the ability to override it to clear fields but if it doesn't you get back the same as you sent.\r\n\r\n#28755 adds support for Blobs when the `enableBinaryFlight` is enabled which allows them to be used inside FormData too.",
                reactions: {
                    url: 'https://api.github.com/repos/facebook/react/issues/28754/reactions',
                    total_count: 0,
                    '+1': 0,
                    '-1': 0,
                    laugh: 0,
                    hooray: 0,
                    confused: 0,
                    heart: 0,
                    rocket: 0,
                    eyes: 0,
                },
                timeline_url:
                    'https://api.github.com/repos/facebook/react/issues/28754/timeline',
                performed_via_github_app: null,
                state_reason: null,
            },
        ]
        const result = sortData(issues)
        expect(result[0].state).toEqual('progress')
    })
})

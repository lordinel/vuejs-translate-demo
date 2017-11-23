<template>
    <div>
        <table>
            <thead>
                <th>Description</th>
                <th>Code</th>
                <th>Output</th>
            </thead>
            <tbody>
                <tr>
                    <td>Simple translation</td>
                    <td>$t('hello-world')</td>
                    <td>{{ $t('hello-world') }}</td>
                </tr>
            
                <tr>
                    <td>Variable key</td>
                    <td>
                        $t(varKey)<br>
                        <small>Where varKey = 'hello-world'</small>
                    </td>
                    <td>{{ $t(varKey) }}</td>
                </tr>
            
                <tr>
                    <td>Sub-keys</td>
                    <td>$t('colors.red')</td>
                    <td>{{ $t('colors.red') }}</td>
                </tr>
            
                <tr>
                    <td>Trans in attribute</td>
                    <td>v-text="$t('hello-world')"</td>
                    <td><span v-text="$t('hello-world')"></span></td>
                </tr>
            
                <tr>
                    <td>Formatted text</td>
                    <td>v-html="$t('formatted-hello-world')"</td>
                    <td><span v-html="$t('formatted-hello-world')"></span></td>
                </tr>
            
                <tr>
                    <td>Variable substitution</td>
                    <td>
                        $t('hi-user-welcome', { user: 'John' })<br>
                        <small v-pre>Where 'hi-user-welcome' = "Hi, {user}. Welcome."</small>
                    </td>
                    <td>{{ $t('hi-user-welcome', { user: 'John' }) }}</td>
                </tr>
                
                <tr>
                    <td>Variable substitution with tag</td>
                    <td>
                        $t('hi-user-welcome', { user: boldName })<br>
                        <small>Where boldName = '&lt;b&gt;John&lt;/b&gt;'</small>
                    </td>
                    <td>{{ $t('hi-user-welcome', { user: boldName }) }}</td>
                </tr>
                
                <tr>
                    <td>Pluralization</td>
                    <td>
                        $t('item-count-colon', { count: 1 }, 1)<br>
                        $t('item-count-colon', { count: 2 }, 2)
                    </td>
                    <td>
                        {{ $t('item-count-colon', { count: 1 }, 1) }}<br>
                        {{ $t('item-count-colon', { count: 2 }, 2) }}
                    </td>
                </tr>
            
                <tr>
                    <td>Fallback message</td>
                    <td>
                        $t('fallback-message')<br>
                        <small>'fallback-message' is existing on in 'en'</small>
                    </td>
                    <td>{{ $t('fallback-message') }}</td>
                </tr>
            
                <tr>
                    <td>Non-existent key</td>
                    <td>$t('non-existent-key')</td>
                    <td>{{ $t('non-existent-key') }}</td>
                </tr>
            
                <tr>
                    <td>Custom directive</td>
                    <td v-pre>{{ 'hello-world' | translate }}</td>
                    <td>{{ 'hello-world' | translate }}</span></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                varKey: 'hello-world',
                boldName: '<b>John</b>'
            };
        }
    };
</script>

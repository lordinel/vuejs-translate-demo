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
                    <td>$t(varKey)</td>
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
                        <small>Note: Variable in template string should be enclosed in curly braces with no spaces<br>
                        Example: "Hi, {user}. Welcome.", not "Hi, { user }. Welcome."</small>
                    </td>
                    <td>{{ $t('hi-user-welcome', { user: 'John' }) }}</td>
                </tr>
            
                <tr>
                    <td>Fallback message (only existing in en)</td>
                    <td>$t('fallback-message')</td>
                    <td>{{ $t('fallback-message') }}</td>
                </tr>
            
                <tr>
                    <td>Non-existent key</td>
                    <td>$t('non-existent-key')</td>
                    <td>{{ $t('non-existent-key') }}</td>
                </tr>
            
                <tr>
                    <td>Custom directive</td>
                    <td>v-t="'hello-world'"</td>
                    <td><span v-t="'hello-world'"></span></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                varKey: 'hello-world'
            };
        }
    };
</script>

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
                    <td v-pre>{{ $gettext('hello-world') }}</td>
                    <td>{{ $gettext('hello-world') }}</td>
                </tr>
            
                <tr>
                    <td>Variable key</td>
                    <td v-pre>
                        {{ $gettext(varKey) }}<br>
                        <small>Where varKey = 'hello-world'</small>
                    </td>
                    <td>{{ $gettext(varKey) }}</td>
                </tr>
            
                <tr>
                    <td>Sub-keys</td>
                    <td>Not supported</td>
                    <td>{{ $gettext('colors.red') }}</td>
                </tr>
            
                <tr>
                    <td>Trans in attribute</td>
                    <td>v-text="$gettext('hello-world')"</td>
                    <td><span v-text="$gettext('hello-world')"></span></td>
                </tr>
            
                <tr>
                    <td>Formatted text</td>
                    <td>v-html="$gettext('formatted-hello-world')"</td>
                    <td><span v-html="$gettext('formatted-hello-world')"></span></td>
                </tr>
            
                <tr>
                    <td>Variable substitution</td>
                    <td>
                        &lt;span v-translate="{user: 'John'}"&gt;hi-user-welcome-percent&lt;/span&gt;<br>
                        <small v-pre>Where 'hi-user-welcome-percent' = "Hi, %{ user }. Welcome."</small>
                    </td>
                    <td><span v-translate="{user: 'John'}">hi-user-welcome-percent</span></td>
                </tr>
            
                <tr>
                    <td>Variable substitution with tag</td>
                    <td>
                        &lt;span v-translate="{user: boldName}"&gt;hi-user-welcome-percent&lt;/span&gt;<br>
                        <small>Where boldName = '&lt;b&gt;John&lt;/b&gt;'</small>
                    </td>
                    <td><span v-translate="{user: boldName}">hi-user-welcome-percent</span></td>
                </tr>
            
                <tr>
                    <td>Pluralization</td>
                    <td>
                        &ltspan v-translate="{count: 1}" :translate-n="1"<br>
                        translate-plural="item-count-percent_plural"&gt;<br>
                        item-count-percent<br>
                        &lt;/span&gt;<br>
                        Interpolation with plural does not work.
                    </td>
                    <td>
                        <span
                            v-translate="{count: 1}"
                            :translate-n="1"
                            translate-plural="item-count-percent_plural"
                        >
                            item-count-percent
                        </span>
                        <br>
                        <span
                            v-translate="{count: 2}"
                            :translate-n="2"
                            translate-plural="item-count-percent_plural"
                        >
                            item-count-percent
                        </span>
                    </td>
                </tr>
            
                <tr>
                    <td>Fallback message</td>
                    <td v-pre>
                        {{ $gettext('fallback-message') }}<br>
                        <small>'fallback-message' is existing on in 'en'</small>
                    </td>
                    <td>{{ $gettext('fallback-message') }}</td>
                </tr>
            
                <tr>
                    <td>Non-existent key</td>
                    <td v-pre>{{ $gettext('non-existent-key') }}</td>
                    <td>{{ $gettext('non-existent-key') }}</td>
                </tr>
            
                <tr>
                    <td>Custom directive</td>
                    <td>
                        &lt;span v-translate&gt;hello-world&lt;/span&gt;<br>
                        or &lt;translate&gt;hello-world&lt;/translate&gt;<br>
                    </td>
                    <td><translate>hello-world</translate></td>
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

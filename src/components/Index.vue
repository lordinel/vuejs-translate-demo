<template>
    <div>
        <h1>{{ translatePluginName }}</h1>
        <component :is="translatePluginComponent"></component>
    </div>
</template>

<script>
    import config from '../config';
    
    export default {
        computed: {
            translatePluginName() {
                return config.TRANSLATE_PLUGIN.name;
            },
            translatePluginComponent() {
                return this.load(config.TRANSLATE_PLUGIN.component);
            }
        },

        methods: {
            load(component) {
                return () => import(`@/components/${component}.vue`);
            }
        }
    };
</script>

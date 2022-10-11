
<script lang="ts">
    import {helloSubject} from '../stores/hello.store';


    export default {
        name: 'VueHello',
        props: {
            name: String
        },
        data() {
            return {
                yo: '',
            }
        },
        methods: {
            yoFrom() {
                helloSubject.next('Yo from Vue');
            }
        },
        mounted() {
            helloSubject.subscribe(x => this.yo = x);
        }
    }
</script>

<template>
    <h1 class="text-green-500">Hello {{name}}</h1>
    <button @click="yoFrom()">Yo</button>
    <p>{{yo}}</p>
</template>
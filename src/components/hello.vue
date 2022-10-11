
<script>
    import {helloSubject} from '../stores/hello.store';


    export default {
        name: 'VueHello',
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
    <h1>Hello Vue</h1>
    <button @click="yoFrom()">Yo</button>
    <p>{{yo}}</p>
</template>

<style>
    h1 {
        color: green;
    }
</style>
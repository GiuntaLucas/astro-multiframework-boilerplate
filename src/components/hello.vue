
<script>
    import {helloSubject} from '../stores/hello.store';


    export default {
        name: 'VueHello',
        data() {
            return {
                title: 'Vue',
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
    <h1 class="text-green-500">Hello {{title}}</h1>
    <button @click="yoFrom()">Yo</button>
    <p>{{yo}}</p>
</template>
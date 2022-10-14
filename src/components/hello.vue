
<script lang="js">
    import {helloSubject} from '../stores/hello.store';
    import {searchSubject} from '../stores/search.store';


    export default {
        name: 'VueHello',
        props: {
            name: String
        },
        data() {
            return {
                yo: '',
                search: '',
            }
        },
        methods: {
            yoFrom() {
                helloSubject.next('Yo from Vue click');
            }
        },
        mounted() {
            helloSubject.subscribe(x => this.yo = x);
            searchSubject.subscribe(x => this.search = x);
        }
    }
</script>

<template>
    <h2 class="text-green-500">Hello {{name}}</h2>
    <button @click="yoFrom()">Yo</button>
    <p>{{yo}}</p>
    <p>{{search}}</p>
</template>
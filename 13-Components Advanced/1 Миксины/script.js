const userMixin = {
    methods: {
        getUserInformation(userId) {
            let user = [
                'ddd',
                '2svsv',
                '3sdvsd'
            ];
            return user[userId];
        }
    }
}

Vue.component('user-admin', {
    mixins: [userMixin],
    template: '<div v-if="user">Name: {{ user }}</div>',
    props: {
        userId: {
            type: Number
        }
    },
    data: () => ({
        user: undefined
    }),
    mounted() {
        this.user = this.getUserInformation(2);
    }
});

new Vue({
    el: '#app',
    data:{
        userId: 1,
    }
});
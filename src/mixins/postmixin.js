export default {
  
    data() {
        return {
            openProfile: false,
            title: '',
            content: '',
            post: [],
        }
    },
    props: {
        msg: String
    },
    watch: {
        post: {
            handler() {
                localStorage.setItem('postInfo', JSON.stringify(this.post));
            },
            deep: true,
        },
    },
    methods: {
        addProfile() {
            this.openProfile = !this.openProfile;
        },
        addPostDetail() {
            // localStorage.setItem('todo_items', JSON.stringify(this.post));


            const a = {
                title: this.title,
                content: this.content
            }
            this.post.push(a);


            console.log(this.post.length);
            this.title = "";
            this.content = "";
            this.addProfile();

        }
    }
}
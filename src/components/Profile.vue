<template>
<div class="container1">
    <div class="container">
        <button @click="addProfile()">Add Profile</button>
    </div>.
    <div v-if="!openProfile">
        <div class="post-info" v-for="p in post" :key="p.title">

            <div class="title">{{p.title}}</div>
            <div class="content">{{p.content}}</div>
            <div class="action">
                <router-link :to="`/post/${p.title}`">
                    <button>View Post</button>
                </router-link>

                    <button @click="editPost(p)">Edit</button>

                <button @click="deletePost(p)">Delete</button>

            </div>
        </div>
    </div>

    <div class="card" v-if="openProfile">
        <h1>Profile</h1>
        <input type="text" placeholder="Enter Title" v-model="title">
        <textarea placeholder="Enter Content" v-model="content"></textarea>

        <div class="submit">
            <button @click="addPostDetail()">Submit Profile</button>
        </div>
    </div>

</div>
</template>

<script>
import postmixin from '../mixins/postmixin';
export default {
    name: 'User-Profile',
    mixins: [postmixin],
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
    methods: {
        addProfile() {
            this.openProfile = !this.openProfile;
        },
        addPostDetail() {
            const a = {
                title: this.title,
                content: this.content
            }
            this.post.push(a);

            console.log(this.post.length);
            this.title = "";
            this.content = "";
            this.addProfile();

        },
        editPost(item)
        {
          this.addProfile();

          console.log(item);
          this.title=item.title;
          this.content=item.content;


        },
        deletePost(item)
        {
            console.log(item);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;

}

.action {
    display: flex;
    width: 20%;
    justify-content: space-between;
}

.container1 {
    width: 100%;

}

.post-info {
    background: rgb(107, 107, 147);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1%;
    margin-left: auto;
    margin-right: auto;
    max-width: 60%;
    flex-wrap: wrap;
    min-height: 30%;
    margin-bottom: 1%;

}

.title {
    font-size: 32px;

}

.content {
    font-size: 16px
}

button {
    background: rgb(134, 134, 143);
    display: flex;
    width: fit-content;
    height: fit-content;
}

.card {
    background: rgb(107, 107, 147);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
    max-width: 60%;
    margin-bottom: 8%;
}

input[type=text] {
    background: white;
    margin-top: 10px;
    min-width: 50%;

}

textarea {
    background: white;
    flex-wrap: wrap;
    margin-top: 10px;
    min-width: 50%;
    min-height: 10%;
    max-height: 279px;
    max-width: 445px;
    height: 279px;

}

.submit {
    margin-top: 8%;
    margin-bottom: 8%;

}
</style>

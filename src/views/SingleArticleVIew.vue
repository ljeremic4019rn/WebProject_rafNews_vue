<template>
	<div class="container">
		<div class="container-fluid">
			<h1 class="mt-3">{{article.title}}</h1>
			<p class="text-muted">{{getAuthorName(article.authorId)}} | {{new Date(article.date).toLocaleDateString('en-GB')}}</p>
			<b-badge pill variant="info" class="mr-1 mb-5" v-for="tag in tags" :key="'tag'+tag.id" :to="{ path: `/tag/${tag.id}`}" :id="tag.id">#{{tag.name}}<br></b-badge>
			<p>{{article.content}}</p>
			<h3 class="mt-5">Add a comment:</h3>
			<div>
				<b-form class="mb-3" @submit="onSubmit">

					<b-form-group id="commentAuthor" label="Your name:" label-for="name">
						<b-form-input
							v-model="form.authorName"
							placeholder="Name"
							required
						></b-form-input>
					</b-form-group>

					<b-form-group id="commentContent" label="Enter your comment:" label-for="content">
						<b-form-textarea
							v-model="form.content"
							placeholder="Comment"
							required
						></b-form-textarea>
					</b-form-group>

					<b-button type="submit" variant="primary">Post</b-button>
				</b-form>
			</div>
			<h3 class="mt-5">Comments:</h3>
			<!--      <p v-for="comment in articleComments" :key="'comment'+comment.id">{{comment.content}}</p>-->
			<b-card v-for="comment in articleComments" :key="'comment'+comment.id"  border-variant="light" :header="comment.authorName" class="text-center mt-4 mb-4">
				<b-card-text>{{comment.content}}</b-card-text>
				<br>
				<small>{{new Date(comment.date).toLocaleDateString('en-GB')}}</small>
			</b-card>

		</div>
	</div>
</template>

<script>
export default {
	name: "SingleArticleView",
	data(){
		return {
			//user: JSON.parse(atob(localStorage.getItem('jwt').split('.')[1])),
			article: {},
			users: [],
			tags: [],
			articleComments: [],
			form: {
				articleId: this.$route.params.id,
				authorName: '',
				content: ''
			}
		}
	},
	mounted() {
		this.$axios.get(`/api/articles/${this.$route.params.id}`)
			.then(response => {
				this.article = response.data
			});

		this.$axios.get('/api/users/')
			.then(response => {
				this.users = response.data
			});
		this.$axios.get(`/api/articles/${this.$route.params.id}/tags`)
			.then(response => {
				this.tags = response.data
				console.log(this.tags)
			});
		this.$axios.get(`/api/articles/${this.$route.params.id}/comments`)
			.then(response => {
				this.articleComments = response.data
			});

	},
	methods: {
		getAuthorName(){
			for (const user of this.users) {
				if(user.id === this.article.authorId){
					return `${user.name} ${user.lastname}`
				}
			}
		},

		onSubmit(event){
			event.preventDefault()

			this.$axios.post('/api/comments', this.form)
				.then((response) => {
					if(response.status === 200) {
						alert("Comment successfully added")
						this.articleComments.push(response.data)
						this.form.authorName.clear()
						this.form.content.clear()
					}
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}
}
</script>

<style scoped>

</style>
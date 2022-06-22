<template>
	<div class="mt-5">
		<b-card class="mt-3" v-for="article in articles" :key="article.id">
			<b-card-title>
				<b-link :to="{ path: `/articles/${article.id}`}">{{article.title}}</b-link>
			</b-card-title>
			<b-card-sub-title>
				{{new Date(article.date).toLocaleDateString('en-GB')}}
			</b-card-sub-title>
			<b-card-text>
				{{article.content | shorten}}
			</b-card-text>

		</b-card>
	</div>
</template>

<script>

export default {
	name: 'ArticlesByTagView',
	components: {
	},

	data(){
		return {
			user: JSON.parse(atob(localStorage.getItem('jwt').split('.')[1])),
			users: [],
			articles: [],
			categories: []
		}
	},

	filters: {
		shorten(text){
			return text.substring(0, 50) + '...';
		}
	},

	mounted() {
		this.$axios.get(`/api/articles/tag/${this.$route.params.id}`)//tagId
			.then(response => {
				this.articles = response.data
			})

		this.$axios.get('/api/users')
			.then(response => {
				this.users = response.data
			})
	}
}
</script>
<template>
	<div>
		<div>
			<b-table hover :items="articles" :fields="computedFields">
				<template v-slot:cell(edit)="data" v-if="user.role === 'admin'">
					<router-link :to="{ name: 'EditCategoryView', params: { category: {id: data.item.id, name: data.item.name, description: data.item.description }}}" tag="b-btn" class="btn-info">Edit</router-link>
				</template>
				<template v-slot:cell(delete)="data" v-if="user.role === 'admin'">
					<span><b-btn class="btn-danger" @click="deleteCategory(data.item.id)">Delete</b-btn></span>
				</template>
				<template v-slot:cell(date)="data">
					{{new Date(data.item.date).toLocaleDateString('en-GB')}}
				</template>
				<template v-slot:cell(author)>
					{{`${users.filter(u => u.id === user.id)[0].name} ${users.filter(u => u.id === user.id)[0].lastname}`}}
				</template>
			</b-table>
		</div>
		<router-link :to="{name: 'AddArticleView'}" tag="b-btn" class="btn-info" :class="{active: this.$router.currentRoute.name === 'AddArticleView'}">New Article</router-link>
	</div>
</template>

<script>
export default {
	name: "ArticlesView",
	computed: {
		computedFields() {
			if (this.user.role !== 'admin') {
				return this.fields.filter(field => !field.adminOnly)
			} else {
				return this.fields
			}
		}
	},
	data() {
		return {
			user: JSON.parse(atob(localStorage.getItem('jwt').split('.')[1])),
			users: [],
			articles: [],
			fields: [
				'title',
				'content',
				{
					label: 'Edit',
					key: 'edit',
					adminOnly: true
				},
				{
					label: 'Delete',
					key: 'delete',
					adminOnly: true
				},
				{
					label: 'Author',
					key: 'author'
				},
				{
					label: 'Date',
					key: 'date'
				}
			]
		}
	},
	methods: {
		deleteCategory(categoryId) {
			this.$axios.delete(`/api/categories/${categoryId}`)
				.then(() => {
					//this.categories = response.data
					this.categories = this.categories.filter(category => category.id !== categoryId)
				})
				.catch((err) => {
					console.log(err);
				})
		}
	},
	mounted() {
		this.$axios.get('/api/articles')
			.then(response => {
				this.articles = response.data
				console.log(this.articles[0])
			})

		this.$axios.get('/api/users')
			.then(response => {
				this.users = response.data
			})
	}
}
</script>

<style scoped>

</style>
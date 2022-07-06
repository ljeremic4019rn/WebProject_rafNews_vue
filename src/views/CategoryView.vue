<template>
	<div>
		<div>
			<b-table hover :items="categories" :fields="fields">
				<template v-slot:cell(name)="data">
					<router-link :to="{ path: 'articlesByCategory/' + data.item.id  }"> {{ data.item.name }} </router-link>
				</template>
				<template v-slot:cell(edit)="data">
					<router-link :to="{ name: 'EditCategoryView', params: { category: {id: data.item.id, name: data.item.name, description: data.item.description }}}" tag="b-btn" class="btn-info">Edit</router-link>
				</template>
				<template v-slot:cell(delete)="data">
					<span><b-btn class="btn-danger" @click="deleteCategory(data.item.id)">Delete</b-btn></span>
				</template>
			</b-table>
		</div>
		<router-link :to="{name: 'NewCategoryView'}" tag="b-btn" class="btn-info" :class="{active: this.$router.currentRoute.name === 'NewCategoryView'}">New Category</router-link>
	</div>
</template>

<script>
export default {
	name: "CategoryView",//todo ne mozes da obrises ako iam arktikal
	data(){
		return {
			user: JSON.parse(atob(localStorage.getItem('jwt').split('.')[1])),
			fields: [
				{
					label: 'Name',
					key: 'name'
				},
				'description',
				{
					label: 'Edit',
					key: 'edit'
				},
				{
					label: 'Delete',
					key: 'delete'
				}
			],
			categories: []
		}
	},
	methods: {
		deleteCategory(categoryId){//todo popravi path
			this.$axios.delete(`/api/cms_category/${categoryId}`)//todo pogledaj da li radi
				.then(() => {
					//this.categories = response.data
					this.categories= this.categories.filter(category => category.id !== categoryId)
				})
				.catch((err)=> {
					console.log(err);
				})
		}
	},
	mounted() {
		this.$axios.get('/api/categories')
			.then(response => {
				this.categories = response.data
			})
	}
}
</script>

<style scoped>

</style>
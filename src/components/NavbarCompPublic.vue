<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="primary">
			<b-navbar-brand>RafNews</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<router-link :to="{name: 'HomeView'}" tag="a" class="nav-link" :class="{active: this.$router.currentRoute.name === 'HomeView'}">Home</router-link>
					<router-link :to="{name: 'MostReadView'}" tag="a" class="nav-link" :class="{active: this.$router.currentRoute.name === 'MostReadView'}">Most Read</router-link>
					<b-nav-item-dropdown text="Categories" right>
						<!--            <router-link tag="b-dropdown-item" v-for="category in categories" :key="category.id" :value="category.id" :to="{ path: `/by-category/${category.id}`  }"> {{ category.name }} </router-link>-->
						<router-link tag="b-dropdown-item" v-for="category in categories" :key="category.id" :value="category.id" :to="{ path:'/by_category/' + category.id}"> {{ category.name }} </router-link>
					</b-nav-item-dropdown>

				</b-navbar-nav>

				<b-navbar-nav class="ml-auto">
					<li class="nav-item">
						<router-link :to="{name: 'Login'}" tag="a" class="nav-link" :class="{active: this.$router.currentRoute.name === 'Login'}">Login</router-link>
					</li>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: "NavbarCompPublic",
	data() {
		return {
			categories: [],
		}
	},

	methods: {

	},

	mounted() {
		this.$axios.get('/api/categories')
			.then(response => {
				this.categories = response.data;
			});
	}

}
</script>

<style scoped>

</style>
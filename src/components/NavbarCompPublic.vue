<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="primary">
			<b-navbar-brand>RafNews</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<router-link :to="{name: 'HomeView'}" tag="a" class="nav-link" :class="{active: this.$router.currentRoute.name === 'HomeView'}">Articles</router-link>
					<router-link :to="{name: 'MostRead'}" tag="a" class="nav-link" :class="{active: this.$router.currentRoute.name === 'MostRead'}">Most Read Monthly</router-link>

					<!--					<b-nav-item-dropdown text="Categories" right>-->
<!--						<b-dropdown-item v-for="category in categories" :key="category.id" @click="reload" :value="category.id" :to="`/publicArtByCategory/${category.id}`">{{ category.name }}</b-dropdown-item>-->
<!--					</b-nav-item-dropdown>-->
				</b-navbar-nav>

				<b-navbar-nav class="ml-auto">
					<li class="nav-item">
						<router-link :to="{name: 'SignInView'}" tag="a" class="nav-link" :class="{active: this.$router.currentRoute.name === 'SingInView'}">Sign in</router-link>
					</li>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
export default {
	name: "NavbarCompPublic",
	data() {
		return {
			categories: [],
		}
	},

	methods: {
		reload(){
			window.location.reload()
		}
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
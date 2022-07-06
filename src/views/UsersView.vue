<template>
	<div>
		<div>
			<b-table hover :items="users" :fields="fields">
				<template v-slot:cell(edit)="data">
					<router-link :to="{ path: 'cms_editUser/' + data.item.id }" tag="b-btn" class="btn-info">Edit</router-link>
				</template>
				<template v-slot:cell(status)="data">
					<span><b-btn v-if="data.item.role !== 'admin' " class="b-btn" @click="changeUserStatus(data.item.id, data.item.status, $event)"> {{ data.item.status }} </b-btn></span>
				</template>
				<template v-slot:cell(delete)="data">
					<span><b-btn class="btn-danger" @click="deleteUser(data.item.id)">Delete</b-btn></span>
				</template>
			</b-table>
		</div>
		<router-link :to="{name: 'AddUserView'}" tag="b-btn" class="btn-info" :class="{active: this.$router.currentRoute.name === 'AddUserView'}">New User</router-link>
	</div>
</template>

<script>
export default {
	name: "UsersView",
	data(){
		return {
			user: JSON.parse(atob(localStorage.getItem('jwt').split('.')[1])),
			fields: [
				'name',
				'lastname',
				'email',
				'role',
				'status',
				{
					label: 'Edit',
					key: 'edit'
				},
				{
					label: 'Delete',
					key: 'delete'
				},
				{
					label: 'Status',
					key: 'status'
				}
			],
			users: []
		}
	},
	methods: {
		deleteUser(userId){//todo popravi path
			this.$axios.delete(`/api/cms_users/delete/${userId}`)
				.then(() => {
					this.users = this.users.filter(user => user.id !== userId)
				})
				.catch((err)=> {
					console.log(err);
				})
		},

		changeUserStatus(userId, status, event){

			if (status === "Active"){
				this.$axios.put(`/api/cms_users/deactivate/${userId}`)
					.then(() => {
						event.target.innerHTML = "NotActive"
					})
					.catch((err)=> {
						console.log(err);
					})
			}
			else {
				this.$axios.put(`/api/cms_users/activate/${userId}`)
					.then(() => {
						event.target.innerHTML = "Active"
					})
					.catch((err)=> {
						console.log(err);
					})
			}

			window.location.reload()
		}
	},
	mounted() {
		this.$axios.get('/api/users')
			.then(response => {
				this.users = response.data
			})
	}
}
</script>

<style scoped>

</style>
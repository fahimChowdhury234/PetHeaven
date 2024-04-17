<template>
    <div class="container pt-5">
        <div class="row justify-content-center  g-2">
            <div class="col-md-3">
                <div class="sidebar">
                    <ul>
                        <li @click="tab = 'dashboard'" :class="tab === 'dashboard' ? 'active' : ''">
                            Dashboard
                        </li>
                        <li @click="tab = 'pets'" :class="tab === 'pets' ? 'active' : ''">
                            pet list
                        </li>
                        <li @click="tab = 'user'" :class="tab === 'user' ? 'active' : ''">
                            user list
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-9">
                <div class="row flex-column" v-if="tab === 'dashboard'">
                    <div class="col-md-12">
                        <div class="box ">
                            <h2>Number of Pets</h2>
                            <p v-if="allPets !== null">{{ allPets.length }}</p>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="box ">
                            <h2>Number of Pets Adopted</h2>
                            <p>20</p>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="box ">
                            <h2>Number of Users</h2>
                            <p v-if="allUser !== null">{{ allUser.length }}</p>
                        </div>
                    </div>
                </div>
                <div class="row" v-if="tab === 'pets'">
                    <div class="table-responsive">
                        <div class="table-wrapper">
                            <div class="table-title">
                                <div class="row">
                                    <div class="col-sm-5">
                                        <h2>Pet List</h2>
                                    </div>

                                </div>
                            </div>
                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Breed</th>
                                        <th>Color</th>
                                        <th>Gender</th>
                                        <th>age</th>
                                        <th>location</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="pet in allPets" :key="pet.id">
                                        <td>{{ pet._id }}</td>
                                        <td>{{ pet.name }}</td>
                                        <td>{{ pet.breed }}</td>
                                        <td>{{ pet.color }}</td>
                                        <td>{{ pet.gender }}</td>
                                        <td>{{ pet.age }}</td>
                                        <td>{{ pet.location }}</td>


                                        <td>
                                            <button class="delete text-danger" title="Delete"
                                                @click="deletPet(pet._id)">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            <!-- <div class="clearfix">
                            <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                            <ul class="pagination">
                                <li class="page-item disabled"><a href="#">Previous</a></li>
                                <li class="page-item"><a href="#" class="page-link">1</a></li>
                                <li class="page-item"><a href="#" class="page-link">2</a></li>
                                <li class="page-item active"><a href="#" class="page-link">3</a></li>
                                <li class="page-item"><a href="#" class="page-link">4</a></li>
                                <li class="page-item"><a href="#" class="page-link">5</a></li>
                                <li class="page-item"><a href="#" class="page-link">Next</a></li>
                            </ul>
                        </div> -->
                        </div>
                    </div>
                </div>
                <div class="table-responsive" v-if="tab === 'user'">
                    <div class="table-wrapper">
                        <div class="table-title">
                            <div class="row">
                                <div class="col-sm-5">
                                    <h2>User <b>Management</b></h2>
                                </div>
                                <!-- <div class="col-sm-7">
                                    <a href="#" class="btn btn-secondary"><i class="material-icons">&#xE147;</i>
                                        <span>Add New User</span></a>
                                    <a href="#" class="btn btn-secondary"><i class="material-icons">&#xE24D;</i>
                                        <span>Export to Excel</span></a>
                                </div> -->
                            </div>
                        </div>
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="user in allUser" :key="user.id">
                                    <td>{{ user._id }}</td>
                                    <td>{{ user.name }}</td>
                                    <td>{{ user.email }}</td>
                                    <td>{{ user.role }}</td>
                                    <td>{{ user.phone }}</td>
                                    <td>
                                        <button class="delete text-danger" title="Delete" @click="deletUser(user._id)">
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        <!-- <div class="clearfix">
                            <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                            <ul class="pagination">
                                <li class="page-item disabled"><a href="#">Previous</a></li>
                                <li class="page-item"><a href="#" class="page-link">1</a></li>
                                <li class="page-item"><a href="#" class="page-link">2</a></li>
                                <li class="page-item active"><a href="#" class="page-link">3</a></li>
                                <li class="page-item"><a href="#" class="page-link">4</a></li>
                                <li class="page-item"><a href="#" class="page-link">5</a></li>
                                <li class="page-item"><a href="#" class="page-link">Next</a></li>
                            </ul>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { usePetsStore } from '../../data.js';
const petsStore = usePetsStore();
const allUser = ref(null)
const allPets = ref(null)
watch(async () => {
    allUser.value = petsStore.users;
    allPets.value = petsStore.pets;

});
const tab = ref('dashboard')

const deletUser = ((id) => {
    petsStore.handelDeleteUser(id)
})
const deletPet = ((id) => {
    petsStore.handelDeletePet(id)
})
</script>

<style scoped>
.box {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
}

.box h2 {
    margin-top: 0;
    font-size: 18px;
    color: #333232;
    font-weight: 700;
}

.box p {
    margin: 0;
    font-size: 34px;
    color: #333232;
    font-weight: 700;
}

.sidebar {
    width: 100%;
    background-color: #ddd;
    border-radius: 6px;
    padding: 20px;
    height: 100%;
}

.sidebar ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
    padding: 0;
}

.sidebar ul li {
    padding: 10px 20px;
    /* text-align: center; */
    font-size: 18px;
    text-transform: capitalize;
    cursor: pointer;
    border-radius: 6px;
    transition: all .3s ease-in;
}

.sidebar ul li:hover {
    background-color: #F44336;
    color: #fff;
}

.sidebar .active {
    background-color: #F44336;
    color: #fff;
}

.table-responsive {
    margin: 30px 0;
}

.table-wrapper {
    min-width: 1000px;
    background: #fff;
    padding: 20px 25px;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}

.table-title {
    padding-bottom: 15px;
    background: #ddd;
    color: #fff;
    padding: 16px 30px;
    margin: -20px -25px 10px;
    border-radius: 3px 3px 0 0;
}

.table-title h2 {
    margin: 5px 0 0;
    font-size: 24px;
}

.table-title .btn {
    color: #566787;
    float: right;
    font-size: 13px;
    background: #fff;
    border: none;
    min-width: 50px;
    border-radius: 2px;
    border: none;
    outline: none !important;
    margin-left: 10px;
}

.table-title .btn:hover,
.table-title .btn:focus {
    color: #566787;
    background: #f2f2f2;
}

.table-title .btn i {
    float: left;
    font-size: 21px;
    margin-right: 5px;
}

.table-title .btn span {
    float: left;
    margin-top: 2px;
}

table.table tr th,
table.table tr td {
    border-color: #e9e9e9;
    padding: 12px 15px;
    vertical-align: middle;
}

table.table tr th:first-child {
    width: 60px;
}

table.table tr th:last-child {
    width: 100px;
}

table.table-striped tbody tr:nth-of-type(odd) {
    background-color: #fcfcfc;
}

table.table-striped.table-hover tbody tr:hover {
    background: #f5f5f5;
}

table.table th i {
    font-size: 13px;
    margin: 0 5px;
    cursor: pointer;
}

table.table td:last-child i {
    opacity: 0.9;
    font-size: 22px;
    margin: 0 5px;
}

table.table td a {
    font-weight: bold;
    color: #566787;
    display: inline-block;
    text-decoration: none;
}

table.table td a:hover {
    color: #2196F3;
}

table.table td a.settings {
    color: #2196F3;
}

table.table td a.delete {
    color: #F44336;
}

table.table td i {
    font-size: 19px;
}

table.table .avatar {
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
    width: 50px;
    height: 50px;
    object-fit: cover;

}

.status {
    font-size: 30px;
    margin: 2px 2px 0 0;
    display: inline-block;
    vertical-align: middle;
    line-height: 10px;
}

.text-success {
    color: #10c469;
}

.text-info {
    color: #62c9e8;
}

.text-warning {
    color: #FFC107;
}

.text-danger {
    color: #ff5b5b;
}

.pagination {
    float: right;
    margin: 0 0 5px;
}

.pagination li a {
    border: none;
    font-size: 13px;
    min-width: 30px;
    min-height: 30px;
    color: #999;
    margin: 0 2px;
    line-height: 30px;
    border-radius: 2px !important;
    text-align: center;
    padding: 0 6px;
}

.pagination li a:hover {
    color: #666;
}

.pagination li.active a,
.pagination li.active a.page-link {
    background: #03A9F4;
}

.pagination li.active a:hover {
    background: #0397d6;
}

.pagination li.disabled i {
    color: #ccc;
}

.pagination li i {
    font-size: 16px;
    padding-top: 6px
}

.hint-text {
    float: left;
    margin-top: 10px;
    font-size: 13px;
}

.delete {
    border: none;
    background: transparent;
}
</style>
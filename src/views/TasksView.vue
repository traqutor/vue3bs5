<template>
  <div class="d-flex flex-column flex-fill overflow-hidden m-3">
    <div class="nav custom-nav">
      <router-link class="nav-item custom-nav-item" to="/tasks/myTasks">
        <span class="nav-link custom-nav-link">My Tasks</span>
      </router-link>

      <router-link class="nav-link custom-nav-item" to="/tasks/requestedBy:me">
        <span class="nav-link custom-nav-link">Requested by me</span>
      </router-link>

      <router-link class="nav-link custom-nav-item" to="/tasks/taskBoard">
        <span class="nav-link custom-nav-link">Board</span>
      </router-link>

      <router-link class="nav-link custom-nav-item" to="/tasks/taskRaise">
        <span class="nav-link custom-nav-link">Raise Task</span>
      </router-link>

      <router-link class="nav-link custom-nav-item" to="/tasks/taskManage">
        <span class="nav-link custom-nav-link">Manage</span>
      </router-link>

      <router-link class="nav-link custom-nav-item" to="/tasks/taskProgress">
        <span class="nav-link custom-nav-link">Statistics</span>
      </router-link>
    </div>

    <div class="d-flex flex-column flex-fill">
      <router-view></router-view>
    </div>
  </div>
</template>

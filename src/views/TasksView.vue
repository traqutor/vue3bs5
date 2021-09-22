<template>
  <div class="d-flex flex-column flex-fill overflow-hidden">
    <div class="section-content">
      <nav class="side-nav-line side-nav-line-main nav-line-center">
        <div
          class="nav nav-tabs nav-fill border-secondary-light"
          id="main-nav-group"
        >
          <router-link
            class="nav-item nav-link"
            to="/tasks/taskList"
            aria-selected="true"
            active-class="active"
            >Task List</router-link
          >
          <router-link
            class="nav-item nav-link"
            to="/tasks/taskBoard"
            aria-selected="false"
            active-class="active"
          >Board</router-link
          >
          <router-link
            class="nav-item nav-link"
            to="/tasks/taskMap"
            role="tab"
            aria-selected="false"
            active-class="active"
          >Map</router-link
          >
          <router-link
            class="nav-item nav-link"
            to="/tasks/taskRaise"
            role="tab"
            aria-selected="false"
            active-class="active"
          >Raise Task</router-link
          >
          <router-link
            class="nav-item nav-link"
            to="/tasks/taskManage"
            role="tab"
            aria-selected="false"
            active-class="active"
          >Manage</router-link
          >
          <router-link
            class="nav-item nav-link"
            to="/tasks/taskProgress"
            role="tab"
            aria-selected="false"
            active-class="active"
          >Progress</router-link
          >
        </div>
      </nav>
    </div>
    <div class="d-flex flex-column flex-fill">
      <router-view></router-view>
    </div>
  </div>
</template>

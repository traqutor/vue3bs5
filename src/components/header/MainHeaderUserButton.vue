<template>
  <div class="d-flex align-items-center mx-3 dropdown">

    <div class="d-flex align-items-center on-hover h-100 dropdown-toggle pr-2" data-toggle="dropdown"
         aria-haspopup="true" aria-expanded="false" data-reference="parent">
      <figure class="avatar avatar-lg me-3" data-initial="AM" id="mainAvatar">
        <i class="avatar-presence away text-light"></i>
      </figure>

      <div class="media-body font-weight-middle pr-1">Alina Mclourd</div>
    </div>


    <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right shadow dropdown-insert-click">

      <div class="dropdown-header text-secondary pt-0 pb-1">My Status</div>

      <label class="toggle-input toggle-input-success m-0 font-weight-middle dropdown-item">
        <input type="radio" name="user-status" checked="" class="toggle-user-status" value="true">
        <span class="input-icon f-icon-20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-circle"><circle cx="12" cy="12"
                                                                                       r="10"></circle></svg><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-disc"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12"
                                                                                         r="3"></circle></svg></span>Available
      </label>

      <label class="toggle-input toggle-input-orange m-0 font-weight-middle dropdown-item">
        <input type="radio" name="user-status" class="toggle-user-status" value="false">
        <span class="input-icon f-icon-20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-circle"><circle cx="12" cy="12"
                                                                                       r="10"></circle></svg><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-disc"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12"
                                                                                         r="3"></circle></svg></span>Do
        not disturb
      </label>

      <div class="dropdown-divider"></div>

      <label class="toggle-input toggle-input-success m-0 font-weight-middle dropdown-item">
        <input type="checkbox" checked="">
        <span class="input-icon f-icon-20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-toggle-left"><rect x="1" y="5" width="22"
                                                                                          height="14" rx="7"
                                                                                          ry="7"></rect><circle cx="8"
                                                                                                                cy="12"
                                                                                                                r="3"></circle></svg><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-toggle-right"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle
            cx="16" cy="12" r="3"></circle></svg></span>On Duty
      </label>

      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="index.php?page=profile">My Profile</a>
      <a class="dropdown-item" href="#">Log Out</a>

    </div>

  </div>
</template>
